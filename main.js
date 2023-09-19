$(document).ready(() => {    

$('#structure-button').on('click', () => {
     $('#earth-img').attr("src", "./assets/planet-earth-internal.svg");
     $('#overview-button').css('background-color', '#070724');
     $('#structure-button').css('background-color', '#6f2ed6');
     $('#surface-button').css('background-color', '#070724');
     $('#earth-overview-paragraph').css('display', 'none');
     $('#earth-interior-paragraph').css('display', 'block');
     $('#earth-geology-paragraph').css('display', 'none');
     $('#earth-geology-img').css('display', 'none');
     $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth#Internal_structure");
})/*.on('mouseenter', () => {
    $("#structure-button").css('background-color', '#38384F');
}).on('mouseleave', () => {
    $("#structure-button").css('background-color', 'transparent');
})*/;


$('#overview-button').on('click', () => {
    $('#earth-img').attr("src", "./assets/planet-earth.svg");
    $('#structure-button').css('background-color', '#070724');
    $('#overview-button').css('background-color', '#6f2ed6');
    $('#surface-button').css('background-color', '#070724');
    $('#earth-overview-paragraph').css('display', 'block');
    $('#earth-interior-paragraph').css('display', 'none');
    $('#earth-geology-paragraph').css('display', 'none');
    $('#earth-geology-img').css('display', 'none');
    $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth");
})/*.on('mouseenter', () => {
    $("#overview-button").css('background-color', '#38384F');
}).on('mouseleave', () => {
    $("#overview-button").css('background-color', 'inherit');
})*/;

$('#surface-button').on('click', () => {
    $('#earth-geology-img').css('display', 'block');
    $('#surface-button').css('background-color', '#6f2ed6');
    $('#structure-button').css('background-color', '#070724');
    $('#overview-button').css('background-color', '#070724');
    $('#earth-geology-paragraph').css('display', 'block');
    $('#earth-overview-paragraph').css('display', 'none');
    $('#earth-interior-paragraph').css('display', 'none');
    $('#anchor-ref').attr("href", "https://en.wikipedia.org/wiki/Earth#Surface");
})









}) 