let swipers = new Swiper('.swiper-container', {
    preventClicks: false,
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});