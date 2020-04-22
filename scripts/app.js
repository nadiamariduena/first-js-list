document.body.style.backgroundImage =
  "url(./img/DominicKesterton_metalmagazine_2.jpg)";
document.body.style.backgroundPosition = "right center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

// page.body.style.filter = "invert(2)";
// sectionList.style.backgroundColor = "red";
// ------------------------------------------
const wrapperSection = document.querySelector(".wrapper-section-list");

// ---------------------------------
// ---------------------------------

let menuCategory = document.querySelectorAll(".category");

menuCategory.forEach(({ style: category }) => {
  category.fontSize = "4rem";
  category.fontFamily = "arial";
  category.color = "#000";
  category.WebkitTextFillColor = "transparent";
  category.WebkitTextStrokeWidth = "1px";
});
// ---------------------------------
// ---------------------------------
// -----------------------------------------

let liffooItem = document.querySelectorAll(".foodItem");

liffooItem.forEach(({ style: foodItem }) => {
  foodItem.fontSize = "1rem";
  foodItem.fontFamily = "arial";
  foodItem.marginTop = "20px 0px";
  foodItem.textAlign = "center";
  foodItem.listStyle = "none";
});

// BUTTON COLOR FONT

liffooItem.forEach(({ style: item }) => {
  item.color = colorFunkyRandom();
});

//
//
// ---------------------------
// Button input
// ----------------------------
const userList = document.querySelector(".food-category");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const btnStyles = document.querySelectorAll(".addListBtn");

addListBtn.addEventListener("click", () => {
  //
  //
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(listInput.value);
  //
  //
  //
  newLi.appendChild(liContent);
  userList.appendChild(newLi);
});

// ---------------------------------------------
// BUTTON STYLES
// ---------------------------------------------
btnStyles.forEach(({ style: addListBtn }) => {
  addListBtn.margin = "10px 0px";
  addListBtn.padding = "12px 18px";
  addListBtn.borderRadius = "50px";
  //   addListBtn.backgroundColor = "#FCF3CF ";
  addListBtn.border = "0px solid #000";
});

// -------------------------------------
// COLOR FUNCTION
// -------------------------------------

function colorFunkyRandom() {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  //
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  return result;
}
//BUTTON-BG
let buttonBg = document.querySelectorAll(".addListBtn");

buttonBg.forEach(({ style: item }) => {
  item.backgroundColor = colorFunkyRandom();
});
// ---------------
// ----------------
// ------------
