//displays in firebug console.
//var links = document.getElementsByTagName("a");
//console.log("This page contains " + links.length + " links.");

//Learning abot events...
//document.onclick = function() {
//    alert("You clicked the document!");
//          }

//function to hide the nav bar elements when they aren't being looked at//

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





//function to animate the Main Header//

var mainHeader = document.querySelector('header h1');
var x = -50;
mainHeader.setAttribute("style", "letter-spacing: -50px");

function animateHeader() {
    "use strict";
    if (x < 15) {
   mainHeader.setAttribute("style", "letter-spacing: " + x + "px");
    x++;
}
}
setInterval(animateHeader, 30);



//function to rotate the image on the Yoga Interests Page
var yogaImage = document.getElementById("yogaImage");

var yogaImageArray = ["../_pics/yogapose.jpg", "../_pics/yogapose2.jpg", "../_pics/yogapose3.jpg", "../_pics/yogapose4.jpg", "../_pics/yogapose5.jpg", "../_pics/yogapose6.jpg"];

var yogaImageIndex = 0;

function changeYogaImage() {
    "use strict";
    yogaImage.setAttribute("src", yogaImageArray[yogaImageIndex]);
    
    yogaImageIndex += 1;
    
    if (yogaImageIndex >= yogaImageArray.length) {
        yogaImageIndex = 0;
    }
}

setInterval(changeYogaImage, 5000);
      
//funtion to make resume page "accordion"
//window.onload = function () {
//    $("#accordion").accordion();
//};

//Functions to make resume points exandable

var education = document.getElementById("education");
    
education.onclick = function () {
    var x = education.nextElementSibling;
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

var workExperience = document.getElementById("workExperience");
    
workExperience.onclick = function () {
    var x = workExperience.nextElementSibling;
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

var volunteerExperience = document.getElementById("volunteerExperience");
    
volunteerExperience.onclick = function () {
    var x = volunteerExperience.nextElementSibling;
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

var additionalInformation = document.getElementById("additionalInformation");
    
additionalInformation.onclick = function () {
    var x = additionalInformation.nextElementSibling;
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

window.onload = function () {
    education.nextElementSibling.style.display = "none";
    workExperience.nextElementSibling.style.display = "none";
    volunteerExperience.nextElementSibling.style.display = "none";
    additionalInformation.nextElementSibling.style.display = "none";
};



//function to pop up interest page photos with an overlay
