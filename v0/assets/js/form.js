let text = document.getElementById("text");
let video = document.getElementById("video");
let content = document.getElementById("content");
let dauer = document.getElementById("dauer");
let url = document.createElement("input");
const label = document.getElementsByClassName("required")[2];
let url2 = document.createElement("textarea");

function contentAufruf(url) {
  content.replaceWith(url);
}

function contentInitzializieren() {
  content = document.getElementById("content");
}

text.addEventListener("click", function () {
  url.type = "url";
  url.name = "content";
  url.id = "content";
  url.placeholder = "URL.....";
  dauer.removeAttribute("required");
  label.classList.remove("required"); // Entfernt die Klasse 'required'
  contentAufruf(url);
  contentInitzializieren();
});
video.addEventListener("click", function () {
  url2.rows = "7";
  url2.cols = "31";
  url2.name = "description";
  url2.id = "content";
  url2.minlength = "40";
  url2.placeholder = "YouTube-Embed-Code......";
  if (label.classList.contains("required") && !dauer.hasAttribute("required")) {
    console.log('Class "required" here');
  } else {
    label.classList.add("required");
    dauer.setAttribute("required", ""); // Fügt die Klasse hinzu
  }
  contentAufruf(url2);
  contentInitzializieren();
});
