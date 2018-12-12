// LOADING SCREEN TIMEOUT
window.setTimeout(function(){
  $('.loading-screen').addClass('slideOutUp')
},4000);


// LOG IN AND REGISTRATION FORMS
$('#create-account').click(function() {
  $('.log-in').addClass('hide');
  setTimeout(function() {
    $('.register.one').addClass('show'); }, 10);
});

$('#new-account-next').click(function() {
  $('.register.one').removeClass('show');
  setTimeout(function() {
    $('.register.two').addClass('show'); }, 10);
});

$('#new-account-back').click(function() {
  $('.register.two').removeClass('show');
  setTimeout(function() {
    $('.register.one').addClass('show'); }, 10);
});

$('#cancel-one').click(function() {
  $('.register.one').removeClass('show');
  setTimeout(function() {
    $('.log-in').removeClass('hide'); }, 10);
});

$('#cancel-two').click(function() {
  $('.register.two').removeClass('show');
  setTimeout(function() {
    $('.log-in').removeClass('hide'); }, 10);
});


// SHOW/HIDE PASSWORDS
$(".show-hide-password").click(function() {
  $(this).toggleClass("la-eye-slash la-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// TIMEOUT
$('.show-timeout').click( function() {
  $('.timeout').addClass('show');
});
$('.continue').click( function() {
  $('.timeout').removeClass('show');
});
