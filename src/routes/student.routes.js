const express = require("express");
const router = express.Router();
const db = require("../controllers/database");

router.get("/new", async (req, res) => {
  res.render("student/new");
});

router.post("/new", async (req, res) => {
  const { ci, nombre, direccion, carrera, edad } = req.body;
  const newEstudiante = {
    CI: ci,
    Nombre: nombre,
    Direccion: direccion,
    Carrera: carrera,
    Edad: edad,
  };
  await db.query(
    "INSERT INTO estudiante (ci, nombre, direccion, carrera, edad) VALUES ($1, $2, $3, $4, $5) ",
    [ci, nombre, direccion, carrera, edad]
  );
  res.redirect("/estudiantes");
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const estudiante = await db.query(
    "SELECT * FROM estudiante WHERE idlector = $1",
    [id]
  );
  res.render("student/edit", { estudiante: estudiante.rows[0] });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { ci, nombre, direccion, carrera, edad } = req.body;
  await db.query(
    "UPDATE estudiante SET ci = $1, nombre = $2, direccion = $3, carrera = $4, edad = $5 WHERE idlector = $6",
    [ci, nombre, direccion, carrera, edad, id]
  );
  res.redirect("/estudiantes");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM estudiante WHERE IdLector = $1", [id]);
  res.redirect("/estudiantes");
});

router.get("/", async (req, res) => {
  const estudiantes = await db.query("SELECT * FROM estudiante");
  res.render("student/index", { estudiantes: estudiantes.rows });
});

module.exports = router;
