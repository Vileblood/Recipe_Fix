const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://dthomas1986:r00tuser86@firstcluster.pf6q6.mongodb.net/new_recipe_set?retryWrites=true&w=majority");

const recipesSchema = {
    title: String,
    ingredients: Array,
    instructions: String,
    picture_link: String
}

const Recipe = mongoose.model('Recipe', recipesSchema);

app.get('/', (req, res) => {
    Recipe.find({}, function(err, recipes) {
        res.render('viewrecipes', {
            recipesList: recipes
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})