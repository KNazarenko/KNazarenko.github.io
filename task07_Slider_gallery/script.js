let btn_prev = document.querySelector(".prev");
let btn_next = document.querySelector(".next");

let images = document.querySelectorAll(".photo img");
let i = 0;

btn_prev.onclick = function() {
  images[i].className = " ";
  i--;
  if (i < 0) i = images.length - 1;
  images[i].className = "showed";
};

btn_next.onclick = function() {
  images[i].className = " ";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].className = "showed";
};
