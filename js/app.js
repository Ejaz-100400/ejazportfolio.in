

$("i.fa-solid.fa-bars").click(function(e) {
    $(".header-wrapper2").slideToggle("10");
    $(".banner").css("z-index","4");
 })
 // typing animation
 var typing=new Typed(".text", {
    strings: ['Digital Analyst','Web Developer',"Web Designer","FreeLancer"],
    typeSpeed: 40,
    backSpeed: 100,
    loop: true,
  });

// scrollnavigation
//down scroller
  $("div.scroll").click(function(e) {
    //animate html body and use jQuery scrollTop
        $('html, body').animate({
            scrollTop: $("div.about-content").offset().top,
        }, 100);
        $('div.about-content').show(100)
        e.preventDefault();
    });
// home
$(".menu li:nth-child(1)").click(function(e) {
  //animate html body and use jQuery scrollTop
      $('html, body').animate({
          scrollTop: $("div.main-content").offset().top,
      }, 100);
      $('div.main-content').show(100)
      e.preventDefault();
  });
  // about
  $(".menu li:nth-child(2)").click(function(e) {
    //animate html body and use jQuery scrollTop
        $('html, body').animate({
            scrollTop: $("div.about-row").offset().top,
        }, 100);
        $('div.about-content').show(100)
        e.preventDefault();
    });
    // skill
    $(".menu li:nth-child(3)").click(function(e) {
      //animate html body and use jQuery scrollTop
          $('html, body').animate({
              scrollTop: $(".skill-section").offset().top,
          }, 100);
          $('.skill-section').show(100)
          e.preventDefault();
      });
      // work
      $(".menu li:nth-child(4)").click(function(e) {
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $(".workexp").offset().top,
            }, 100);
            $('.workexp').show(100)
            e.preventDefault();
        });
        // contact
        $(".menu li:nth-child(5)").click(function(e) {
          //animate html body and use jQuery scrollTop
              $('html, body').animate({
                  scrollTop: $("footer").offset().top,
              }, 100);
              $('footer').show(100)
              e.preventDefault();
          });
    // mobile view menu 
  // home
$("#fadeout li:nth-child(1)").click(function(e) {
  $(".header-wrapper2").fadeOut(500);
  //animate html body and use jQuery scrollTop
      $('html, body').animate({
          scrollTop: $("div.main-content").offset().top,
      }, 100);
      $('div.main-content').show(100)
      e.preventDefault();
  });
  //about us 
  $("#fadeout li:nth-child(2)").click(function(e) {
    $(".header-wrapper2").fadeOut(500);
    //animate html body and use jQuery scrollTop
        $('html, body').animate({
            scrollTop: $("div.about-row").offset().top,
        }, 100);
        $('div.main-content').show(100)
        e.preventDefault();
    });
  //skills
    $("#fadeout li:nth-child(3)").click(function(e) {
      $(".header-wrapper2").fadeOut(500);
      //animate html body and use jQuery scrollTop
          $('html, body').animate({
              scrollTop: $("div.skill-section").offset().top,
          }, 100);
          $('div.main-content').show(100)
          e.preventDefault();
      });
    //education and exp
      $("#fadeout li:nth-child(4)").click(function(e) {
        $(".header-wrapper2").fadeOut(500);
        //animate html body and use jQuery scrollTop
            $('html, body').animate({
                scrollTop: $("div.workexp").offset().top,
            }, 100);
            $('div.main-content').show(100)
            e.preventDefault();
        });
    // contact
    $("#fadeout li:nth-child(5)").click(function(e) {
      $(".header-wrapper2").fadeOut(500);
      //animate html body and use jQuery scrollTop
          $('html, body').animate({
              scrollTop: $("footer").offset().top,
          }, 100);
          $('div.main-content').show(100)
          e.preventDefault();
      });
    


var swiper = new Swiper(".slide-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop:'true',
  loopFillGroupWithBlank: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
        0:{
          slidesPerView:1,
        },
        820:{
          slidesPerView:2,
        },
        950:{
        slidesPerView: 3,
        },
      }
});



// scroll
window.onscroll = function(){

  console.log(document.documentElement.scrollTop)
  // about
   if(document.documentElement.scrollTop>450){
    let prof=document.querySelector('.imag-context');
    prof.classList.add('square');
    prof.classList.add('xyz-in');
    let cont=document.querySelector('.about-context');
    cont.classList.add('square');
    cont.classList.add('xyz-in');
   }
   else{
    let prof=document.querySelector('.imag-context');
    prof.classList.remove('square');
    prof.classList.remove('xyz-in');
    let cont=document.querySelector('.about-context');
    cont.classList.remove('square');
    cont.classList.remove('xyz-in');
    }
    // skills
    if(document.documentElement.scrollTop>2000){
      let skill=document.querySelectorAll('.skill-item');
      skill.forEach(function(skill){
        skill.classList.add('square');
        skill.classList.add('xyz-in');
        // skill.classList.add('rotatefade');
      });
    }
    else{
      let skill=document.querySelectorAll('.skill-item');
      skill.forEach(function(skill){
        skill.classList.remove('square');
        skill.classList.remove('xyz-in');
        // skill.classList.remove('rotatefade');

      });
    }
    // tools
    if(document.documentElement.scrollTop>2700){
      let tool=document.querySelector('.tool-section');
      let toolitem=document.querySelectorAll(".tool-item")
       tool.classList.add('example-grid');
       toolitem.forEach(function(toolitem){
       toolitem.classList.add('square'); 
       toolitem.classList.add('xyz-in');
      })
    }
    else{
      let tool=document.querySelector('.tool-section');
      let toolitem=document.querySelectorAll(".tool-item")
       tool.classList.remove('example-grid');
       toolitem.forEach(function(toolitem){
       toolitem.classList.remove('square'); 
       toolitem.classList.remove('xyz-in');
       })
    }

    let time1=document.querySelectorAll('.timeline')[0];
    let time2=document.querySelectorAll('.timeline')[1];
    let time3=document.querySelectorAll('.timeline')[2];
    //work 
    if(document.documentElement.scrollTop>3500){
      let workicon=document.querySelectorAll('.icon-suitcase');
      let workcontent=document.querySelector('.work');
      let border=document.querySelector('.border');

      border.classList.add('border-fade');
      time1.classList.add('fadeleft');
      workicon.forEach(function(workicon){
      workicon.classList.add('square'); 
      workicon.classList.add('xyz-in');
      workcontent.classList.add('square');
      workcontent.classList.add('xyz-in');
      })
    }
    else{
      let workicon=document.querySelectorAll('.icon-suitcase');
      let workcontent=document.querySelector('.work');
      let border=document.querySelector('.border');
      border.classList.remove('border-fade');
      time1.classList.remove('fadeleft');
       workicon.forEach(function(workicon){
       workicon.classList.remove('square'); 
       workicon.classList.remove('xyz-in');
       workcontent.classList.remove('square');
       workcontent.classList.remove('xyz-in');
       })
    }
    if(document.documentElement.scrollTop>3300){
      time2.classList.add('faderight');
    }
    else{
      time2.classList.remove('faderight');
    }
    if(document.documentElement.scrollTop>3550){
      time3.classList.add('fadeleft');
    }
    else{
      time3.classList.remove('fadeleft');
    }
};



// skill circular progress
function circularporgress(){

// if(document.documentElement.scrollHeight>1900){
//progress animation 
let prog=document.querySelector(".circular-progress")
let progval= document.querySelector(".progress-value")
let proginitval=0;
let progendval=90;
speed=15;

let progress=setInterval(function(){
  proginitval++;
  progval.textContent=`${proginitval}%`;
  prog.style.background=`conic-gradient(#f6a40c ${proginitval* 3.6}deg,#ededed 0deg)`
  if(proginitval==progendval){
    clearInterval(progress);
  }

},speed);


let prog2=document.querySelectorAll(".circular-progress")[1];
let progval2= document.querySelectorAll(".progress-value")[1];
let proginitval2=0;
let progendval2=83;

let progress2=setInterval(function(){
  proginitval2++;
  progval2.textContent=`${proginitval2}%`;
  prog2.style.background=`conic-gradient(#f6a40c ${proginitval2* 3.6}deg,#ededed 0deg)`
  if(proginitval2==progendval2){
    clearInterval(progress2);
  }
},speed);

let prog3=document.querySelectorAll(".circular-progress")[2];
let progval3= document.querySelectorAll(".progress-value")[2];
let proginitval3=0;
let progendval3=75;

let progress3=setInterval(function(){
  proginitval3++;
  progval3.textContent=`${proginitval3}%`;
  prog3.style.background=`conic-gradient(#f6a40c ${proginitval3* 3.6}deg,#ededed 0deg)`
  if(proginitval3==progendval3){
    clearInterval(progress3);
  }
},speed);


let prog4=document.querySelectorAll(".circular-progress")[3];
let progval4= document.querySelectorAll(".progress-value")[3];
let proginitval4=0;
let progendval4=85;

let progress4=setInterval(function(){
  proginitval4++;
  progval4.textContent=`${proginitval4}%`;
  prog4.style.background=`conic-gradient(#f6a40c ${proginitval4* 3.6}deg,#ededed 0deg)`
  if(proginitval4==progendval4){
    clearInterval(progress4);
  }
},speed);


let prog5=document.querySelectorAll(".circular-progress")[4];
let progval5= document.querySelectorAll(".progress-value")[4];
let proginitval5=0;
let progendval5=84;

let progress5=setInterval(function(){
  proginitval5++;
  progval5.textContent=`${proginitval5}%`;
  prog5.style.background=`conic-gradient(#f6a40c ${proginitval5* 3.6}deg,#ededed 0deg)`
  if(proginitval5==progendval5){
    clearInterval(progress5);
  }
},speed);

let prog6=document.querySelectorAll(".circular-progress")[5];
let progval6= document.querySelectorAll(".progress-value")[5];
let proginitval6=0;
let progendval6=82;

let progress6=setInterval(function(){
  proginitval6++;
  progval6.textContent=`${proginitval6}%`;
  prog6.style.background=`conic-gradient(#f6a40c ${proginitval6* 3.6}deg,#ededed 0deg)`
  if(proginitval6==progendval6){
    clearInterval(progress6);
  }
},speed);

let prog7=document.querySelectorAll(".circular-progress")[6];
let progval7= document.querySelectorAll(".progress-value")[6];
let proginitval7=0;
let progendval7=75;

let progress7=setInterval(function(){
  proginitval7++;
  progval7.textContent=`${proginitval7}%`;
  prog7.style.background=`conic-gradient(#f6a40c ${proginitval7* 3.6}deg,#ededed 0deg)`
  if(proginitval7==progendval7){
    clearInterval(progress7);
  }
},speed);


let prog8=document.querySelectorAll(".circular-progress")[7];
let progval8= document.querySelectorAll(".progress-value")[7];
let proginitval8=0;
let progendval8=65;

let progress8=setInterval(function(){
  proginitval8++;
  progval8.textContent=`${proginitval8}%`;
  prog8.style.background=`conic-gradient(#f6a40c ${proginitval8* 3.6}deg,#ededed 0deg)`
  if(proginitval8==progendval8){
    clearInterval(progress8);
  }
},speed);
}
circularporgress();
