let btn_prev = document.querySelector(".prev");
let btn_next = document.querySelector(".next");

let images = document.querySelectorAll(".photo img");
let i = 0;

//by add/remove
btn_prev.onclick = function() {
  images[i].classList.remove("showed");
  i--;
  if (i < 0) i = images.length - 1;
  images[i].classList.add("showed");
};

//by toggle
btn_next.onclick = function() {
  images[i].classList.toggle("showed");
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].classList.toggle("showed");
};
