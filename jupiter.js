$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#jupiter-img').attr("src", "./assets/planet-jupiter-internal.svg");
         $('.overview-button').removeClass('active'); 
     $('.structure-button').addClass('active');
     $('.surface-button').removeClass('active'); 
         $('#jupiter-overview-paragraph').css('display', 'none');
         $('#jupiter-interior-paragraph').css('display', 'block');
         $('#jupiter-geology-paragraph').css('display', 'none');
         $('#jupiter-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Jupiter#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#jupiter-img').attr("src", "./assets/planet-jupiter.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active'); 
        $('#jupiter-overview-paragraph').css('display', 'block');
        $('#jupiter-interior-paragraph').css('display', 'none');
        $('#jupiter-geology-paragraph').css('display', 'none');
        $('#jupiter-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Jupiter");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#jupiter-geology-img').css('display', 'block');
        $('#jupiter-img').attr("src", "./assets/planet-jupiter.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active');
        $('#jupiter-geology-paragraph').css('display', 'block');
        $('#jupiter-overview-paragraph').css('display', 'none');
        $('#jupiter-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#jupiter-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 