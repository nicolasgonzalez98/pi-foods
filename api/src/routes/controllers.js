require('dotenv').config();
const axios = require("axios")
const {API_KEY, API_KEY2} = process.env;

export async function getApiInfo(){
    try {
        let apiData = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&number=100`)
        const { results } = apiData.data
        let data = results.map(e => {
            let dietas = e.diets
            if(e.vegetarian && !dietas.includes('vegetarian'))dietas.push('vegetarian');
            if(e.vegan && !dietas.includes('vegan'))dietas.push('vegan');
            if(e.lowFodmap && !dietas.includes('low fodmap'))dietas.push('low fodmap');
            if(e.glutenFree && !dietas.includes('gluten free'))dietas.push('gluten free');
            if(e.dairyFree && !dietas.includes('dairy free'))dietas.push('dairy free');

            return {
                id:e.id,
                name:e.title,
                lowFodmap: e.lowFodmap,
                vegetarian:e.vegetarian,
                vegan:e.vegan,
                glutenFree:e.glutenFree,
                dairyFree:e.dairyFree,
                healthScore: e.healthScore,
                summary: e.summary,
                diet:dietas,
                steps: (e.analyzedInstructions[0] && e.analyzedInstructions[0].steps?e.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
            }
        })
        return data
    } catch (error) {
        console.log(error)
        return([])
    }
}