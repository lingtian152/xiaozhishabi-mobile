var path = "../images";

var randomIndex = path + "/bg" + Math.floor(1 + Math.random() * 3) + ".png";
$("#body").css("background-image", `url(${randomIndex})`);
