const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');

require('dotenv').config();
const axios = require("axios")
const {API_KEY, API_KEY2} = process.env;

const router = Router();

router.post('/', async (req,res) => {
    let { name, summary, healthScore,image,steps, createdInDb, diets} = req.body;

    if(!name || !summary) return res.status(400).json({error:"Falta enviar datos obligatorios"})
    
    if(!image){image = 'https://st.depositphotos.com/1987177/3470/v/600/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg'}

    try {
        let recipe = await Recipe.create({
            name,
            summary,
            healthScore,
            image,
            steps,
            createdInDb
        })

        let dietDb = await Diet.findAll({
            where:{name:diets}
        })
        
        if(recipe){
            recipe.addDiet(dietDb)
            res.send('Receta creada')
        }

        return res.status(200).send('Receta creada')
    } catch (err) {
        return res.status(400).json({error:err})
    }
})

module.exports = router