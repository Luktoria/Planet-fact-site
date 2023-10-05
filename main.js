$(document).ready(() => {    
 
    
/* Structure button changes */

$('.structure-button').on('click', () => {
     $('#earth-img').attr("src", "./assets/planet-earth-internal.svg");
     $('.overview-button').removeClass('active'); 
     $('.structure-button').addClass('active');
     $('.surface-button').removeClass('active');  
     $('#earth-overview-paragraph').css('display', 'none');
     $('#earth-interior-paragraph').css('display', 'block');
     $('#earth-geology-paragraph').css('display', 'none');
     $('#earth-geology-img').css('display', 'none');
     $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth#Internal_structure");
});

/* Overview button changes */

$('.overview-button').on('click', () => {
    $('#earth-img').attr("src", "./assets/planet-earth.svg");
    $('.overview-button').addClass('active'); 
     $('.structure-button').removeClass('active');
     $('.surface-button').removeClass('active'); 
    $('#earth-overview-paragraph').css('display', 'block');
    $('#earth-interior-paragraph').css('display', 'none');
    $('#earth-geology-paragraph').css('display', 'none');
    $('#earth-geology-img').css('display', 'none');
    $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth");
});

/* Surface button changes */

$('.surface-button').on('click', () => {
    $('#earth-geology-img').css('display', 'block');
    $('#earth-img').attr("src", "./assets/planet-earth.svg");
    $('.overview-button').removeClass('active'); 
    $('.structure-button').removeClass('active');
    $('.surface-button').addClass('active'); 
    $('#earth-geology-paragraph').css('display', 'block');
    $('#earth-overview-paragraph').css('display', 'none');
    $('#earth-interior-paragraph').css('display', 'none');
    $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth#Surface");
})

/* Mobile menubar changes */

$('#hamburger-icon').on('click', () => {
    $('.planet-variations-mobile').toggle(500);
    $('#earth-geology-img').css('display', 'none');
}) 



}) 