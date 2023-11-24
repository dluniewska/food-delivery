import {knex} from "../database/connection.js";

try {
    const orders = await knex('orders');
    console.log(orders)
}
catch(e) {
    console.error("Error while retrieving orders");
    console.log(e)
}

await knex.destroy();

