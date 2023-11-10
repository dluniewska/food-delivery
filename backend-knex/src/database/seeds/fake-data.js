import bcrypt from 'bcryptjs'

const genPassword = () => bcrypt.hash('zaq1@WSX', 10)
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('deliveries').del()
  await knex('orders_products').del()
  await knex('orders').del()
  await knex('products').del()
  await knex('restaurants').del()
  await knex('users').del()

  await knex('users').insert([
    {
      id: 1,
      email: 'admin@fooddelivery.com',
      password: await genPassword()
    },
    {
      id: 2,
      email: 'jaskier@fooddelivery.com',
      password: await genPassword()
    }
  ]);

  await knex('restaurants').insert([
    {
      id: 1,
      name: 'Quixora',
      address: 'BagEnd 7, 13799 Hobbiton',
      type: 'FINE DINING'
    },
    {
      id: 2,
      name: 'Luminexia',
      address: 'Maladie 13, 91222, Oxenfurt, ',
      type: 'SUSHI'
    }
  ])

  await knex('products').insert([
    {
      id: 1,
      name: "Breakkie",
      description: "English breakfast",
      price: 9.99,
      restaurant_id: 1
    },
    {
      id: 2,
      name: "Trufflicious",
      description: "Truffle Parmesan Risotto",
      price: 29.99,
      restaurant_id: 1
    },
    {
      id: 3,
      name: "Maki",
      description: "24 rolls",
      price: 45.49,
      restaurant_id: 2
    },
    {
      id: 4,
      name: "Nigiri",
      description: "13 rolls",
      price: 45.49,
      restaurant_id: 2
    }
  ])

  await knex('orders').insert([
    {
      id: 1,
      date: new Date(),
      user_id: 1,
      restaurant_id: 1
    },
    {
      id: 2,
      date: new Date(),
      user_id: 2,
      restaurant_id: 2
    }
  ])

  await knex('orders_products').insert([
    {
      order_id: 1,
      product_id: 1,
      price: 21.98
    },
    {
      order_id: 2,
      product_id: 2,
      price: 12.19
    }
  ])

  await knex('deliveries').insert([
    {
      delivery_date: new Date(),
      order_id: 2
    }
  ])
}
