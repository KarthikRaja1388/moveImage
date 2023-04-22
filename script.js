let wolf = document.querySelector(".img-wolf");
let btnRight = document.querySelector(".btn-right");
let btnLeft = document.querySelector(".btn-left");
let btnUp = document.querySelector(".btn-top");
let btnDown = document.querySelector(".btn-down");

let activeButton = null;

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  let key = event.key;
  moveImage(key);
});

function moveImage(direction) {
  if (direction === "ArrowUp") {
    wolf.classList = [];
    wolf.classList.add("move_up");
    activateButton(btnUp);
  }
  if (direction === "ArrowDown") {
    wolf.classList = [];
    wolf.classList.add("move_down");
    activateButton(btnDown);
  }
  if (direction === "ArrowLeft") {
    wolf.classList = [];
    wolf.classList.add("move_left");
    activateButton(btnLeft);
  }
  if (direction === "ArrowRight") {
    wolf.classList = [];
    wolf.classList.add("move_right");
    activateButton(btnRight);
  }
}

function activateButton(button) {
  if (activeButton) {
    activeButton.classList.remove("btn-active");
  }
  button.classList.add("btn-active");
  activeButton = button;
}
