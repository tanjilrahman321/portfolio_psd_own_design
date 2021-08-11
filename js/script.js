$('.counter').counterUp({
    delay: 10,
    time: 2000
});


$(document).ready(function(){

    // Masonry Grid
    $('.grid').isotope({
        filter: '*',
        // itemSelector: '.grid-item',
        masonry: {
        columnWidth: 180,
        fitWidth: true, // When enabled, you can center the container with CSS.
        gutter: 10
        }
        // layoutMode: 'fitRows'
    });

    $('.filter a').click(function(){
        $('.filter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).data('filter');
        $('.grid').isotope({
        filter: selector
        });
        return false;
    });

    // Fancybox
    $('.fancybox').fancybox({
        helpers: {
        overlay: { locked: false }
        }
    });

});

$(document).ready(function(){
    var mixer = mixitup('.box-list')
});

   const slides=document.querySelector(".slider").children;
   const indicatorImages=document.querySelector(".slider-indicator").children;

    for(let i=0; i<indicatorImages.length; i++){
        indicatorImages[i].addEventListener("click",function(){
         
           for(let j=0; j<indicatorImages.length; j++){
             indicatorImages[j].classList.remove("active");
           }
            this.classList.add("active");
            const id=this.getAttribute("data-id");
           for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
           }

            slides[id].classList.add("active");

        })
    }