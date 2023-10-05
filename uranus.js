$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#uranus-img').attr("src", "./assets/planet-uranus-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active');  
         $('#uranus-overview-paragraph').css('display', 'none');
         $('#uranus-interior-paragraph').css('display', 'block');
         $('#uranus-geology-paragraph').css('display', 'none');
         $('#uranus-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Uranus#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#uranus-img').attr("src", "./assets/planet-uranus.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active'); 
        $('#uranus-overview-paragraph').css('display', 'block');
        $('#uranus-interior-paragraph').css('display', 'none');
        $('#uranus-geology-paragraph').css('display', 'none');
        $('#uranus-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Uranus");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#uranus-geology-img').css('display', 'block');
        $('#uranus-img').attr("src", "./assets/planet-uranus.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active'); 
        $('#uranus-geology-paragraph').css('display', 'block');
        $('#uranus-overview-paragraph').css('display', 'none');
        $('#uranus-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Uranus#Atmosphere");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#uranus-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 