const router = require("express").Router();

const genreDB = require('../models/genres-model.js');

// GET ALL GENRES
router.get("/", async (req, res) => {
  try {
    const genres = await genreDB.find();
    return res.status(200).json(genres);
  } catch (err) {
     return res.status(500).json({ err: err });
  }
});

// GET GENRE BY ID
router.get("/:id", async (req, res) => {
  const genreId = req.params.id;
  return genreDB.findById(genreId)
    .then((genre) => {
      if(!genre) return res.status(404).json({ err: "The genre with the specified id does not exist" });
      return res.status(200).json(genre);
    }).catch((err) => {
      return res.status(500).json({ err: "The genre information could not be retrieved" });
    })
});

// INSERT GENRE INTO DB
router.post("/", async (req, res) => {
  const newGenre = req.body;
  if (!newGenre.name) {
    res.status(404).json({ err: "Please provide the name" });
  } else {
    try {
      const genre = await genreDB.addGenre(newGenre);
      res.status(201).json(genre);
    } catch (err) {
      res.status(500).json({ err: "Error in adding genre" });
    }
  }
});

router.put("/:id", async (req, res) => {
  const genreId = req.params.id;
  const newChanges = req.body;
  const existing = await genreDB.findById(genreId);

  if(!existing) return res.status(404).json({ err: "The genre with the specified id does not exist" });
  
  if (Object.keys(newChanges).length === 0) {
    res.status(404).json({ err: "You are missing information" });
  } else {
    try {
      const addChanges = await genreDB.updateGenre(genreId, newChanges);
      res.status(200).json(addChanges);
    } catch (err) {
      res.status(500).json({ err: "Error in updating genre" });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const genreId = req.params.id;
  const exiting = await genreDB.findById(genreId);

  if(!exiting) 
    return res.status(404).json({ err: "The genre with the specified id does not exist" });

  try {
    const deleting = await genreDB.removeGenre(genreId);
    res.status(200).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting genre" });
  }
});

module.exports = router;
