window.setTimeout(function(){
  $('.loading-screen').addClass('slideOutUp')
},4000);

$('#start #next').click(function() {
  $('body').addClass('flipOutY');
    setTimeout(function(){
      window.location = "../loss-setup/index.html";
    }, 1000);
});


$('#loss-setup #next').click(function() {
  $('body').addClass('fadeOutRight');
    setTimeout(function(){
      window.location = "../room-setup/index.html";
    }, 1000);
});


$('#room-setup #prev').click(function() {
  $('body').addClass('fadeOutLeft');
    setTimeout(function(){
      window.location = "../loss-setup/index.html";
    }, 1000);
});

$('#room-setup #next').click(function() {
  $('body').addClass('fadeOutLeft');
    setTimeout(function(){
      window.location = "../product-setup/index.html";
    }, 1000);
});


$('#product-setup #prev').click(function() {
  $('body').addClass('fadeOutLeft');
    setTimeout(function(){
      window.location = "../room-setup/index.html";
    }, 1000);
});

$('#product-setup #next').click(function() {
  $('body').addClass('fadeOutLeft');
    setTimeout(function(){
      window.location = "../product-intro/index-a.html";
    }, 1000);
});
