var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js')
module.exports = {
    getName: function(req, res) {
        res.status(200).json(user.name)
    },
    getLocation: function(req, res) {
        res.status(200).json(user.location)
    },
    getOccupations: function(req, res) {
       // if order is equal to desc
        if(req.query.order === 'desc') {
            // sort the array in the user objec
            const desc = user.occupations.sort();
            // return the array
            res.json(desc)
        }
        // if order is equal to asc
        else if (req.query.order === "asc"){
            // reverse the array in the user object
            const asc = user.occupations.reverse();
            // return the array
            res.json(asc)
        }
        // else do nothing and return the occupations
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
    },
    updateName: function(req, res) {
      user.name = req.body.name
      return res.status(200).json(user)
    },
    updateLocation: function(req, res) {
      user.location = req.body.location
      return res.status(200).json(user)
    },
    addHobbies: function(req, res) {
      user.hobbies.push(req.body)
      return res.status(200).json(user)
    },
    addOccupations: function(req, res) {
      user.occupations.push(req.body.occupation)
      return res.status(200).json(user)
    },
    addFamily: function(req, res) {
      user.family.push(req.body)
      return res.status(200).json(user)
    },
    addRestaurants: function(req, res) {
      user.restaurants.push(req.body)
      return res.status(200).json(user)
    },
    getSkillz: function(req, res) {
      if(req.query.experience) {
        var experience = req.query.experience
        var filterExp = skillz.filter(function(cur){
          return cur.experience === experience
        })
        return res.status(200).json(filterExp)
      }
      return res.status(200).json(user)
    },
    postSkillz: function(req, res) {
      skillz.push(req.body)
      return res.status(200).json(skillz)
    },
    getSecrets: function(req, res) {
      return res.status(200).json(secrets)
    }




}
