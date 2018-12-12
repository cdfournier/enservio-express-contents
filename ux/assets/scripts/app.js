// LOADING SCREEN TIMEOUT
window.setTimeout(function(){
  $('.loading-screen').addClass('slideOutUp')
},4000);


// LOG IN AND REGISTRATION FORMS
$('#create-account').click(function() {
  $('.authentication').addClass('p2');
});

$('#cancel-one').click(function() {
  $('.authentication').removeClass('p2').addClass('p1');
});

$('#new-account-next').click(function() {
  $('.authentication').removeClass('p2').addClass('p3');
});

$('#new-account-back').click(function() {
  $('.authentication').removeClass('p3').addClass('p2');
});

$('#cancel-two').click(function() {
  $('.authentication').removeClass('p3').addClass('p1');
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
