const persistence = require("../v1/models/persistence.js");
const http = require("http");
const url = require("url");
const fs=require("fs");

const server = http.createServer(function (req, res) {
  
    const queryParams = url.parse(req.url, true).query;
    const querySearch = queryParams.search ? queryParams.search.toLowerCase() : "";

    const tutorials = persistence.arrayOfTutorials.filter((tutorial) =>
        tutorial.name.toLowerCase().includes(querySearch)
    );
    let listItems = "";

    if (tutorials.length > 0) {
      tutorials.forEach(tutorial => {
        listItems += `<a href="tutorial.html"><li>${tutorial.name} (${tutorial.datum})</li></a>`;
      });
    } else {
        listItems = "<li>Keine Tutorials gefunden</li>";
    }
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/v0/assets/css/style.css" />
        <link rel="stylesheet" href="/v0/assets/css/flexbox.css" />
        <link rel="stylesheet" href="/v0/assets/css/tiles.css" />
        <title>List</title>
    </head>
    <body>
        <header>
            <img src="/v0/assets/img/logo.png" alt="Logo" width="100" />
            <h1>Liste der Kategorien</h1>
        </header>
        <nav>
            <a href="list.html">Liste der Kategorien</a>
            <a href="tutorials.html">Tutorials der Kategorien</a>
            <a href="tutorial.html">Details zum Tutorial</a>
            <a href="form.html">Tutorial hinzufügen</a>
        </nav>
        <h1>Tutorials mit: ${querySearch}</h1>
        <ul>
            ${listItems}
        </ul>
    </body>
    </html>`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(8844, function () {
    console.log("Ich lausche nun auf http://localhost:8844");
});