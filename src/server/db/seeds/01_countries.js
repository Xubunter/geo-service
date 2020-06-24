const fs = require("fs");
const path = require("path");

const { addCountry } = require("../queries/countries.js");
const { addCities } = require("../queries/cities.js");

exports.seed = function (knex, Promise) {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const url = path.resolve(__dirname, '../data/countries.txt');
  
  
  let fileContent = fs.readFileSync(url, "utf8");
  
  
  const countriesArray = fileContent.split('\n').map(item => item.replace(/,$/, ''));
  const countries = countriesArray.reduce((acc, item) => {
    const [id, title] = item.split(';')
    if (title) {
      return [...acc, { id: id, name: title}]
    }
    return acc;
  }, [])
  console.log(countries)

  return knex('countries').del()
      .then(function () {
        
          return knex("countries").insert(countries);
      });
};