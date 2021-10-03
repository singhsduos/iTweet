// select element from document
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// adding event listener in forms
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    // after posting tweet again make enter fields empty
    usernameInput.value = "";
    tweetInput.value = "";
});

// function for adding your tweets and displaying to user
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}