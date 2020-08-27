const request = require('request');

const getBreedName = process.argv[2].toLowerCase();

request(`https://api.thecatapi.com/v1/breeds/search?q=${getBreedName}`, (err, response, body) => {

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    return console.log(`The breed '${getBreedName}' is not valid please try again.\n`);
  } else if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(data[0].description);
  }

});