$(document).ready(function () {
   $('#slides').superslides({
      animation:'fade',
      play: 5000,
      pagination: true
   });

   var typed = new Typed(".typed", {
      strings: ["Web Developer",  "Blockchain Engineer", "JavaScript ES5/ES6 Developer."],
      typeSpeed: 70,
      loop: true,
      startDelay: 1000, 
      showCurson: false 
   });

   $('.owl-carousel').owlCarousel({
      loop:true,
      items:4,
       responsive:{
          0:{
              items:1
          },
          480 :{
              items:2
          },
          768:{
              items:3
          },
          938:{
            items:4
        }
      }
  }); 
  $('.chart').easyPieChart({
   //your options goes here
   easing: 'easyInOut',
   barColor: '#fff',
   trackColor: false,
   scaleColor: false,
   lineWidth: 4,
   size: 152,
   onStep: function(from, to, percent){
      $(this.el).find('.percent').text(Math.round(percent));
   }
});
});