var menu_flag = 0;
document.querySelector("#nav-button").addEventListener("click", function () {
  if (menu_flag == 0) {
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#menu").style.width = "12rem";
    document.querySelector("#menu").style.height = "18rem";
    menu_flag = 1;
  } else if (menu_flag == 1) {
    document.querySelector("#menu").style.display = "none";
    menu_flag = 0;
  }
});
