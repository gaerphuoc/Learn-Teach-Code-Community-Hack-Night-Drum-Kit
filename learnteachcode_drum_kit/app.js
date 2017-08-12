function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; 
  // terminate the function from running
  
  audio.currentTime = 0; 
  // go back to the start
  
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; 
  // skip if it it's not a transform so only one sound plays at a time
  
  
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);


/*I was going to align the letters on each persons
face in the family but it would take too much time on css.
But I would be cool to hear a sound effect when you hit
someone's face*/