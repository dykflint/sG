// TODO: Buttons bigger (DONE)
// TODO: Microphone Button in the middle (move it to the right instead)
// TODO: remove example when talking starts (DONE) 
// TODO: Randomize Triggers (v2)
// TODO: Let the tool begin 
// TODO: Then switch places => let the user start the talking 
// ! IDEA: put recognition("result"){} content inside two if statements 
// ! One with the tool talking first and the other with the user talking first 
// ! Use a counter for the if statements that you can attach to a "Switch 
// ! Places" Button
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}




const body = document.querySelector("body");
const audio_img = document.getElementById("audio-img");
const trigger_content = document.querySelector(".trigger-content");
const correct_answers_div = document.querySelector(".correct-answers"); 
const preaching_section = document.querySelector(".preaching-container");
const starting_box = document.querySelector(".starting-box-konstantin");
const counter = 0;
let play_pause_counter = 0;
// ! DELAY FUNCTION
// Put whatever code that needs to be delayed into sleepFor(seconds)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepFor(seconds, whattodo, index) {
  for (let i = 0; i < seconds; i++) {
      await sleep(i * 1000);
  }
  whattodo(index);
}
// Let computer give its answer function 
function toolAnswer(){
  p.innerText = allTriggerAnswersData[0][current_trigger][current_trigger_index +1];
  // console.log("current index" + current_trigger_index);
  if (current_trigger_index == 2) {
    correct_answers_div.innerText = "Good job. Practice the trigger again or go to the next one.";
  }
  current_trigger_index += 2;
  p = document.createElement('p');
  words.appendChild(p)
}

// START PREACHING 
function startPreaching(){
  preaching_section.classList.remove("hide-konstantin");
  starting_box.classList.add("hide-konstantin");
  startTutorial();
}
  // WEB SPEECH API SETTINGS 
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.lang = 'de-DE';
  
  // TRIGGERS AND ANSWERS 
  // Remove triggers from HTML 
  const triggers = ["bleiben (=ist geblieben) - to stay/to remain \n zu Hause (fixed expression) - at home", "Garten (m) - garden"];
  const trigger_answers = ["Bist du zu Hause geblieben?", "Ich bin nicht zu Hause geblieben.", "Warum bist du nicht zu Hause geblieben?", "Weil ich nicht zu Hause geblieben bin."];

  let allTriggerAnswersJSON = `[
    {"bleiben (=ist geblieben) - to stay/to remain  zu Hause (fixed expression) - at home" : ["Bist du zu Hause geblieben?","Ich bin nicht zu Hause geblieben.", "Warum bist du nicht zu Hause geblieben?", "Weil ich nicht zu Hause geblieben bin."],
    "Garten (m) - garden" : ["Kaufst du einen Garten?", "Ich kaufe einen Garten.", "Kaufst du einen großen Garten?", "Ich kaufe einen großen Garten."]}
]`;
  allTriggerAnswersData = JSON.parse(allTriggerAnswersJSON);
  // console.log(allTriggerAnswersData[0][0][0].toLowerCase().replace(/[.,?!;:]/g,"") == "bist du zuhause geblieben");
  // console.log(allTriggerAnswersData[0]);
  // Initialize the shown trigger 
  trigger_content.innerText = triggers[0];
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);
  
  // Focus Function 
  function triggerFocus(element) {
    var eventType = "onfocusin" in element ? "focusin" : "focus",
    bubbles = "onfocusin" in element,
    event;
    
    if ("createEvent" in document) {
      event = document.createEvent("Event");
      event.initEvent(eventType, bubbles, true);
    }
    else if ("Event" in window) {
      event = new Event(eventType, { bubbles: bubbles, cancelable: true });
    }
    
    element.focus();
    element.dispatchEvent(event);
  }
  
  // Pick the current Trigger 
  let current_trigger = triggers[0]; 
  let current_trigger_index = 0;
  let next_index = 0;
  let paragraphs = words.getElementsByTagName("p");
  function nextTrigger() {
    if (next_index + 1 < triggers.length){
      next_index++; 
      console.log("index: " + next_index);
    }
    else{
      next_index = 0;
    }
    current_trigger = triggers[next_index];
    trigger_content.innerText = current_trigger;
    deleteEverything();
    correct_answers_div.innerText = "";
    triggerFocus(words);
    console.log(next_index);
  }
  
  function deleteEverything() {
    for(i=paragraphs.length - 2; i > 0; i--){
      if(i >= 0){
        paragraphs[i].remove();
      }
    }
    paragraphs[0].innerText = "";
    current_trigger_index = 0;
  }
  // ! Tutorial Button 
  // TODO: Show it at the beginning 
  // TODO: User input not to be deleted or as popup
  // This goes inside startTutorial() 
  let tutorial_counter = 0;
//   function tutorialExample(index){
//     p.innerText = example_preaching[index];
//     console.log(example_preaching[index]);
//     p = document.createElement('p');
//     words.appendChild(p);
// }
  let example_preaching = ["This is an example conversation.",
  "The tool will show you what an ideal example looks like.",
  "Feel free to talk along.", "Got it?"]
  function startTutorial(){
    if(tutorial_counter % 2 == 0){
      deleteEverything();
      for(i = 0; i < example_preaching.length; i++){
        // sleepFor(2, tutorialExample, i);
        p.innerText = example_preaching[i];
        console.log(example_preaching[i]);
        p = document.createElement('p');
        words.appendChild(p);
      }
      tutorial_counter++;
    }
    else {
      deleteEverything();
      tutorial_counter++;
    }
  }

  
  // recognition.start();
  recognition.addEventListener('result', e => {
    // Reset correct answer div 
    correct_answers_div.innerText = "";

    audio_img.src = "public/img/speaking_microphone.png"
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    const poopScript = transcript.replace(/Baum|poo|shit|dump/gi, '💩');
    const deleteScript = transcript.match("löschen");
    if (deleteScript == "löschen" && counter == 0) {
      deleteEverything();
      $('.words').children().last().remove();
    }
    
    if(paragraphs.length > 1){
      paragraphs[paragraphs.length - 1].style.color = "black";
    }
    p.textContent = poopScript;
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
      // Remove special characters from current_trigger 
      current_trigger = current_trigger.replace(/\n/g,"");
      if(paragraphs.length > 1) {
        if(paragraphs[paragraphs.length - 2].innerText.toLowerCase().replace(/[.,?!;:]/g,"") == allTriggerAnswersData[0][current_trigger][current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")){
          paragraphs[paragraphs.length - 2].style.color = "green";
          if(allTriggerAnswersData[0][current_trigger][current_trigger_index + 1]){
            sleepFor(2, toolAnswer);
          }
        }
        else {
          paragraphs[paragraphs.length - 2].style.color = "red";
          correct_answers_div.innerText = "Correct Answer:" + allTriggerAnswersData[0][current_trigger][current_trigger_index];
        }
      }
    }
    if(paragraphs.length > 4){
      paragraphs[0].remove();
    }
    recognition.addEventListener('end', () => {
      audio_img.src = "public/img/not_speaking_microphone.png"
    });
  });
  // Key command to pause and start the audio 
  window.addEventListener("keydown", (event) => {
    if(event.isComposing || event.keyCode === 32){
      // if (play_pause_counter % 2 == 0){
      //   recognition.start();
      //   console.log("Speech started");
      //   play_pause_counter++;
      // }
      // else {
      //   recognition.stop();
      //   console.log("Speech stopped");
      //   play_pause_counter++;
      // }
      recognition.start();
      console.log(tutorial_counter);
      if(tutorial_counter % 2 == 1){
        deleteEverything();
        tutorial_counter++;
      }
    }
  });
  // Button to start the microphone 
  function turnOnMicro(){
    recognition.start();
  }
  // Key command to go to next trigger 
  window.addEventListener("keydown", (event) => {
    if(event.isComposing || event.keyCode === 39){
      nextTrigger();
    }
  });