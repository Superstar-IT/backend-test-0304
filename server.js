const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require("cors");

const genreRouter = require('./routes/genres-router.js');
const movieRouter = require('./routes/movies-router.js');

// Middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routers
server.use("/api/genres", genreRouter);
server.use("/api/movies", movieRouter);

//Routes
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
