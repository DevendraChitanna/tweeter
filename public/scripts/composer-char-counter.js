$(document).ready(function () {

  $('#tweet-text').on('keyup', (e) => {
    const inputLength = e.target.value.length;

    const counter = 140 - inputLength;

    $('.counter').text(counter);

    if (counter < 0) {
      $('.counter').css('color', 'red')
    } else if (counter >= 0) {
      $('.counter').css('color', 'black')
    }

    if ($("#tweet-text").val() !== "") {
      $(".error-msg")
        .html("")
        .slideUp();
    }


  })
});
