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

// grt total
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
  dataPro.push(creatOpject);
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
      <td><button id="update">update</button></td>
      <td><button id="delete">delete</button></td>
      </tr>
      `;
  }
  document.getElementById("tbody").innerHTML = table;
}

localStorage.clear();

readDtat();
