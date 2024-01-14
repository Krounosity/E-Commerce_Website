var menu_flag = 0;
var pic_flag = 1;
var cat1 = 0;
var cat2 = 0;
var cat3 = 0;
var cat4 = 0;
$("#nav-button").on("click", function () {
  if (menu_flag == 0) {
    $("#menu").css("display", "block");
    $("#menu").css("width", "12rem");
    $("#menu").css("height", "18rem");
    menu_flag = 1;
  } else if (menu_flag == 1) {
    $("#menu").css("display", "none");
    menu_flag = 0;
  }
});
$("#prod-pic").on("mouseover", function () {
  $("#prev-button").css("opacity", "21%");
  $("#next-button").css("opacity", "21%");
});

$("#prod-pic").on("mouseout", function () {
  $("#prev-button").css("opacity", "0%");
  $("#next-button").css("opacity", "0%");
});
$("#prev-button").on("click", function () {
  if (pic_flag == 1) {
    $("#prod-pic").css(
      "background-image",
      "url('../images/pexels-foysal-ahmed-6053287.jpg')"
    );
    pic_flag = 3;
  } else if (pic_flag == 2) {
    $("#prod-pic").css("background-image", "../images/front_laptop.jpg");
    pic_flag = 1;
  } else if (pic_flag == 3) {
    $("#prod-pic").css(
      "background-image",
      "url('../images/pexels-karolina-grabowska-8003528.jpg')"
    );
    pic_flag = 2;
  }
});

$("#next-button").on("click", function () {
  if (pic_flag == 1) {
    $("#prod-pic").css(
      "background-image",
      "url('../images/pexels-karolina-grabowska-8003528.jpg')"
    );
    pic_flag = 2;
  } else if (pic_flag == 2) {
    $("#prod-pic").css(
      "background-image",
      "url('../images/pexels-foysal-ahmed-6053287.jpg')"
    );
    pic_flag = 3;
  } else if (pic_flag == 3) {
    $("#prod-pic").css("background-image", "url('../images/front_laptop.jpg')");
    pic_flag = 1;
  }
});
function pageScroll() {
  window.scrollBy(0, 50);
}
$("#to-cart").on("mouseover", function () {
  $("#to-cart").css("background-color", "#ffa647");
});
$("#to-cart").on("mouseout", function () {
  $("#to-cart").css("background-color", "#fcb467");
});
$("#category1").on("click", function () {
  if (cat1 == 0) {
    $("#subcat-elect").css("display", "block");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-home").css("display", "none");
    $("#subcat-games").css("display", "none");
    $("#subcat-elect").css("width", "10rem");
    cat1 = 1;
  } else if (cat1 == 1) {
    $("#subcat-home").css("display", "none");
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-games").css("display", "none");
    cat1 = 0;
  }
});
$("#category2").on("click", function () {
  if (cat2 == 0) {
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "block");
    $("#subcat-home").css("display", "none");
    $("#subcat-games").css("display", "none");
    $("#subcat-clothing").css("width", "10rem");
    cat2 = 1;
  } else if (cat2 == 1) {
    $("#subcat-home").css("display", "none");
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-games").css("display", "none");
    cat2 = 0;
  }
});
$("#category3").on("click", function () {
  if (cat3 == 0) {
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-home").css("display", "block");
    $("#subcat-games").css("display", "none");
    $("#subcat-home").css("width", "10rem");
    cat3 = 1;
  } else if (cat3 == 1) {
    $("#subcat-home").css("display", "none");
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-games").css("display", "none");
    cat3 = 0;
  }
});
$("#category4").on("click", function () {
  if (cat4 == 0) {
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-home").css("display", "none");
    $("#subcat-games").css("display", "block");
    $("#subcat-games").css("width", "10rem");
    cat4 = 1;
  } else if (cat4 == 1) {
    $("#subcat-games").css("display", "none");
    $("#subcat-elect").css("display", "none");
    $("#subcat-clothing").css("display", "none");
    $("#subcat-home").css("display", "none");
    cat4 = 0;
  }
});
$("#to-buy").on("mouseover", function () {
  $("#to-buy").css("background-color", "#ffa647");
});
$("#to-buy").on("mouseout", function () {
  $("#to-buy").css("background-color", "#fcb467");
});
$("#to-wishlist").on("mouseover", function () {
  $("#to-wishlist").css("background-color", "#ffa647");
});
$("#to-wishlist").on("mouseout", function () {
  $("#to-wishlist").css("background-color", "#fcb467");
});
