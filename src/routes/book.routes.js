const express = require("express");
const router = express.Router();
const db = require("../controllers/database");

router.get("/new", (req, res) => {
  res.render("books/new");
});

router.post("/new", async (req, res) => {
  const { titulo, editorial, area } = req.body;
  await db.query(
    "INSERT INTO libro (titulo, editorial, area) VALUES ($1, $2, $3)",
    [titulo, editorial, area]
  );
  res.redirect("/libros");
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const libro = await db.query("SELECT * FROM libro WHERE idlibro = $1", [id]);
  res.render("books/edit", { libro: libro.rows[0] });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, editorial, area } = req.body;
  await db.query(
    "UPDATE libro SET titulo = $1, editorial = $2, area = $3 WHERE idlibro = $4",
    [titulo, editorial, area, id]
  );
  res.redirect("/libros");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM libro WHERE idlibro = $1", [id]);
  res.redirect("/libros");
});

router.get("/", async (req, res) => {
  const libros = await db.query("SELECT * FROM libro");
  res.render("books/index", { libros: libros.rows });
});

module.exports = router;
