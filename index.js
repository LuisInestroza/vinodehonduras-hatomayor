const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const expressHDS = require("express-handlebars");
const passport = require("passport");
const router = require("./routes/index");
const crearError = require("http-errors");

require("dotenv").config({
  path: "variables.env",
});

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "handlebars",
  expressHDS({
    defaultLayout: "layout",
  })
);

app.set("view engine", "handlebars");
app.use(bodyParse.urlencoded({ extended: true }));

app.use(flash());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router());

//Error 404
app.use((req, res, next) => {
  next(crearError(404, "¡Ups! Página no encontrada"));
});

//Errores
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.locals.status = status;
  res.status(status);
  // Mostrar la pagina
  res.render("error", {
    message: error.message,
  });
});

const host = "0.0.0.0";
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log("Servidor Ejecutándose");
});
