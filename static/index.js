var menu_flag = 0;
var pic_flag = 1;
var cat1 = 0;
var cat2 = 0;
var cat3 = 0;
var cat4 = 0;
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
document.querySelector("#prod-pic").addEventListener("mouseover", function () {
  document.querySelector("#prev-button").style.opacity = "21%";
  document.querySelector("#next-button").style.opacity = "21%";
});

document.querySelector("#prod-pic").addEventListener("mouseout", function () {
  document.querySelector("#prev-button").style.opacity = "0%";
  document.querySelector("#next-button").style.opacity = "0%";
});
document.querySelector("#prev-button").addEventListener("click", function () {
  if (pic_flag == 1) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/pexels-foysal-ahmed-6053287.jpg')";
    pic_flag = 3;
  } else if (pic_flag == 2) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/front_laptop.jpg')";
    pic_flag = 1;
  } else if (pic_flag == 3) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/pexels-karolina-grabowska-8003528.jpg')";
    pic_flag = 2;
  }
});

document.querySelector("#next-button").addEventListener("click", function () {
  if (pic_flag == 1) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/pexels-karolina-grabowska-8003528.jpg')";
    pic_flag = 2;
  } else if (pic_flag == 2) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/pexels-foysal-ahmed-6053287.jpg')";
    pic_flag = 3;
  } else if (pic_flag == 3) {
    document.querySelector("#prod-pic").style.backgroundImage =
      "url('../images/front_laptop.jpg')";
    pic_flag = 1;
  }
});
function pageScroll() {
  window.scrollBy(0, 50);
}
document.querySelector("#to-cart").addEventListener("mouseover", function () {
  document.querySelector("#to-cart").style.backgroundColor = "#ffa647";
});
document.querySelector("#to-cart").addEventListener("mouseout", function () {
  document.querySelector("#to-cart").style.backgroundColor = "#fcb467";
});
document.querySelector("#category1").addEventListener("click", function () {
  if (cat1 == 0) {
    document.querySelector("#subcat-elect").style.display = "block";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-games").style.display = "none";
    document.querySelector("#subcat-elect").style.width = "10rem";
    cat1 = 1;
  } else if (cat1 == 1) {
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-games").style.display = "none";
    cat1 = 0;
  }
});
document.querySelector("#category2").addEventListener("click", function () {
  if (cat2 == 0) {
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "block";
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-games").style.display = "none";
    document.querySelector("#subcat-clothing").style.width = "10rem";
    cat2 = 1;
  } else if (cat2 == 1) {
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-games").style.display = "none";
    cat2 = 0;
  }
});
document.querySelector("#category3").addEventListener("click", function () {
  if (cat3 == 0) {
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-home").style.display = "block";
    document.querySelector("#subcat-games").style.display = "none";
    document.querySelector("#subcat-home").style.width = "10rem";
    cat3 = 1;
  } else if (cat3 == 1) {
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-games").style.display = "none";
    cat3 = 0;
  }
});
document.querySelector("#category4").addEventListener("click", function () {
  if (cat4 == 0) {
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-home").style.display = "none";
    document.querySelector("#subcat-games").style.display = "block";
    document.querySelector("#subcat-games").style.width = "10rem";
    cat4 = 1;
  } else if (cat4 == 1) {
    document.querySelector("#subcat-games").style.display = "none";
    document.querySelector("#subcat-elect").style.display = "none";
    document.querySelector("#subcat-clothing").style.display = "none";
    document.querySelector("#subcat-home").style.display = "none";
    cat4 = 0;
  }
});
document.querySelector("#to-buy").addEventListener("mouseover", function () {
  document.querySelector("#to-buy").style.backgroundColor = "#ffa647";
});
document.querySelector("#to-buy").addEventListener("mouseout", function () {
  document.querySelector("#to-buy").style.backgroundColor = "#fcb467";
});
document
  .querySelector("#to-wishlist")
  .addEventListener("mouseover", function () {
    document.querySelector("#to-wishlist").style.backgroundColor = "#ffa647";
  });
document
  .querySelector("#to-wishlist")
  .addEventListener("mouseout", function () {
    document.querySelector("#to-wishlist").style.backgroundColor = "#fcb467";
  });
