const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://jiahao:QE8GMArISSgnWu22@cluster0.whqk6.mongodb.net/final-project?retryWrites=true&w=majority",
                 {useNewUrlParser: true, useUnifiedTopology: true});

const drinksDAO = require('../daos/drinks-dao')
const fetch = require("node-fetch");

const external_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php"

let i = "a".charCodeAt(0)
let j = "z".charCodeAt(0)
let totalRunning = j - i + 1
console.log(totalRunning)

const handleAllQuery = async () => {

    let curRunning = 0
    let overAllData = 0
    try {
        for (;i <= j; ++i) {
            const response = await fetch(`${external_API}?f=${String.fromCharCode(i)}`)
            console.log("Querying for ", String.fromCharCode(i))
            let resultData = []
            const json = await response.json()
            const drinks = json.drinks
            if (drinks !== null) {
                resultData = [...drinks]
            } else {
                curRunning++
            }

            let totalData = resultData.length
            let saveCounter = 0
            resultData.map((drink) => {
                let ingredients = []

                for (let i = 0; i < 10; i++) {
                    let s = `strIngredient${i + 1}`
                    let ingredient = drink[s]
                    if (ingredient) {
                        ingredients.push(ingredient)
                    }
                }

                const newDrink = {
                    idDrink: drink.idDrink,
                    nameDrink: drink.strDrink,
                    category: drink.strCategory,
                    alcoholic: drink.strAlcoholic,
                    imageURL: drink.strDrinkThumb,
                    ingredients: ingredients
                }

                drinksDAO.createADrink(newDrink)
                    .catch(error => console.log(error))
                    .then(() => {
                        saveCounter++
                        overAllData++
                        console.log("save: ", saveCounter)
                        if (saveCounter === totalData) {
                            curRunning++
                            console.log(curRunning)
                            if (curRunning === totalRunning) {
                                console.log(overAllData)
                                mongoose.disconnect()
                                    .then(() => console.log(
                                        "saved successfully and mongodb disconnected"))
                                    .catch(error => console.log(error));
                            }
                        }

                    })
            })
        }
    } catch (error) {
        console.log(error)
    }
}

handleAllQuery()