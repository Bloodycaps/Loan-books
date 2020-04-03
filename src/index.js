//Imports
const express = require("express");
const morgan = require("morgan");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));

//Global Variables

//Routes
app.use(require("./routes"));

//Public

//Start Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
