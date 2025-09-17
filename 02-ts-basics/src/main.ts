// NAMED IMPORT
import { getLuckyNumber } from "./utils/fortune";

// DEFAULT IMPORT
import mtTodayQuote from "./utils/fortune";

console.log(mtTodayQuote());

window.onload = function () {
  const txtInput = document.getElementById("txtInput") as HTMLInputElement;
  const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
  const todoContainer = document.getElementById(
    "todoContainer"
  ) as HTMLUListElement;

  btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    const liElement = document.createElement("li");
    liElement.innerHTML = txtInput.value;
    txtInput.value = "";
    todoContainer.appendChild(liElement);
  });

  const h3Element = document.createElement("h3");
  let luckyNumber = getLuckyNumber();
  h3Element.innerHTML = `Your lucky number today is ${luckyNumber}!!`;
  document.body.appendChild(h3Element);
};
