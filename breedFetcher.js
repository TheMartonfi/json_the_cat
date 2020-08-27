const request = require('request');

const fetchBreedDescription = (breedName, done) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      done(err, null);
    } else {
      done(null, data[0].description);
    }
    
  });
};

module.exports = { fetchBreedDescription };