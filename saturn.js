$(document).ready(() => {    
 
    
    /* Structure button changes */
    
    $('.structure-button').on('click', () => {
         $('#saturn-img').attr("src", "./assets/planet-saturn-internal.svg");
         $('.overview-button').removeClass('active'); 
         $('.structure-button').addClass('active');
         $('.surface-button').removeClass('active'); 
         $('#saturn-overview-paragraph').css('display', 'none');
         $('#saturn-interior-paragraph').css('display', 'block');
         $('#saturn-geology-paragraph').css('display', 'none');
         $('#saturn-geology-img').css('display', 'none');
         $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Saturn#Internal_structure");
    });
    
    /* Overview button changes */
    
    $('.overview-button').on('click', () => {
        $('#saturn-img').attr("src", "./assets/planet-saturn.svg");
        $('.overview-button').addClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').removeClass('active');  
        $('#saturn-overview-paragraph').css('display', 'block');
        $('#saturn-interior-paragraph').css('display', 'none');
        $('#saturn-geology-paragraph').css('display', 'none');
        $('#saturn-geology-img').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Saturn");
    });
    
    /* Surface button changes */
    
    $('.surface-button').on('click', () => {
        $('#saturn-geology-img').css('display', 'block');
        $('#saturn-img').attr("src", "./assets/planet-saturn.svg");
        $('.overview-button').removeClass('active'); 
        $('.structure-button').removeClass('active');
        $('.surface-button').addClass('active');  
        $('#saturn-geology-paragraph').css('display', 'block');
        $('#saturn-overview-paragraph').css('display', 'none');
        $('#saturn-interior-paragraph').css('display', 'none');
        $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Saturn#Atmosphere");
    })
    
    /* Mobile menubar changes */
    
    $('#hamburger-icon').on('click', () => {
        $('.planet-variations-mobile').toggle(500);
        $('#saturn-geology-img').css('display', 'none');
    
    }) 
     
    
    
    
    
    }) 