/*!
 * Start Bootstrap - Clean Blog v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)
 */
!function(i){"use strict";i("body").on("input propertychange",".floating-label-form-group",function(o){i(this).toggleClass("floating-label-form-group-with-value",!!i(o.target).val())}).on("focus",".floating-label-form-group",function(){i(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){i(this).removeClass("floating-label-form-group-with-focus")});if(i(window).width()>992){var o=i("#mainNav").height();i(window).on("scroll",{previousTop:0},function(){var s=i(window).scrollTop();s<this.previousTop?s>0&&i("#mainNav").hasClass("is-fixed")?i("#mainNav").addClass("is-visible"):i("#mainNav").removeClass("is-visible is-fixed"):s>this.previousTop&&(i("#mainNav").removeClass("is-visible"),s>o&&!i("#mainNav").hasClass("is-fixed")&&i("#mainNav").addClass("is-fixed")),this.previousTop=s})}}(jQuery);
// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
