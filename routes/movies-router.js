const router = require("express").Router();

const movieDB = require('../models/movies-model.js');

// GET ALL MOVIES
router.get("/", async (req, res) => {
  try {
    const movies = await movieDB.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// GET MOVIE BY ID
router.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await movieDB.findById(movieId);
    if (!movie) {
      res
        .status(404)
        .json({ err: "The movie with the specified id does not exist" });
    } else {
      res.status(200).json(movie);
    }
  } catch (err) {
    res.status({ err: "The movie information could not be retrieved" });
  }
});

// INSERT MOVIE INTO DB
router.post("/", async (req, res) => {
  const newMovie = req.body;
  if (!newMovie.name) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const movie = await movieDB.addMovie(newMovie);
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({ err: "Error in adding movie" });
    }
  }
});

router.put("/:id", async (req, res) => {
  const movieId = req.params.id;
  const newChanges = req.body;
  const existing = await movieDB.findById(movieId);

  if(!existing) return res.status(404).json({ err: "The movie with the specified id does not exist" });

  if (Object.keys(newChanges).length === 0) {
    res.status(404).json({ err: "You are missing information" });
  } else {
    try {
      const addChanges = await movieDB.updateMovie(movieId, newChanges);
      res.status(200).json(addChanges);
    } catch (err) {
      res.status(500).json({ err: "Error in updating movie" });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const movieId = req.params.id;
  const existing = await movieDB.findById(movieId);

  if(!existing) return res.status(404).json({ err: "The movie with the specified id does not exist" });

  try {
    const deleting = await movieDB.removeMovie(movieId);
    res.status(200).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting movie" });
  }
});

module.exports = router;
