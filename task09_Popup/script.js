function Popup(obj) {
  this.modal = document.querySelector(obj.modal);
  this.overlay = document.querySelector(obj.overlay);
  this.closeBtn = document.querySelector(obj.closeBtn) || {};
  this.innerPopup = document.querySelector(obj.innerHTML) || {};
  popup = this;

  this.open = function(cont) {
    console.log(cont);
    popup.overlay.classList.add("active");
    popup.modal.classList.add("active");
    popup.innerPopup.innerHTML = cont;
  };

  this.close = function() {
    popup.overlay.classList.remove("active");
    popup.modal.classList.remove("active");
  };

  this.overlay.onclick = function() {
    popup.close();
  };

  this.closeBtn.onclick = function() {
    popup.close();
  };
}

window.onload = function() {
  let p = new Popup({
    modal: ".popup",
    overlay: ".overlay",
    closeBtn: ".popup .popup_closeBtn",
    innerHTML: ".popup_innerHTML"
  });

  document.querySelector(".btn_about").onclick = function() {
    let inner = document.querySelector(".popup_about");
    p.open(inner.innerHTML);
  };

  document.querySelector(".btn_submit").onclick = function() {
    let inner = document.querySelector(".popup_submit");
    p.open(inner.innerHTML);
  };

  document.querySelector(".btn_callMe").onclick = function() {
    let inner = document.querySelector(".popup_callMe");
    p.open(inner.innerHTML);
  };

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      p.close();
    }
  };
};
