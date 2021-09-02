const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs');


mongoose.connect("mongodb+srv://dthomas1986:r00tuser86@firstcluster.pf6q6.mongodb.net/new_recipe_set?retryWrites=true&w=majority");

const recipeSchema = {
    title: String,
    ingredients: Array,
    instructions: String,
}

const Recipe = mongoose.model('Recipe', recipeSchema);

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('/viewrecipes', function(req, res){
    Recipe.find({}, function(err, recipes) {
        res.render('viewrecipes', {
            recipesList: recipes
        })
    })
});

app.listen(4000, function() {
    console.log('server is running');
});