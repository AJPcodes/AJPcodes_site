var navMain = document.getElementById("navMain");
var navbar = document.getElementById("navbar");

var hideNav = function ()  {
navbar.style.display = "none";
};

var displayNav = function ()  {
navbar.style.display = "inline-block";
};

window.onload = hideNav();
navMain.onmouseover = displayNav;
navMain.onmouseout = hideNav;


