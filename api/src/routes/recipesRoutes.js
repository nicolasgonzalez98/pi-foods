const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');

require('dotenv').config();
const axios = require("axios")
const {API_KEY} = process.env;

const router = Router();

let getApiInfo = async () => {
    try {
        let apiData = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const { results } = apiData.data
        let data = results.map(e => {
            return {
                id:e.id,
                name:e.title,
                vegetarian:e.vegetarian,
                vegan:e.vegan,
                glutenFree:e.glutenFree,
                dairyFree:e.dairyFree,
                healthScore: e.healthScore,
                summary: e.summary,
                diet:e.diets,
                score:e.weightWatcherSmartPoints,
                steps: (e.analyzedInstructions[0] && e.analyzedInstructions[0].steps?e.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
            }
        })
        return data
    } catch (error) {
        console.log(error)
        return([])
    }
}

let getDbInfo = async () => {
    try {
        let data = await Recipe.findAll({
            include:Diet
        })

        return data
        
        return data
    } catch (error) {
        console.log(error)
    }
}

let getAllInfo = async () => {

}



router.get('/', async(req, res, next) => {
    const { name } = req.query
    let info = await getApiInfo();
    return res.json(info)
})




module.exports = router