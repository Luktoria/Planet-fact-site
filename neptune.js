$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#neptune-img').attr("src", "./assets/planet-neptune-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active');
         $('#neptune-overview-paragraph').css('display', 'none');
         $('#neptune-interior-paragraph').css('display', 'block');
         $('#neptune-geology-paragraph').css('display', 'none');
         $('#neptune-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Neptune#Internal_structure ");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#neptune-img').attr("src", "./assets/planet-neptune.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active'); 
        $('#neptune-overview-paragraph').css('display', 'block');
        $('#neptune-interior-paragraph').css('display', 'none');
        $('#neptune-geology-paragraph').css('display', 'none');
        $('#neptune-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Neptune");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#neptune-geology-img').css('display', 'block');
        $('#neptune-img').attr("src", "./assets/planet-neptune.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active'); 
        $('#neptune-geology-paragraph').css('display', 'block');
        $('#neptune-overview-paragraph').css('display', 'none');
        $('#neptune-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Neptune#Atmosphere");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#neptune-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 