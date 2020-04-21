const express = require("express");
const router = express.Router();
const db = require("../controllers/database");

router.get("/", async (req, res) => {
  const autores = await db.query("SELECT * FROM autor");
  res.render("authors/index",{autores: autores.rows});
});

module.exports = router;
