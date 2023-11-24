import {knex} from "../database/connection.js";


try {
    const orders = await knex('orders');
    const computedOrders = [];
    for (const order of orders) {
        order.user = await knex('users').where({ id : order.user_id }).first();
        order.restaurant = await knex('restaurants').where({ id : order.restaurant_id }).first();
        order.delivery = await knex('deliveries').where({ order_id : order.id }).first();
        computedOrders.push(order);
    }
    console.log(computedOrders)
}
catch(e) {
    console.error("Error while retrieving orders");
    console.log(e)
}

await knex.destroy();

