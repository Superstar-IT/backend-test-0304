const {v4 : uuid} = require('uuid');

const db = require("../config/dbConfig.js");

// GET ALL GENRES
const find = () => {
  return db("genres");
};

// GET SPECIFIC GENRE BY ID
const findById = id => {
  return db("genres").where({ id }).first();
};

// ADD A GENRE
const addGenre = genre => {
  return db("genres").insert({ id: uuid(), ...genre }).returning('*')
    .then(([genre]) => (genre));
};

// UPDATE GENRE
const updateGenre = (id, post) => {
  return db("genres").where("id", id).update(post).returning('*')
    .then(([genre]) => (genre));
};

// REMOVE GENRE
const removeGenre = id => {
  return db("genres").where("id", id).del(['*'])
    .then(([genre]) => (genre));
};

module.exports = {
  find,
  findById,
  addGenre,
  updateGenre,
  removeGenre
};
