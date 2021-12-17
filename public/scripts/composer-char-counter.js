$(document).ready(function () {
  // --- our code goes here ---
  // alert('The DOM is loaded')
  $('#tweet-text').on('keyup', (e) => {
    // console.log("event ===>", e)
    // console.log("target  ===>", e.target)
    console.log("value ===>", e.target.value)
    // console.log("length ===>", e.target.value.length)
    const inputLength = e.target.value.length;
    // console.log(inputLength)

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

    // if ($("#tweet-text").val().length < 140) {
    //   $(".error-msg")
    //     .html("")
    //     .slideUp();
    // }
  })
});
