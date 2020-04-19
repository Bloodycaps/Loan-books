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
  await db.query("INSERT INTO estudiante SET ?", [newEstudiante]);
  res.redirect("/estudiantes");
});

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const estudiante = await db.query(
    "SELECT * FROM estudiante WHERE idlector = $1",
    [id]
  );
  console.log(estudiante.rows);
  res.render("student/edit", { estudiante: estudiante.rows[0] });
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { ci, nombre, direccion, carrera, edad } = req.body;
  const newEstudiante = {
    ci,
    nombre,
    direccion,
    carrera,
    edad,
  };
  await db.query("UPDATE estudiante SET $1 WHERE idlector = $2", [
    newEstudiante,
    id,
  ]);
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
