const audio = document.querySelector('audio');
var constraints = {video: false, audio: true};

navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    audio.srcObject = stream;
  var successCallback = function(error) {
    $('.loading').addClass('loaded')
  };
  var errorCallback = function(error) {
    if (error.name == 'NotAllowedError') {
      // user denied access to camera
    }
  };
  navigator.mediaDevices.getUserMedia(constraints)
    .then(successCallback, errorCallback);
});
