const express = require("express");
const router = express.Router();
const db = require("../controllers/database");

router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const estudiante = await db.query("SELECT * FROM estudiante WHERE IdLector = ?", [
    id,
  ]);
  res.render("student/edit", {estudiante: estudiante[0]});
});

router.get("/", async (req, res) => {
  const estudiantes = await db.query("SELECT * FROM estudiante");
  res.render("student/index", { estudiantes });
});

module.exports = router;
