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
};
