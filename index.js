const close = document.querySelector(".menu");
const menu = NavOpen.querySelector(".hamburger");
const menu = navClose.querySelector(".close");
const menu = navBar.querySelector(".nav");
const navLeft = menu.getBoundingClient;

navClose.addEventListeneer("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
      document.body.classList.remove("show");
      
  }
});
