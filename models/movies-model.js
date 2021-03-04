const {v4 : uuid} = require('uuid');
const db = require("../config/dbConfig.js");

// GET ALL MOVIES
const find = () => {
  return db("movies");
};

// GET SPECIFIC MOVIE BY ID
const findById = id => {
  return db("movies").where("id", id).first();
};

// ADD A MOVIE
const addMovie = movie => {
  return db("movies").insert({ id: uuid(), ...movie }).returning('*')
    .then(([movie]) => (movie));
};

// UPDATE MOVIE
const updateMovie = (id, post) => {
  return db("movies").where("id", id).update(post).returning('*')
    .then(([movie]) => (movie));
};

// REMOVE MOVIE
const removeMovie = id => {
  return db("movies").where("id", id).del(['*'])
    .then(([movie]) => (movie));
};

module.exports = {
  find,
  findById,
  addMovie,
  updateMovie,
  removeMovie
};
