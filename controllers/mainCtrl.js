var user = require('../user.js');

module.exports = {
    getName: function(req, res) {
        res.status(200).json(user.name)
    },
    getLocation: function(req, res) {
        res.status(200).json(user.location)
    },
    getOccupations: function(req, res) {
        // res.status(200).json(user.occupations)
        // if (req.query.order === 'desc') {
        //     console.log("desc")
        //     return res.status(200).json(user.occupations.slice().sort((a,b)=>b-a))
        // } 
        // return res.status(200).json(user.occupations.sort((a,b)=>a.localeCompare(b)))
        if(req.query.order === 'desc') {
            const desc = user.occupations.sort();
            res.json(desc)
        }
        else if (req.query.order === "asc"){
            const asc = user.occupations.reverse();
            res.json(asc)
        }
        else {
            res.json(user.occupations)
        }
    },
    getOccupationLatest: function(req, res) {
        res.status(200).json(user.occupations.slice(-1))
    },
    getHobbies: function(req, res) {
        res.status(200).json(user.hobbies)
    },
    getHobbiesType: function(req, res) {
        var type = req.params.type;
        var filterType = user.hobbies.filter(function(cur){
            return cur.type === type
        })
        return res.json(filterType)
    },
    getFamily: function(req, res) {
        res.status(200).json(user.family)
    },
    getFamilyGender: function(req, res) {
        var gender = req.params.gender;
        var filteredGender = user.family.filter(function(cur){
            return cur.gender === gender
        })
        return res.json(filteredGender)
    },
    getRestaurants: function(req, res) {
       if (req.query.restaurant) {
        var restaurantName = req.query.restaurant
        var filteredRestaurant = user.restaurants.filter(function(cur){
            return cur.name === restaurantName
        })
        return res.json(filteredRestaurant)
        }
        return res.json(user.restaurants)
    }
    



}