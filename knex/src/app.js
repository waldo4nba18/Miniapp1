const { response } = require('express');
const express = require('express');
const app = express();
const port = 8082;
const knex = require('knex')(require('../knexfile.js')["development"]);


app.get('/', (req, res) => {
    res.send(`Application is up and running`)
})



app.listen(port, () => {
    console.log(`Application and knex is up and running on port ${port}`)
})

app.get('/pets', (req, res) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name)
        res.json(petNames);
    })
})