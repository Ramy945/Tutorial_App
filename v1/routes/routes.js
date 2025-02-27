const express = require("express");
const router = express.Router();
const persistence = require("../models/persistence");
// [TODO]
// Weitere benoetigte Module einbinden

router.get("/", function (req, res) {
  // [TODO]
  // Implementieren: Liste der Kategorien anzeigen
  res.render("list.ejs", { katego: persistence.arrayOfKategorie });
});

router.get("/tutorials", function (req, res) {
  // [TODO]
  // Implementieren: Tutorials zur gegebenen Kategorie anzeigen
  // (Kategorie als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.category)
  res.render("tutorials.ejs", {
    tut: persistence.getTutorialsZuKat(req.query.category),
  });
});
router.get("/tutorial", function (req, res) {
  // [TODO]
  // Implementieren: Details zum Tutorial mit gegebenem Namen anzeigen
  // (Name als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.name)
  res.render("tutorial.ejs", {
    tut: persistence.arrayOfTutorials.filter((t) => t.name === req.query.name),
  });
});
router.get("/form", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  res.render("form.ejs");
});
router.get("/form.html", function (req, res) {
  // [TODO]
  // Implementieren: Formular zum Hinzufügen eines neuen Tutorials anzeigen
  res.render("form.ejs");
});
router.post("/form", (req, res) => {
  const params = req.body;
  console.log(params);
  const newTutorial = new persistence.Tutorial(
    params.name,
    params.language,
    params.description,
    params.duration,
    new Date(params.date),
    params.contentText,
    params.contentVideo,
    new persistence.Bild(params.name, "/img/dort.png")
  );
  if (params.contentVideo) {
    newTutorial.fuegeKapitelHinzu(persistence.kapital1);
    newTutorial.fuegeKapitelHinzu(persistence.kapital2);
    newTutorial.fuegeKapitelHinzu(persistence.kapital3);
  }
  persistence.arrayOfTutorials.push(newTutorial);
  const categories = []; 
  if (params.categories.includes(", ")) {
    const splitCategories = params.categories.split(", ");
    for (const category of splitCategories) {
      categories.push(category.trim());
    }
  } else {
    categories.push(params.categories.trim()); 
  }
  const existingCategories = persistence.arrayOfKategorie.filter(
    (category) => categories.includes(category.name) 
  );
  console.log(existingCategories.length);
  if (existingCategories.length === 0) {
    for (const categoryName of categories) {
      const newCategory = new persistence.Kategorie(
        categoryName,
        new persistence.Bild(params.name, "/img/dort.png") 
      );
      persistence.arrayOfKategorie.push(newCategory);
      newTutorial.fuegeKategorieHinzu(newCategory);
    }
  } else {
    existingCategories.forEach((existingCategory) => {
      newTutorial.fuegeKategorieHinzu(existingCategory);
    });
  }

  res.redirect("/");
});
module.exports = router;
