

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

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByTagName("nav").style.top = "0";
//   } else {
//     document.getElementsByTagName("nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
    console.log('showpage');
    
  document.getElementById("preload").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}