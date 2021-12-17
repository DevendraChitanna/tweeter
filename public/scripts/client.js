
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Fake data taken from initial-tweets.json

//Escape function
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


let tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


const renderTweets = function (tweets) {
  tweets.forEach((tweet) => {
    let myTweet = createTweetElement(tweet);
    $('#tweet-container').prepend(myTweet);

  })

}


//************************************************** */
const createTweetElement = function (tweetData) {
  // let name = tweetData.user.name;
  // let avatars = tweetData.user.avatars;
  // let handle = tweetData.user.handle;
  // let text = tweetData.content.text;
  // let date = tweetData.created_at;

  let $tweet = $("<atricle>").addClass("tweet");

  const html = `
 
  
        <header class="header-tweet">
          <div class="avatar-name">
            <img class="resize" src="${tweetData.user.avatars}">
            <p>${tweetData.user.name}</p>
          </div>
          <strong>${tweetData.user.handle}</strong>
        </header>
        <p class="view-tweet">${escape(tweetData.content.text)}</p>
        <footer class="footer-tweet">
          <small>${timeago.format(tweetData.created_at)}</small>
          <div class='icons'>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>

  

 `;

  // Test / driver code (temporary)
  // console.log("***$$$", $tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so
  // we can make sure it's got all the right elements, classes, etc.
  let tweetElement = $tweet.append(html);
  console.log("***$$$", tweetElement);
  return tweetElement;

}
//*********************************************************** */
// let $tweet = createTweetElement(tweet)

const loadTweets = function () {
  $.ajax('http://localhost:8080/tweets', { method: 'GET', dataType: "json" })
    .then(function (newTweets) {
      renderTweets(newTweets);
    });
}
//***************************************************** */
$(document).ready(function () {

  // const $tweet = createTweetElement(tweetData)

  // console.log($tweet); // to see what it looks like
  // // $('#tweet-container').append($tweet);



  // renderTweets(data);


  loadTweets()

  $("#new-tweet-form").on('submit', function (event) {
    event.preventDefault();
    const textBox = $("#tweet-text").val();
    const formData = $(this);

    if (textBox === "" || null) {
      // return alert("Error: Your tweet is empty!")
      $(".error-msg")
        .html("🛑Error: Your tweet is empty!🛑")
        .slideDown();
    };



    if (textBox.length > 140) {
      // return alert("Error: Too many characters. Only 140 or less")
      $(".error-msg")
        .html("🛑Error: Too many characters. Only 140 or less🛑")
        .slideDown();
    } else {
      console.log("formData", formData.serialize());
      $.ajax('/tweets', { method: 'POST', data: formData.serialize() })
        .then(function () {
          console.log("Tweet posted");
          $('#tweet-container').html('');
          loadTweets()
        });

    }

  });


});
