class Kategorie {
  constructor(name, bild) {
    this.name = name;
    this.bild = bild;
  }
}
class Bild {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
class Tutorial {
  constructor(name, sprache, beschreibung, dauer, datum, url, embedcode, bild) {
    this.name = name;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
    this.setDauer(dauer);
    this.setDatum(datum);
    this.url = url;
    this.embedcode = embedcode;
    this.Kapitals = [];
    this.Kategorien = [];
    this.bild = bild;
  }

  setDauer(dauer) {
    if (this.isValidDauer(dauer)) {
      this.dauer = getDauerInStundenUndMinuten(dauer);
    } else {
      throw new Error(
        "Die Dauer muss im Format 'HH:MM' angegeben werden, z. B. '02:30'."
      );
    }
  }

  isValidDauer(dauer) {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Format "HH:MM"
    return regex.test(dauer);
  }

  fuegeKategorieHinzu(kat) {
    this.Kategorien.push(kat);
  }

  fuegeKapitelHinzu(kap) {
    this.Kapitals.push(kap);
  }
  setDatum(datum) {
    if (datum instanceof Date && !isNaN(datum)) {
      this.datum = new Date(datum).toLocaleDateString();
    } else {
      throw new Error("Das Datum muss ein gültiges Date-Objekt sein.");
    }
  }
}

class Kapital {
  constructor(name, beschreibung, dauer) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.setDauer(dauer);
  }
  setDauer(dauer) {
    if (this.isValidDauer(dauer)) {
      this.dauer = dauer;
    } else {
      throw new Error(
        "Die Dauer muss im Format 'HH:MM' angegeben werden, z. B. '02:30'."
      );
    }
  }

  isValidDauer(dauer) {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Format "HH:MM"
    return regex.test(dauer);
  }
}

function getDauerInStundenUndMinuten(dauer) {
  const teile = dauer.split(":");
  const stunden = parseInt(teile[0], 10);
  const minuten = parseInt(teile[1], 10);
  if (stunden != 0) {
    return `${stunden} Std. ${minuten} Min.`;
  }
  return `${minuten} Min.`;
}

let bild1 = new Bild("Bild der Kategorie Web-Engineering", "/img/web.png");
let bild2 = new Bild(" Bild der Kategorie Software", "/img/sw.png");
let bild3 = new Bild(" Bild der Kategorie Mathe", "/img/dgl.webp");
let bild4 = new Bild(" Bild der Kategorie Datenbank", "/img/dp.png");

let Kategorie1 = new Kategorie("Web-Engineering", bild1);
let Kategorie2 = new Kategorie("Software", bild2);
let Kategorie3 = new Kategorie("Mathe", bild3);
let Kategorie4 = new Kategorie("Datenbank", bild4);
let kategorieArray = [Kategorie1, Kategorie2, Kategorie3, Kategorie4];
let tutorial1 = new Tutorial(
  "NodeJS",
  "DE",
  "Node.js ist ein JavaScript-Framework, das zur Entwicklung von skalierbaren und echtzeitfähigen    Webanwendungen dient. Dieses Video-Training richtet sich an Webentwickler, die einen ersten Einstieg in die Materie wagen möchten",
  "02:30",
  new Date(2023, 9, 15),
  null,
  "<iframe width= 560  height=315 src= https://www.youtube.com/embed/yS6QKQkfw_w  title= YouTube video player frameborder= 0 allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; Bild-in-Bild allowfullscreen></iframe>",
  new Bild("Bild der Kategorie Web-Engineering", "/img/node.webp")
);
let tutorial2 = new Tutorial(
  "Agile",
  "En",
  " Agile ist ein JavaScript-Framework, das zur Entwicklung von skalierbaren und echtzeitfähigen    Webanwendungen dient. Dieses Video-Training richtet sich an Webentwickler, die einen ersten Einstieg in die Materie wagen möchten",
  "02:30",
  new Date(2023, 9, 15),
  "https://www.youtube.com/embed/yS6QKQkfw_w",
  "<iframe width= 560  height=315 src= https://www.youtube.com/embed/yS6QKQkfw_w  title= YouTube video player frameborder= 0 allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; Bild-in-Bild allowfullscreen></iframe>",
  bild2
);
let tutorial3 = new Tutorial(
  "DGL1",
  "En",
  " Ein Differentialgleichung (DGL) ist eine Gleichung, die eine Funktion und ihre Ableitungen miteinander verknüpft. Sie dient dazu, Prozesse zu modellieren, bei denen sich Größen kontinuierlich verändern, wie z. B. Bewegung, Wachstum, Schwingungen oder Wärmeleitung.",
  "02:30",
  new Date(2023, 9, 15),
  null,
  "<iframe width= 560  height=315 src= https://www.youtube.com/embed/yS6QKQkfw_w  title= YouTube video player frameborder= 0 allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; Bild-in-Bild allowfullscreen></iframe>",
  bild3
);
let tutorial4 = new Tutorial(
  "Sql1",
  "En",
  " Ein Differentialgleichung (DGL) ist eine Gleichung, die eine Funktion und ihre Ableitungen miteinander verknüpft. Sie dient dazu, Prozesse zu modellieren, bei denen sich Größen kontinuierlich verändern, wie z. B. Bewegung, Wachstum, Schwingungen oder Wärmeleitung.",
  "02:30",
  new Date(2023, 9, 15),
  "https://www.youtube.com/embed/yS6QKQkfw_w",
  "<iframe width= 560  height=315 src= https://www.youtube.com/embed/yS6QKQkfw_w  title= YouTube video player frameborder= 0 allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; Bild-in-Bild allowfullscreen></iframe>",
  bild4
);
let tutorialArray = [tutorial1, tutorial2,tutorial3,tutorial4];

let kapital1 = new Kapital(
  " Einleitung:",
  "Einleitende Worte zum Thema",
  "00:10"
);
let kapital2 = new Kapital(" Hello World!:", "Erstes Testprogramm ", "00:20");
let kapital3 = new Kapital(
  " Einleitung:",
  "Einleitende Worte zum Thema",
  "00:10"
);

tutorial1.fuegeKapitelHinzu(kapital1);
tutorial1.fuegeKapitelHinzu(kapital2);
tutorial1.fuegeKapitelHinzu(kapital3);
tutorial1.fuegeKategorieHinzu(Kategorie1);

tutorial2.fuegeKapitelHinzu(kapital1);
tutorial2.fuegeKapitelHinzu(kapital2);
tutorial2.fuegeKapitelHinzu(kapital3);
tutorial2.fuegeKategorieHinzu(Kategorie2);

tutorial3.fuegeKapitelHinzu(kapital1);
tutorial3.fuegeKapitelHinzu(kapital2);
tutorial3.fuegeKapitelHinzu(kapital3);
tutorial3.fuegeKategorieHinzu(Kategorie3);

tutorial4.fuegeKapitelHinzu(kapital1);
tutorial4.fuegeKapitelHinzu(kapital2);
tutorial4.fuegeKapitelHinzu(kapital3);
tutorial4.fuegeKategorieHinzu(Kategorie4);

kategorieArray.sort((a, b) => a.name.localeCompare(b.name));

function getTutorialsZuKategorie(kategorieName) {
  let array = new Array();
  for (let i = 0; i < tutorialArray.length; i++) {
    for (let j = 0; j < tutorialArray[i].Kategorien.length; j++) {
      if (tutorialArray[i].Kategorien[j].name === kategorieName) {
        array.push(tutorialArray[i]);
        break;
      }
    }
  }
  return array;
}
//module.exports.(hier is the name which i can use in another module to call this func)=the real name of the function
module.exports.getTutorialsZuKat = getTutorialsZuKategorie;
module.exports.getDauerInSUndM = getDauerInStundenUndMinuten;
module.exports.arrayOfKategorie = kategorieArray;
module.exports.arrayOfTutorials = tutorialArray;
module.exports.Tutorial = Tutorial;
module.exports.Bild = Bild;
module.exports.Kategorie = Kategorie;
module.exports.kapital1 = kapital1;
module.exports.kapital2 = kapital2;
module.exports.kapital3 = kapital3;
