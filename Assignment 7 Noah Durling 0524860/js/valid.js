
    $("#form").validate({
        rules: {
            cardNumber: {
                required: true,
                minlength: 10,
                maxlength:10
            },
            cvv: {
                required: true,
                minlength: 3,
                maxlength: 3
            },
        },
        messages: {
            cardNumber: {
                required: "Please enter your cardNumber",
                minlength: "card Number must be least 10 numbers long",
                maxlength: "card Number must be least 10 numbers long"
            },
            cvv: {
                required: "Please enter a cvv",
                minlength: "cvv must be 3 numbers long",
                maxlength: "cvv must be 3 numbers long"
            }
        }
    });
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