"use strict";

$("i.fa-solid.fa-bars").click(function (e) {
  $(".header-wrapper2").slideToggle("10");
  $(".banner").css("z-index", "4");
}); // typing animation

var typing = new Typed(".text", {
  strings: ['Digital Analyst', 'Web Developer', "Web Designer", "FreeLancer"],
  typeSpeed: 40,
  backSpeed: 100,
  loop: true
}); // scrollnavigation
//down scroller

$("div.scroll").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $("div.about-content").offset().top
  }, 100);
  $('div.about-content').show(100);
  e.preventDefault();
}); // home

$(".menu li:nth-child(1)").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $("div.main-content").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); // about

$(".menu li:nth-child(2)").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $("div.about-row").offset().top
  }, 100);
  $('div.about-content').show(100);
  e.preventDefault();
}); // skill

$(".menu li:nth-child(3)").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $(".skill-section").offset().top
  }, 100);
  $('.skill-section').show(100);
  e.preventDefault();
}); // work

$(".menu li:nth-child(4)").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $(".workexp").offset().top
  }, 100);
  $('.workexp').show(100);
  e.preventDefault();
}); // contact

$(".menu li:nth-child(5)").click(function (e) {
  //animate html body and use jQuery scrollTop
  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 100);
  $('footer').show(100);
  e.preventDefault();
}); // mobile view menu 
// home

$("#fadeout li:nth-child(1)").click(function (e) {
  $(".header-wrapper2").fadeOut(500); //animate html body and use jQuery scrollTop

  $('html, body').animate({
    scrollTop: $("div.main-content").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); //about us 

$("#fadeout li:nth-child(2)").click(function (e) {
  $(".header-wrapper2").fadeOut(500); //animate html body and use jQuery scrollTop

  $('html, body').animate({
    scrollTop: $("div.about-row").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); //skills

$("#fadeout li:nth-child(3)").click(function (e) {
  $(".header-wrapper2").fadeOut(500); //animate html body and use jQuery scrollTop

  $('html, body').animate({
    scrollTop: $("div.skill-section").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); //education and exp

$("#fadeout li:nth-child(4)").click(function (e) {
  $(".header-wrapper2").fadeOut(500); //animate html body and use jQuery scrollTop

  $('html, body').animate({
    scrollTop: $("div.workexp").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); // contact

$("#fadeout li:nth-child(5)").click(function (e) {
  $(".header-wrapper2").fadeOut(500); //animate html body and use jQuery scrollTop

  $('html, body').animate({
    scrollTop: $("footer").offset().top
  }, 100);
  $('div.main-content').show(100);
  e.preventDefault();
}); // swipe elements swipejs
// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   centerSlide:'true',
//   grabCursor:'true',
//   fade:'true',
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0:{
//       slidesPerView:1,
//     },
//     820:{
//       slidesPerView:2,
//     },
//     950:{
//     slidesPerView: 3,
//     },
//   }
// });

var swiper = new Swiper(".slide-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: 'true',
  loopFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    820: {
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
}); // scroll

window.onscroll = function () {
  console.log(document.documentElement.scrollTop); // about

  if (document.documentElement.scrollTop > 450) {
    var prof = document.querySelector('.imag-context');
    prof.classList.add('square');
    prof.classList.add('xyz-in');
    var cont = document.querySelector('.about-context');
    cont.classList.add('square');
    cont.classList.add('xyz-in');
  } else {
    var _prof = document.querySelector('.imag-context');

    _prof.classList.remove('square');

    _prof.classList.remove('xyz-in');

    var _cont = document.querySelector('.about-context');

    _cont.classList.remove('square');

    _cont.classList.remove('xyz-in');
  } // skills


  if (document.documentElement.scrollTop > 2000) {
    var skill = document.querySelectorAll('.skill-item');
    skill.forEach(function (skill) {
      skill.classList.add('square');
      skill.classList.add('xyz-in'); // skill.classList.add('rotatefade');
    });
  } else {
    var _skill = document.querySelectorAll('.skill-item');

    _skill.forEach(function (skill) {
      skill.classList.remove('square');
      skill.classList.remove('xyz-in'); // skill.classList.remove('rotatefade');
    });
  } // tools


  if (document.documentElement.scrollTop > 2700) {
    var tool = document.querySelector('.tool-section');
    var toolitem = document.querySelectorAll(".tool-item");
    tool.classList.add('example-grid');
    toolitem.forEach(function (toolitem) {
      toolitem.classList.add('square');
      toolitem.classList.add('xyz-in');
    });
  } else {
    var _tool = document.querySelector('.tool-section');

    var _toolitem = document.querySelectorAll(".tool-item");

    _tool.classList.remove('example-grid');

    _toolitem.forEach(function (toolitem) {
      toolitem.classList.remove('square');
      toolitem.classList.remove('xyz-in');
    });
  }

  var time1 = document.querySelectorAll('.timeline')[0];
  var time2 = document.querySelectorAll('.timeline')[1];
  var time3 = document.querySelectorAll('.timeline')[2]; //work 

  if (document.documentElement.scrollTop > 3500) {
    var workicon = document.querySelectorAll('.icon-suitcase');
    var workcontent = document.querySelector('.work');
    var border = document.querySelector('.border');
    border.classList.add('border-fade');
    time1.classList.add('fadeleft');
    workicon.forEach(function (workicon) {
      workicon.classList.add('square');
      workicon.classList.add('xyz-in');
      workcontent.classList.add('square');
      workcontent.classList.add('xyz-in');
    });
  } else {
    var _workicon = document.querySelectorAll('.icon-suitcase');

    var _workcontent = document.querySelector('.work');

    var _border = document.querySelector('.border');

    _border.classList.remove('border-fade');

    time1.classList.remove('fadeleft');

    _workicon.forEach(function (workicon) {
      workicon.classList.remove('square');
      workicon.classList.remove('xyz-in');

      _workcontent.classList.remove('square');

      _workcontent.classList.remove('xyz-in');
    });
  }

  if (document.documentElement.scrollTop > 3300) {
    time2.classList.add('faderight');
  } else {
    time2.classList.remove('faderight');
  }

  if (document.documentElement.scrollTop > 3550) {
    time3.classList.add('fadeleft');
  } else {
    time3.classList.remove('fadeleft');
  }
}; // skill circular progress


function circularporgress() {
  // if(document.documentElement.scrollHeight>1900){
  //progress animation 
  var prog = document.querySelector(".circular-progress");
  var progval = document.querySelector(".progress-value");
  var proginitval = 0;
  var progendval = 90;
  speed = 15;
  var progress = setInterval(function () {
    proginitval++;
    progval.textContent = "".concat(proginitval, "%");
    prog.style.background = "conic-gradient(#f6a40c ".concat(proginitval * 3.6, "deg,#ededed 0deg)");

    if (proginitval == progendval) {
      clearInterval(progress);
    }
  }, speed);
  var prog2 = document.querySelectorAll(".circular-progress")[1];
  var progval2 = document.querySelectorAll(".progress-value")[1];
  var proginitval2 = 0;
  var progendval2 = 83;
  var progress2 = setInterval(function () {
    proginitval2++;
    progval2.textContent = "".concat(proginitval2, "%");
    prog2.style.background = "conic-gradient(#f6a40c ".concat(proginitval2 * 3.6, "deg,#ededed 0deg)");

    if (proginitval2 == progendval2) {
      clearInterval(progress2);
    }
  }, speed);
  var prog3 = document.querySelectorAll(".circular-progress")[2];
  var progval3 = document.querySelectorAll(".progress-value")[2];
  var proginitval3 = 0;
  var progendval3 = 75;
  var progress3 = setInterval(function () {
    proginitval3++;
    progval3.textContent = "".concat(proginitval3, "%");
    prog3.style.background = "conic-gradient(#f6a40c ".concat(proginitval3 * 3.6, "deg,#ededed 0deg)");

    if (proginitval3 == progendval3) {
      clearInterval(progress3);
    }
  }, speed);
  var prog4 = document.querySelectorAll(".circular-progress")[3];
  var progval4 = document.querySelectorAll(".progress-value")[3];
  var proginitval4 = 0;
  var progendval4 = 85;
  var progress4 = setInterval(function () {
    proginitval4++;
    progval4.textContent = "".concat(proginitval4, "%");
    prog4.style.background = "conic-gradient(#f6a40c ".concat(proginitval4 * 3.6, "deg,#ededed 0deg)");

    if (proginitval4 == progendval4) {
      clearInterval(progress4);
    }
  }, speed);
  var prog5 = document.querySelectorAll(".circular-progress")[4];
  var progval5 = document.querySelectorAll(".progress-value")[4];
  var proginitval5 = 0;
  var progendval5 = 84;
  var progress5 = setInterval(function () {
    proginitval5++;
    progval5.textContent = "".concat(proginitval5, "%");
    prog5.style.background = "conic-gradient(#f6a40c ".concat(proginitval5 * 3.6, "deg,#ededed 0deg)");

    if (proginitval5 == progendval5) {
      clearInterval(progress5);
    }
  }, speed);
  var prog6 = document.querySelectorAll(".circular-progress")[5];
  var progval6 = document.querySelectorAll(".progress-value")[5];
  var proginitval6 = 0;
  var progendval6 = 82;
  var progress6 = setInterval(function () {
    proginitval6++;
    progval6.textContent = "".concat(proginitval6, "%");
    prog6.style.background = "conic-gradient(#f6a40c ".concat(proginitval6 * 3.6, "deg,#ededed 0deg)");

    if (proginitval6 == progendval6) {
      clearInterval(progress6);
    }
  }, speed);
  var prog7 = document.querySelectorAll(".circular-progress")[6];
  var progval7 = document.querySelectorAll(".progress-value")[6];
  var proginitval7 = 0;
  var progendval7 = 75;
  var progress7 = setInterval(function () {
    proginitval7++;
    progval7.textContent = "".concat(proginitval7, "%");
    prog7.style.background = "conic-gradient(#f6a40c ".concat(proginitval7 * 3.6, "deg,#ededed 0deg)");

    if (proginitval7 == progendval7) {
      clearInterval(progress7);
    }
  }, speed);
  var prog8 = document.querySelectorAll(".circular-progress")[7];
  var progval8 = document.querySelectorAll(".progress-value")[7];
  var proginitval8 = 0;
  var progendval8 = 65;
  var progress8 = setInterval(function () {
    proginitval8++;
    progval8.textContent = "".concat(proginitval8, "%");
    prog8.style.background = "conic-gradient(#f6a40c ".concat(proginitval8 * 3.6, "deg,#ededed 0deg)");

    if (proginitval8 == progendval8) {
      clearInterval(progress8);
    }
  }, speed);
}

circularporgress();