// LOADING SCREEN TIMEOUT
window.setTimeout(function(){
  $('.loading-screen').addClass('slideOutUp')
},4000);


// LOG IN AND REGISTRATION FORMS
$('#create-account').click(function() {
  $('.log-in').addClass('hide');
  setTimeout(function() {
    $('.register').addClass('show'); }, 10);
});

$('#cancel').click(function() {
  $('.register').removeClass('show');
  setTimeout(function() {
    $('.log-in').removeClass('hide'); }, 10);
});
