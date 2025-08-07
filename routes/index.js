const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");


module.exports = () => {
  // Mostrar la pagina principal
  router.get("/", homeController.formalarioMenu);

  //Vinos

  // Vino Don Alejandro
  router.get("/vinoTintoDonAlejandro", homeController.formularioVinoTintoDonAlejandro);
  // Vino Seco Naranja
  router.get("/vinoDulceNaranja", homeController.formularioVinoDulceNaranja);
  //Vino tinto Jaboticaba
  router.get("/vinoTintoJaboticaba", homeController.formularioVinoTintoJaboticaba);
  //Vino blanco de naranja
  router.get("/vinoBlancoNaranja", homeController.formularioVinoBlancoNaranja);

  // Licores

  // Licor de carambola
  router.get("/licorCarambola", homeController.formularioLicorCarambola);
  // Licor de durazno
  router.get("/licorDurazno", homeController.formularioLicorDurazno);
  // Licor de jaboticaba
  router.get("/licorJaboticaba", homeController.formularioLicorJaboticaba);
  //Licor de Nance
  router.get("/licorNance", homeController.formularioLicorNance);


  return router;
};
