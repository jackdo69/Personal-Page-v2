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
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
    console.log('showpage');
    
  document.getElementById("preload").style.display = "none";
  document.getElementById("wrapper").style.display = "block";
}
