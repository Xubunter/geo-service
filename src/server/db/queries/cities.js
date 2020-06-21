const knex = require("../connection");

function addCities(data) {
  return knex
    .transaction(function (trx) {
      knex("cities")
        .transacting(trx)
        .insert(data)
        .then(function (resp) {
          var id = resp[0];
          return { id, trx };
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then(function (resp) {
      // console.log('Transaction complete.');
    })
    .catch(function (err) {
      console.error(err);
    });
}
async function getCities(data) {
  let count = await knex("cities")
    .where("country_id", data.country_id)
    .andWhere(
      knex.raw(`LOWER("name") like LOWER('%${data.q.trim()}%')`)
    )
    .count("id")
    .then((res) => res[0].count);

  let items = await knex("cities")
    .where("country_id", data.country_id)
    .andWhere(
      knex.raw(`LOWER("name") like LOWER('%${data.q.trim()}%')`)
    )
    .orderBy('id')
    .offset(data.offset)
    .limit(data.limit)
    .select("id", "name");
  return {
    count,
    items,
  };
}

module.exports = {
  addCities,
  getCities,
};
