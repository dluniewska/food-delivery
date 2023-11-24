import {knex} from "../database/connection.js";


try {
    const del = await knex('restaurants').where('id', 2).del();
    console.log(del)
}
catch(e) {
    console.error("Error while retrieving orders");
    console.log(e)
}

await knex.destroy();
