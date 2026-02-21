// create product
// clear input
// save localstorage
// read
// count
// delete
// update
// search
// clean data

const Title = document.querySelector("#title");
const price = document.querySelector("#price");
const taxes = document.querySelector("#taxes");
const ads = document.querySelector("#ads");
const discount = document.querySelector("#discount");
const count = document.querySelector("#count");
const category = document.querySelector("#category");
const serch = document.querySelector("#serch");
const serchTitle = document.querySelector("#serchTitle");
const serchCategory = document.querySelector("#serchCategory");
const submit = document.querySelector("#submit");
const total = document.querySelector("#total");

// for tapel
const table = document.querySelector("#table");
const deleteall = document.querySelector("#deleteall");
let names = "creat";
// grt total
let index;
function getTota() {
  if (taxes.value != "") {
    let resolt = +taxes.value + +ads.value + +price.value - +discount.value;
    total.innerHTML = resolt;
    total.style.background = "#12dc0f";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
console.log(Title);
// create product
let dataPro;
if (localStorage.data != null) {
  dataPro = JSON.parse(localStorage.getItem("data"));
} else dataPro = [];
// const values =
//   Title.value == ""
// //   taxes.value != "" &&
// //   ads.value != "" &&
// //   price.value != "" &&
// //   discount.value != "" &&
// //   count.value != "" &&
// //   category.value != "";
// console.log(values);
// if (values) {
//   submit.style.cursor = "not-allowed";
// }

submit.addEventListener("click", () => {
  let creatOpject = new Object();
  creatOpject.title = Title.value;
  creatOpject.taxes = taxes.value;
  creatOpject.ads = ads.value;
  creatOpject.price = price.value;
  creatOpject.discount = discount.value;
  creatOpject.count = count.value;
  creatOpject.category = category.value;
  creatOpject.total = total.innerHTML;
  if (names === "creat") {
    if (count.value) {
      for (let i = 0; i < count.value; i++) {
        dataPro.push(creatOpject);
      }
    } else {
      dataPro.push(creatOpject);
    }
  } else {
    dataPro[index] = creatOpject;
    names = "creat";
    submit.innerHTML = "Creat";
    count.style.display = "block";
    getTota();
  }
  localStorage.setItem("data", JSON.stringify(dataPro));
  //   console.log(data);
  clearInput();
  readDtat();
});

// clear input
function clearInput() {
  Title.value = "";
  taxes.value = "";
  ads.value = "";
  price.value = "";
  discount.value = "";
  count.value = "";
  category.value = "";
}

const data = JSON.parse(localStorage.getItem("data"));
console.log(table);
function readDtat() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
      <td>phone</td>
      <td><button id="update" onclick="updateData(${i})">update</button></td>
      <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
      </tr>
      `;
  }
  document.getElementById("tbody").innerHTML = table;
  if (dataPro.length > 0) {
    console.log(dataPro.length);
    deleteall.innerHTML = `<button onclick="deleteALL()">delete All (${dataPro.length})</button>`;
  }
  if (dataPro.length == 0) {
    deleteall.innerHTML = "";
  }
  getTota();
}

localStorage.clear();

readDtat();
function deleteData(nb) {
  dataPro.splice(nb, 1);
  localStorage.data = JSON.stringify(dataPro);
  console.log(nb);
  readDtat();
}

function deleteALL() {
  localStorage.clear();
  dataPro.splice(0);
  console.log(dataPro.length);
  readDtat();
}

function updateData(i) {
  console.log(dataPro[i]);
  Title.value = dataPro[i].title;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  category.value = dataPro[i].category;
  price.value = dataPro[i].price;
  discount.value = dataPro[i].discount;
  count.style.display = "none";
  submit.innerHTML = "Updet";
  names = "update";
  index = i;

  // Title.value = dataPro[i].title;
}
let sermode = "titel";
function getserchmode(id) {
  console.log(id);
  let serch = document.querySelector("#serch");
  if (id == "serchTitle") {
    sermode = "titel";
    serch.placeholder = "serch by Titel";
  } else if (id == "serchCategory") {
    sermode = "category";
    serch.placeholder = "serch by category";
  }
  serch.focus();
  serch.value = "";
  readDtat();
}
function serchData(value) {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (sermode == "titel") {
      if (dataPro[i].title.includes(value)) {
        table += `
          <tr>
          <td>${i}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td>phone</td>
          <td><button id="update" onclick="updateData(${i})">update</button></td>
          <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
          </tr>
          `;
      }
    } else if (sermode == "category") {
      if (dataPro[i].category.includes(value)) {
        table += `
          <tr>
          <td>${i}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td>phone</td>
          <td><button id="update" onclick="updateData(${i})">update</button></td>
          <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
          </tr>
          `;
      }
    }
    document.getElementById("tbody").innerHTML = table;
  }
}
