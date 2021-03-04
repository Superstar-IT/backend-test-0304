
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {id: '976f9eb9-7784-43f0-9ea9-caa9a5779119', name: 'Action', description: 'Description for Action Genre.'},
        {id: '11a3d310-6aad-4204-a984-aeef5fe6f616', name: 'Drama', description: 'Description for Drama Genre.'},
        {id: 'cb2e97c3-91a0-4f74-891a-17f47c406d93', name: 'Romance', description: 'Description for Romance Genre.'}
      ]);
    });
};
