$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#venus-img').attr("src", "./assets/planet-venus-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active');  
         $('#venus-overview-paragraph').css('display', 'none');
         $('#venus-interior-paragraph').css('display', 'block');
         $('#venus-geology-paragraph').css('display', 'none');
         $('#venus-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Venus#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#venus-img').attr("src", "./assets/planet-venus.svg");
        $('.overview-button').addClass('active'); 
     $('.structure-button').removeClass('active');
     $('.surface-button').removeClass('active');  
        $('#venus-overview-paragraph').css('display', 'block');
        $('#venus-interior-paragraph').css('display', 'none');
        $('#venus-geology-paragraph').css('display', 'none');
        $('#venus-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Venus");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#venus-geology-img').css('display', 'block');
        $('#venus-img').attr("src", "./assets/planet-venus.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active');  
        $('#venus-geology-paragraph').css('display', 'block');
        $('#venus-overview-paragraph').css('display', 'none');
        $('#venus-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Venus#Surface_geology");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#venus-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 