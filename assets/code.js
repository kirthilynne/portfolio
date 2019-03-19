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

typewriter.typeString('I am: ')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();


});

const words = ['Web Developer', 'Photographer', 'JavaScript Enthusiest', 'Logic Lover', 'Animal Fanatic']



