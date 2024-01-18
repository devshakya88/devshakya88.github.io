document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  const menuItems = menu.getElementsByTagName("a");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  }

  // Add an event listener to fix the navbar when a link is clicked
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      navbar.classList.add("fixed");
    });
  }
});

