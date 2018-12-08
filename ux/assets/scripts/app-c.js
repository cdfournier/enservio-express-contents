window.setTimeout(function(){
  $('.loading-screen').addClass('slideOutUp')
},4000);

$('#dismiss-greeting').click( function() {
  $('.greeting').addClass('flipOutY');
  setTimeout(function() {
    $('.greeting').addClass('hide') }, 1000);
  setTimeout(function() {
    $('.limits-meter').addClass('fadeInUp') }, 1000);
  setTimeout(function() {
    $('.loss-information').addClass('flipInY');
    $('.loss-information').removeClass('hide');
    $('.loss-information').addClass('show'); }, 1000);
});
