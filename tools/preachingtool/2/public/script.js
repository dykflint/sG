window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const body = document.querySelector("body");
  const audio_img = document.getElementById("audio-img");
  console.log(audio_img);
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.lang = 'de-DE';
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);
  
  recognition.addEventListener('result', e => {
      // body.style.background = "white url(public/img/sound.gif)";
      // body.style.backgroundRepeat = "repeat-x";
      // body.style.backgroundSize = "100% 100%";
      audio_img.src = "public/img/speaking_microphone.png"
      console.log(audio_img);
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      
      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      const deleteScript = transcript.match("löschen");
      console.log(transcript);
      if (deleteScript === "löschen") {
        console.log(deleteScript);
      }
      p.textContent = poopScript;
      
      if (e.results[0].isFinal) {
          p = document.createElement('p');
          console.log("hi");
          words.appendChild(p);
          console.log(words);
        }
      recognition.addEventListener('end', () => {
        // body.style.background = "white"; 
        audio_img.src = "public/img/not_speaking_microphone.png"
        console.log('Speech recognition service disconnected');
      });
    });
    
    recognition.addEventListener('end', recognition.start);


  recognition.start();