let slider1 = new Slider({
  images: ".gallery_1 img",
  btnPrev: ".gallery_1 .prev",
  btnNext: ".gallery_1 .next",
  auto: false
});

let slider2 = new Slider({
  images: ".gallery_2 img",
  auto: true,
  rate: 1500
});

function Slider(obj) {
  this.imgs = document.querySelectorAll(obj.images);
  this.btnPrev = document.querySelector(obj.btnPrev) || {}; //if there are no buttons
  this.btnNext = document.querySelector(obj.btnNext) || {}; //if there are no buttons
  this.auto = obj.auto;
  this.rate = obj.rate || 1000;
  let slider = this;
  let i = 0;

  //by add/remove
  this.prev = function() {
    console.log(1);
    slider.imgs[i].classList.remove("showed");
    i--;
    if (i < 0) i = slider.imgs.length - 1;
    slider.imgs[i].classList.add("showed");
  };
  this.btnPrev.onclick = this.prev;

  //by toggle
  this.next = function() {
    slider.imgs[i].classList.toggle("showed");
    i++;
    if (i >= slider.imgs.length) i = 0;
    slider.imgs[i].classList.toggle("showed");
  };
  this.btnNext.onclick = this.next;

  if (slider.auto) {
    setInterval(slider.next, slider.rate);
  }
}

// setInterval(function() {
//   slider2.next();
// }, 1500);
