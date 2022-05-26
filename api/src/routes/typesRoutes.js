const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');

require('dotenv').config();
const axios = require("axios")
const {API_KEY, API_KEY2} = process.env;

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
            include:[{
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

let getAllInfo = async () => {
    try {
        let dataApi = await getApiInfo()
        let dataDB = await getDbInfo()

        let total = dataApi.concat(dataDB)
        return total
    } catch (error) {
        console.log(error)
    }
}

router.get('/', async (req, res, next) => {
    let resultado = ['vegetarian']
    try {
        let datos = await getAllInfo()
        let total = datos.map(e => e.diet)
        console.log(total)
        for(let i =0; i< total.length; i++){
            for(let j=0; j<total.length; j++){
                if(total[i][j] && !resultado.includes(total[i][j])){
                resultado.push(total[i][j])
            }}
        }
        
        const pending_promises_array = resultado.map(el => Diet.findOrCreate({
            where:{name:el}
        }))
        
        await Promise.all(pending_promises_array)

        const allTypes = await Diet.findAll()
        res.json(allTypes)
    } catch (error) {
        next(error)
    }
})

module.exports = router