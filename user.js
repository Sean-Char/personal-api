var user = {
  name: 'Sean',
  location: 'Dallas',
  occupations: ['Hair Dresser', 'Desktop Support', 'apple squad'],
  hobbies: [
    {
      name: 'beer',
      type: 'consumption'
    },
    {
      name: 'coding',
      type: 'learning'
    },
    {
      name: 'bbq',
      type: 'culinary'
    }
  ],
  family: [
    {
      name: 'Jenny',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'Evan',
      relation: 'son',
      gender: 'male'
    },{
      name: 'Milana',
      relation: 'daughter',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Bluefish',
      type: 'sushi',
      rating: 9
    },
    {
      name: 'Malai',
      type: 'asian fusion',
      rating: 7
    },
    {
      name: 'Texas de Brazil',
      type: 'brazilian bbq',
      rating: 8
    }
  ]
}
module.exports = user;