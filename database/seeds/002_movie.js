
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: '8703da24-9f2e-4150-9501-7d7c4800391c', name: 'Movie 1', description: 'Movie 1 Description', releaseDate: '2021-01-01', genre: '976f9eb9-7784-43f0-9ea9-caa9a5779119', duration: 1200, rating: 4.5},
        {id: '67cbf6f0-f3e5-4258-9010-461627b15cb1', name: 'Movie 2', description: 'Movie 2 Description', releaseDate: '2021-01-01', genre: '11a3d310-6aad-4204-a984-aeef5fe6f616', duration: 1200, rating: 4.5},
        {id: '13e84afe-b0f9-401c-bc70-cebcddf872c7', name: 'Movie 3', description: 'Movie 3 Description', releaseDate: '2021-01-01', genre: 'cb2e97c3-91a0-4f74-891a-17f47c406d93', duration: 1200, rating: 4.5}
      ]);
    });
};
