/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Rosco', pet_type_id: 1, pet_food_type_id: 2},
    {id: 2, name: 'Fat Sam', pet_type_id: 2, pet_food_type_id: 4},
    {id: 3, name: 'Coi', pet_type_id: 3, pet_food_type_id: 1},
    {id: 4, name: 'Bella', pet_type_id: 4, pet_food_type_id: 3},
  ]);
};
