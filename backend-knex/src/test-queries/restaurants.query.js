import {knex} from "../database/connection.js";

try {
    const restaurants = await knex('restaurants');
    console.log(restaurants)
}
catch(e) {
    console.error("Error while retrieving orders");
    console.log(e)
}

await knex.destroy();

