$('.btn').on('click', (event) => {
    // console.log(event.currentTarget.hash);
    if (event.currentTarget.hash !== '') {
        event.preventDefault();
        const hash = event.currentTarget.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});