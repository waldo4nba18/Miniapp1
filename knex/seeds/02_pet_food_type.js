/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Turtle Feed'},
    {id: 2, name: 'Bird Seed'},
    {id: 3, name: 'Dog Food'},
    {id: 4, name: 'Cat Food'},
  ]);
};
