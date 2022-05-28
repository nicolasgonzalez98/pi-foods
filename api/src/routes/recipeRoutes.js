const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');

require('dotenv').config();
const axios = require("axios")
const {API_KEY, API_KEY2} = process.env;

const router = Router();

router.post('/', async (req,res) => {
    let { name, summary, healthScore, steps, image, createdInDb, diets} = req.body;

    if(!name || !summary) return res.status(404).send("Falta enviar datos obligatorios")
    
    try {
        let recipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
            image,
            createdInDb
        })

        let dietDb = await Diet.findAll({
            where:{name:diets}
        })
        
        if(recipe){
            recipe.addDiet(dietDb)
            res.send('Receta creada')
        }

        return res.status(404).json({error:'Error'})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router