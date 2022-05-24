const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');

require('dotenv').config();
const axios = require("axios")
const {API_KEY, API_KEY2} = process.env;

const router = Router();

let getApiInfo = async () => {
    try {
        let apiData = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`)
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

getApiInfoByName =  (n) => {
    // try {
    //     let apiData = await getApiInfo()
    //     let resultados = apiData.filter(e => e.name.toLowerCase().includes(n.toLowerCase()))
    //     return resultados

    // } catch (error) {
    //     console.log(error)
    // }
    let apiData = getApiInfo()
    .then(data => data.filter(e => e.name.toLowerCase().includes(n.toLowerCase())))
    .catch(err => console.log(err))
    
    return apiData

}

getDbInfoByName = async(n) => {
    try{
        let dataDb = await getDbInfo()
        return dataDb.filter(e => e.name.includes(n))
    }catch(err){
        console.log(err)
    }
}



router.get('/', async(req, res, next) => {
    const { name } = req.query
    try {
        let info
        if(name){
            info = await getApiInfoByName(name)
            if(info.length === 0){
                info = {error:'No hay recetas'}
            }
        }else{
            info = await getAllInfo();
        }
        
        return res.json(info)
    } catch (error) {
        next(error)
    }
})




module.exports = router