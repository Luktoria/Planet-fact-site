$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#mercury-img').attr("src", "./assets/planet-mercury-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active');  
         $('#mercury-overview-paragraph').css('display', 'none');
         $('#mercury-interior-paragraph').css('display', 'block');
         $('#mercury-geology-paragraph').css('display', 'none');
         $('#mercury-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#mercury-img').attr("src", "./assets/planet-mercury.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active');  
        $('#mercury-overview-paragraph').css('display', 'block');
        $('#mercury-interior-paragraph').css('display', 'none');
        $('#mercury-geology-paragraph').css('display', 'none');
        $('#mercury-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mercury_(planet)");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#mercury-geology-img').css('display', 'block');
        $('#mercury-img').attr("src", "./assets/planet-mercury.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active');  
        $('#mercury-geology-paragraph').css('display', 'block');
        $('#mercury-overview-paragraph').css('display', 'none');
        $('#mercury-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#mercury-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 