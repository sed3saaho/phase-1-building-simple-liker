// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHearts = document.querySelectorAll('.like-glyph');

emptyHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Change the heart to a full heart and add the activated-heart class
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(error => {
        
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        modal.classList.remove('hidden');
        modalMessage.innerText = error;

        
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});
const fullHearts = document.querySelectorAll('.like-glyph.activated-heart');

fullHearts.forEach(heart => {
  heart.addEventListener('click', () => {
    
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  });
});

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

