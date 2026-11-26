
document.addEventListener("DOMContentLoaded", function () {

  const menu = document.getElementById("menu");
  const tombolMenu = document.querySelector(".menu-btn");

  // Membuka dan menutup menu
  if (tombolMenu && menu) {
    tombolMenu.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // Menutup menu setelah link diklik
  const links = document.querySelectorAll("#menu a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menu) {
        menu.classList.remove("active");
      }
    });
  });

});
