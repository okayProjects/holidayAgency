var slides = [
    {src: './images/m1.jpeg'},
    {src: './images/m2.jpeg'},
    {src: './images/m3.jpeg'},
    {src: './images/m4.jpeg'}
    
];

$('.carousel-demo').jR3DCarousel({
  height: 300, 
  width: 450,
  slides: slides,
  animationCurve: 'ease-in-out',
  animationInterval: 3000,
  navigation: 'squares',
  animation: "slide3D"
});



/*
You can also add images to the carousel using plain html like this:

1
<div class="carousel-demo">
2
  <div class="slide"><img src="1.jpg" /></div>
3
  <div class="slide"><img src="2.jpg" /></div>
4
  <div class="slide"><img src="3.jpg" /></div>
5
  <div class="slide"><img src="4.jpg" /></div>
6
  <div class="slide"><img src="5.jpg" /></div>
7
</div>
5. All default options to customize the carousel.

01
$('.carousel-demo').jR3DCarousel({
02
 
03
  // width of the carousel
04
  width : 1349,
05
 
06
  // height of the carousel
07
  height: 668,
08
 
09
  // an array of images
10
  slides : [],
11
 
12
  // contain | fill | cover
13
  slideLayout : 'contain',
14
 
15
  // perspective | default dynamic perpendicular
16
  perspective: 0,      
17
 
18
  // slide | slide3D | scroll | scroll3D | fade
19
  animation: 'slide',
20
 
21
  // ease | ease-in | ease-out | ease-in-out | linear | bezier
22
  animationCurve: 'ease',
23
 
24
  // animation duration
25
  animationDuration: 700,
26
 
27
  // animation interval
28
  animationInterval: 2000,
29
 
30
  // enable autoplay
31
  autoplay: true,
32
 
33
  // display controls
34
  controls: true,
35
 
36
  slideClass: 'jR3DCarouselSlide',
37
 
38
  // circles | squares
39
  navigation: 'circles',  
40
 
41
  // callback
42
  onSlideShow: function(){}
43
   
44
});
6. Public methods.

view source
01
var myCarousel = $('.carousel-demo').jR3DCarousel({
02
    // options here
03
});
04
 
05
// show specfied slide
06
myCarousel.showSlide(0);
07
 
08
// show previous slide
09
myCarousel.showPreviousSlide();
10
 
11
// show next slide
12
myCarousel.showNextSlide();
13
 
14
// return the slide's jquery object
15
var slide = myCarousel.getSlideByIndex(1);
16
 
17
// return the current slide's jQuery object
18
var currentSlide = myCarousel.getCurrentSlide();

*/