window.onload = () => Barba.Pjax.start();


var FadeTransition = Barba.BaseTransition.extend({
  start: function () {

    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function () {

    this.oldContainer.classList.add('fade-out');

    this.oldContainer.addEventListener('animationend', () => {
      this.oldContainer.classList.remove('fade-out');
      this.done();
    });
  },

  fadeIn: function () {

    // let request = window.location.pathname;
    // // console.log(request);

    // switch(request) {
    //   case '/index.html':
    //   this.newContainer.classList.add('slide-in-right');
    //   this.newContainer.addEventListener('animationend', () => {
    //       this.newContainer.classList.remove('slide-in-right');
    //       this.done();
    //   });
    //     break;
    //   case '/about':
    //   this.newContainer.classList.add('slide-in-left');
    //   this.newContainer.addEventListener('animationend', () => {
    //       this.newContainer.classList.remove('slide-in-left');
    //       this.done();
    //   });
    //       break;
    //   case '/work':
    //   this.newContainer.classList.add('slide-in-top');
    //   this.newContainer.addEventListener('animationend', () => {
    //       this.newContainer.classList.remove('slide-in-top');
    //       this.done();
    //   });
    //     break;
    //   case '/contact':
    //   this.newContainer.classList.add('slide-in-bottom');
    //   this.newContainer.addEventListener('animationend', () => {
    //       this.newContainer.classList.remove('slide-in-bottom');
    //       this.done();
    //   });
    //     break;
    // }

    this.newContainer.classList.add('slide-in-bottom');

    this.newContainer.addEventListener('animationend', () => {
      this.newContainer.classList.remove('slide-in-bottom');
      this.done();
    });


  }
});


Barba.Pjax.getTransition = function () {

  return FadeTransition;
};