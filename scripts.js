$(function() {
  $('select').on('change', function() {
    $('.filterItem').hide();
    $('.' + this.value).show();
  });
});

var video = document.getElementById("myVideo");
