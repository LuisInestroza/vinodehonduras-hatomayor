exports.formalarioMenu = async (req, res) => {
  // console.log(alumnos);
  res.render("home", {
    heroView: true,
    barraInicio: true,
    mostrarFooter: true,
  });
};

// Vinos

// Mostrar formulario de vino de Tinto Don Alejandro
exports.formularioVinoTintoDonAlejandro = async (req, res) => {
  res.render( "vinoTintoDonAlejandro", {
    barraProductos: true,
    mostrarFooter: true
  });
}

// Mostrar formulario de vino de seco naranja
exports.formularioVinoDulceNaranja = async (req, res) => {
  res.render("vinoDulceNaranja", {
    barraProductos: true,
    mostrarFooter: true,
  });
};

// Mostar formulario de vino tinto jaboticaba
exports.formularioVinoTintoJaboticaba = async(req, res) => {
  res.render("vinoTintoJaboticaba", {
    barraProductos: true,
    mostrarFooter: true,
  });
}

// Mostar fomulario de vino seco de naranja
exports.formularioVinoBlancoNaranja = async (req, res) => {
  res.render("vinoBlancoNaranja", {
    barraProductos: true,
    mostrarFooter: true,
  });
}


// Licores

//Licor de carambola
exports.formularioLicorCarambola = async (req, res) => {
  res.render("licorCarambola", {
    barraProductos: true,
    mostrarFooter: true,
  });
};

//Licor de durazno
exports.formularioLicorDurazno = async (req, res) => {
  res.render("licorDurazno", {
    barraProductos: true,
    mostrarFooter: true,
  });
};

//Licor de Jaboticaba
exports.formularioLicorJaboticaba = async (req, res) => {
  res.render("licorJaboticaba", {
    barraProductos: true,
    mostrarFooter: true,
  });
};
exports.formularioLicorNance = async (req, res) => {
  res.render("licorNance", {
    barraProductos: true,
    mostrarFooter: true,
  });
};
