//Hide & Show menu when scrolling
var prevPos = $(this).scrollTop();
        $(window).on('scroll', function () {
            var currentPos = $(this).scrollTop();
            if (prevPos > currentPos) {
                $('nav').fadeIn();
            } else {
                $('nav').fadeOut();
            }
            prevPos = currentPos;
        });


//Show and hide the preload
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preload").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}

//Show dropdown
// function dropdown() {
//   var x = document.getElementById("topnav");
//   if (x.className === "nav-list") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-list";
//   }
// }


//Preload stroke calculation
// const preload = document.querySelectorAll("#preload path");
// for (let i = 0; i < preload.length; i++) {
//   console.log(`letter ${i} is ${preload[i].getTotalLength()}`);
  
// }

//Toggle dropdown menu in mobile device

document.onclick = function(e) {
  var x = document.getElementById("topnav");
  if (e.target.className === 'fas fa-bars fa-2x' && x.className === 'nav-list') {
    x.className += " responsive w3-animate-right"
  } else if (e.target.className === 'fas fa-bars fa-2x' && x.className === 'nav-list responsive'){
    x.className = 'nav-list'
  } else {
    x.className = 'nav-list'
  }
}