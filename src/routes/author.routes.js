const express = require("express");
const router = express.Router();
const db = require("../controllers/database");

router.get("/new", (req, res) => {
  res.render("authors/new");
});

router.post("/new", async (req, res) => {
  const { nombre, nacionalidad } = req.body;
  await db.query("INSERT INTO autor ( nombre, nacionalidad) VALUES ($1, $2) ", [
    nombre,
    nacionalidad,
  ]);
  res.redirect("/autores");
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const autor = await db.query("SELECT * FROM autor WHERE idautor = $1", [id]);
  res.render("authors/edit",{autor: autor.rows[0]});
});

router.get("/", async (req, res) => {
  const autores = await db.query("SELECT * FROM autor");
  res.render("authors/index", { autores: autores.rows });
});

module.exports = router;
