document.addEventListener("DOMContentLoaded", function (event) {

  // var counter = 0;
  // const subtitle = $('.subtitle');
  // setInterval(() => {
  //   if (counter > words.length - 1) {
  //     counter = 0;
  //   }
  //   const text = words[counter];
  //   subtitle.text(text);
  //   counter++;
  // }, 1000);

  var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('I am: ')
    .pauseFor(2500)
    .typeString('<strong class="aboutMe">determined!</strong>')
    .pauseFor(2500)
    .deleteChars(11)
    .typeString('<strong>passionate</strong>')
    .pauseFor(1500)
    .start();


});

const words = ['Web Developer', 'Photographer', 'JavaScript Enthusiest', 'Logic Lover', 'Animal Fanatic']



