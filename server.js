var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var cors = require('cors');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// get name
app.get('/name', mainCtrl.getName);
// get location
app.get('/location', mainCtrl.getLocation);
// get occupation
app.get('/occupations', mainCtrl.getOccupations);
// get occupation latest
app.get('/occupation/latest', mainCtrl.getOccupationLatest);
// get hobbies
app.get('/hobbies', mainCtrl.getHobbies);
// get hobbies parameter type
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
// get family
app.get('/family', mainCtrl.getFamily);
// get family parameter gender
app.get('/family/:gender', mainCtrl.getFamilyGender);
// get restaurants
app.get('/restaurants', mainCtrl.getRestaurants);



app.listen(3000, function(){
    console.log('I be listening on port 3000')
})