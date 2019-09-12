exports.seed = function(knex, Promise) {
  return knex('species').insert([
    { species_name: 'Star-nosed Mole' }, // 1
    { species_name: 'Platypus' }, // 2
    { species_name: 'Chameleon' }, // 3
    { species_name: 'Snail' }, // 4
    { species_name: 'Blue-footed Booby' },
    { species_name: 'Anteater' },
    { species_name: 'Minotaur' },
    { species_name: 'Raccoon' },
    { species_name: 'Flamingo' },
    { species_name: 'Kookaburra' }, // 10
  ]);
};
