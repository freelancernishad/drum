let audio1 = new Audio('ready-sound/beat-of-time-128705.mp3');
let audio2 = new Audio('ready-sound/rock-funk-fusion-drum-beat-130bpm-100051.mp3');
let audio3 = new Audio('ready-sound/synthpop-drum-solo-112bpm-by-prettysleepy-art-15456.mp3');

function demo1() {
    audio2.pause();
    audio3.pause();
      audio1.play();
}

function demo2() {
    audio1.pause();
    audio3.pause();
      audio2.play();
}

function demo3() {
    audio1.pause();
    audio2.pause();
    audio3.play();
  }  



  function playAudio(key, audioURL) {
    const audio = new Audio(audioURL);
    audio.play();
  }
  
  const keyAudioMap = {
    'e': 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav',
    'r': 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav',
    'g': 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav',
     'i' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav',

    'k' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav',
    'h' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav',

    'j' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav',
    'f' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav',
   
    'b' : 'https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav',

  };
  
  for (const [key, audioURL] of Object.entries(keyAudioMap)) {
    document.addEventListener("keydown", function(event) {
      if (event.key === key) {
        playAudio(key, audioURL);
      }
    });
  }
  