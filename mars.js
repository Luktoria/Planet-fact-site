$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#mars-img').attr("src", "./assets/planet-mars-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active');  
         $('#mars-overview-paragraph').css('display', 'none');
         $('#mars-interior-paragraph').css('display', 'block');
         $('#mars-geology-paragraph').css('display', 'none');
         $('#mars-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mars#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#mars-img').attr("src", "./assets/planet-mars.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active'); 
        $('#mars-overview-paragraph').css('display', 'block');
        $('#mars-interior-paragraph').css('display', 'none');
        $('#mars-geology-paragraph').css('display', 'none');
        $('#mars-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mars");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#mars-geology-img').css('display', 'block');
        $('#mars-img').attr("src", "./assets/planet-mars.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active');
        $('#mars-geology-paragraph').css('display', 'block');
        $('#mars-overview-paragraph').css('display', 'none');
        $('#mars-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mars#Surface_geology");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#mars-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 