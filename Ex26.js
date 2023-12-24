function f1() {
  var img = document.getElementById("img1");
  var imgHeight = img.getAttribute("height");
  var imgWidth = img.getAttribute("width");
  alert(`Height: ${imgHeight}, Width: ${imgWidth}`);

  var link = document.getElementById("a1");
  var href = link.getAttribute("href");
  alert(`href: ${href}`);
}

// f1();

function f2() {
  var img = document.getElementById("img1");
  img.setAttribute("width", "200");
  img.setAttribute("height", "200");
}

// f2();

function f3() {
  var img = document.getElementById("img1");
  var imgHeight = img.getAttribute("height");
  var imgWidth = img.getAttribute("width");
  img.setAttribute("height", `${imgHeight * 3}`);
  img.setAttribute("width", `${imgWidth * 3}`);
}

// f3();

function f4() {
  var td21 = document.createElement("td");
  td21.innerHTML = "I LOVE javascript";
  td21.setAttribute("align", "center");

  var td22 = document.createElement("td");

  var tr2 = document.getElementById("tr2");
  tr2.appendChild(td21);
  tr2.appendChild(td22);
}

// f4();

function CreateSampleRow() {
  var img = document.createElement("img");
  img.setAttribute("src", "images/1.jpg");

  var link = document.createElement("a");
  link.setAttribute("href", "1.html");
  link.innerHTML = "Link to page 1";

  var td31 = document.createElement("td");
  var td32 = document.createElement("td");

  var tr3 = document.createElement("tr");

  td31.appendChild(img);
  td32.appendChild(link);
  tr3.appendChild(td31);
  tr3.appendChild(td32);

  var table = document.getElementById("tbl");
  table.appendChild(tr3);
}

// CreateSampleRow();

function CreateRow(imgHeight, imgWidth, rowIndex) {
  var img = document.createElement("img");
  img.setAttribute("src", `images/${rowIndex}.jpg`);
  img.setAttribute("height", imgHeight);
  img.setAttribute("width", imgWidth);

  var link = document.createElement("a");
  link.setAttribute("href", `${rowIndex}.html`);
  link.innerHTML = `Link to page ${rowIndex}`;

  var td31 = document.createElement("td");
  var td32 = document.createElement("td");

  var tr3 = document.createElement("tr");

  td31.appendChild(img);
  td32.appendChild(link);
  tr3.appendChild(td31);
  tr3.appendChild(td32);

  var table = document.getElementById("tbl");
  table.appendChild(tr3);
}

// CreateRow(200, 200, 3);

function CreateTable(rows) {
  for (var i = 1; i <= rows; i++) {
    CreateRow(100, 200, i);
  }
}

// CreateTable(4);

function Ex8(values) {
  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");

  for (var i = 0; i < values.length; i += 3) {
    var td1 = document.createElement("td");
    td1.innerHTML = values[i];
    tr1.appendChild(td1);

    var td2 = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", `images/${values[i + 1]}`);
    img.setAttribute("height", values[i + 2]);
    img.setAttribute("width", values[i + 2]);
    td2.appendChild(img);
    tr2.appendChild(td2);
  }

  var table = document.getElementById("tbl3");
  table.appendChild(tr1);
  table.appendChild(tr2);
}

var values = [
  "black ",
  "1.jpg",
  "100",
  "pink",
  "2.jpg",
  "200",
  "white",
  "3.jpg",
  "100",
  "yellow",
  "4.jpg",
  "200"
];
Ex8(values);
