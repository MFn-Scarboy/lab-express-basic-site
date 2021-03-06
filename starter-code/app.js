
const express = require("express");
const hbs = require("hbs");
const app = express()
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/photos', (req, res, next) => {
    res.render('photos');
});

app.listen(9001)