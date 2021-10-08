const express = require("express");
require("dotenv").config();

const app = express();

const newsRouter = require("./src/routes/newsRoutes")

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log("App listening on port "+ port);
  console.log("http://localhost:"+port);
});

app.use(express.static("public"));
app.use("/",newsRouter);