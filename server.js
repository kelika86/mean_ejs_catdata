// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static")); 
app.set('view engine', 'ejs');


// use app's get method and pass it the base route '/' and a callback
app.get('/cats', function (request, response) {
    response.render('cats');
})
app.get('/neko', function (request, response) {
    var sleeping = ["bed", "under the sunlight", "garden"]
    
    response.render('neko', {sleeping});
})

app.get('/elgato', function (request, response) {
    var sleeping=["under the moonlight", "basket", "forest"]
    response.render('elgato', {sleeping});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})