// const fs = require("fs");
// const path = require("path");

// const { addCountry } = require("../queries/countries.js");
// const { addCities } = require("../queries/cities.js");

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// const url = path.resolve('countries.txt');


// let fileContent = fs.readFileSync(url, "utf8");


// const countriesArray = fileContent.split('\n').map(item => item.replace(/,$/, ''));
// const countries = countriesArray.reduce((acc, item) => {
//   const [id, title] = item.split(';')
//   if (title) {
//     return {...acc, [id]: title}
//   }
//   return acc;
// }, {})

// let all = [];

// Object.entries(countries).map(([id, title]) => {
//   const country_id = id;
//   const url = path.resolve('cities', `${id}.txt`);
//   let fileContent = fs.readFileSync(url, "utf8");
//   console.log(id)

//   const citiesArray = fileContent.split('\n').map(item => item.replace(/,$/, ''));
//   citiesArray.map(async (item) => {
//     let [id, title, area, region] = item.split(';')
//     area = area && area !== 'undefined' ? area : null
//     region = region && region !== 'undefined' ? region : null
//     if (title) {
//       // console.log(id, title, area, region)
//       all.push({id, country_id, name: title, area, region})
//       return;
//     }
//     return;
//   })
// })

// const func = (index) => {
//   if (all.length > index) {
//     addCities(all[index]).then(() => {
//       func(index + 1);
//       if (index !== 0 &&  index % 1000 === 0) {
//         console.log(index)
//       }
//     })
//   } else {
//     return;
//   }
// }

