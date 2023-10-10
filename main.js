// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.querySelector('#modal')
error.classList.add('hidden')

const clickHeart = document.querySelector('span.like-glyph')
clickHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(resp => {
      if (clickHeart.textContent === EMPTY_HEART){
        clickHeart.classList.add('activated-heart')
        clickHeart.textContent = FULL_HEART
      }
      else if (clickHeart.textContent === FULL_HEART){
        clickHeart.classList.remove('activated-heart')
        clickHeart.textContent = EMPTY_HEART
      }
    })
    .catch((err) => {
      error.classList.remove('hidden')
      setTimeout(function() {
        error.classList.add('hidden')
      }, 3000)
    })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
