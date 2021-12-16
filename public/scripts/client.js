/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let tweet = {
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

const createTweetElement = function (tweetData) {
  // let name = tweetData.user.name;
  // let avatars = tweetData.user.avatars;
  // let handle = tweetData.user.handle;
  // let text = tweetData.content.text;
  // let date = tweetData.created_at;

  let $tweet = $("<atricle>").addClass("tweet");

  const html = `
 
  
        <header class="header-tweet">
          <div>
            <img class="resize" src="${tweetData.user.avatars}">
            <a>${tweetData.user.name}</a>
          </div>
          <strong>${tweetData.user.handle}</strong>
        </header>
        <p class="view-tweet">${tweetData.content.text}</p>
        <footer class="footer-tweet">
          <small>${tweetData.created_at}</small>
          <div class='icons'>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>

  

 `;

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); // to add it to the page so
  // we can make sure it's got all the right elements, classes, etc.
  let tweetElement = $tweet.append(html);
  return tweetElement;

}

// let $tweet = createTweetElement(tweet)
createTweetElement(tweet)


