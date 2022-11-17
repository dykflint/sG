// TODO: 2 second delay after last correct answer and then automatically next 
// TODO: Show the last preaching below the box 
// TODO: Switch automatically (no button) - only after 10 each 
// TODO: Show next answer below on button press 
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
const previous_answers_div = document.querySelector(".previous-answers");
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
function computerFirst(){
  current_trigger = current_trigger.replace(/\n/g,"");
  console.log("current trigger: "+current_trigger);
  p.innerText = allTriggerAnswersData[0][current_trigger][current_trigger_index];
  current_trigger_index += 1;
  p = document.createElement('p');
  words.appendChild(p)
}

// ! START PREACHING 
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
  const triggers = ["bestrafen - to punish", "betrügen - to cheat",
  "enttäuschen - to disappoint", "erklären - to explain","erzählen - to tell",
  "erziehen - to educate","verlieren - to lose","zerstören - to destroy",
  "gewinnen - to win","übertreiben - to exaggerate"];
  // const trigger_answers = ["Bist du zu Hause geblieben?", "Ich bin nicht zu Hause geblieben.", "Warum bist du nicht zu Hause geblieben?", "Weil ich nicht zu Hause geblieben bin."];

  let allTriggerAnswersJSON = `[
    {"bestrafen - to punish" : ["Bestrafst du gern?","Ich bestrafe nicht gern.", "Warum bestrafst du nicht gern?", "Weil ich einfach nicht gern bestrafe."],
    "betrügen - to cheat" : ["Betrügst du gern?", "Ich betrüge nicht gern.", "Warum betrügst du nicht gern?", "Weil ich einfach nicht gern betrüge."],
    "enttäuschen - to disappoint" : ["Enttäuschst du gern?", "Ich enttäusche nicht gern.", "Warum enttäuschst du nicht gern?", "Weil ich einfach nicht gern enttäusche."],
    "erklären - to explain" : ["Erklärst du gern?", "Ich erkläre nicht gern.", "Warum erklärst du nicht gern?", "Weil ich einfach nicht gern erkläre."],
    "erzählen - to tell" : ["Erzählst du gern?", "Ich erzähle nicht gern.", "Warum erzählst du nicht gern?", "Weil ich einfach nicht gern erzähle."],
    "erziehen - to educate" : ["Erziehst du gern?", "Ich erziehe nicht gern.", "Warum erziehst du nicht gern?", "Weil ich einfach nicht gern erziehe."],
    "verlieren - to lose" : ["Verlierst du gern?", "Ich verliere nicht gern.", "Warum verlierst du nicht gern?", "Weil ich einfach nicht gern verliere."],
    "zerstören - to destroy" : ["Zerstörst du gern?", "Ich zerstöre nicht gern.", "Warum zerstörst du nicht gern?", "Weil ich einfach nicht gern zerstöre."],
    "gewinnen - to win" : ["Gewinnst du gern?", "Ich gewinne nicht gern.", "Warum gewinnst du nicht gern?", "Weil ich einfach nicht gern gewinne."],
    "übertreiben - to exaggerate" : ["Übertreibst du gern?", "Ich übertreibe nicht gern.", "Warum übertreibst du nicht gern?", "Weil ich einfach nicht gern übertreibe."]}
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
  // ! NEXT TRIGGER FUNCTION
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
    console.log("Before Delete Call in Next");
    deleteEverything();
    correct_answers_div.innerText = "";
    triggerFocus(words);
    computerSpeakingFirst = true;
    // if(computerSpeakingFirst && switchPlaces % 2 == 0){
    //   computerFirst();
    //   computerSpeakingFirst = false;
    // }
  }
  // ! DELETE EVERYTHING FUNCTION 
  function deleteEverything() {
    for(i=paragraphs.length - 2; i > 0; i--){
      if(i >= 0){
        paragraphs[i].remove();
      }
    }
    paragraphs[0].innerText = "";
    current_trigger_index = 0;
    computerSpeakingFirst = true;
    if(computerSpeakingFirst && switchPlaces % 2 == 0 && 
      tutorial_counter != 0){
      console.log("Within Delete Computer Call");
      computerFirst();
      computerSpeakingFirst = false;
    }
  }
  function otherPerson(){
    switchPlaces++; 
    console.log(switchPlaces);
    deleteEverything();
  }
  // ! Tutorial Button 
  let tutorial_counter = 0;
  let example_preaching = ["Bestrafst du gern?",
  "Ich bestrafe nicht gern.",
  "Warum bestrafst du nicht gern?", "Weil ich einfach nicht gern bestrafe."]
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

  let switchPlaces = 0;
  let computerSpeakingFirst = true;
  // recognition.start();

  recognition.addEventListener('result', e => {
    if (switchPlaces % 2 == 0){
      // TOOL SPEAKS FIRST 
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
      // Here is where stuff is being written 
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
        // Remove special characters from current_trigger 
        current_trigger = current_trigger.replace(/\n/g,"");
        if(paragraphs.length > 1) {
          if(paragraphs[paragraphs.length - 2].innerText.toLowerCase().replace(/[.,?!;:]/g,"") == allTriggerAnswersData[0][current_trigger][current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")){
            paragraphs[paragraphs.length - 2].style.color = "green";
            if(current_trigger_index == 3){
              correct_answers_div.innerText = "Good job. Practice the trigger again or go to the next one.";
            }
          if(allTriggerAnswersData[0][current_trigger][current_trigger_index + 1]){
            sleepFor(2, toolAnswer);
          }
          if(current_trigger_index == 3){
            console.log("Last Trigger Answer");
            sleepFor(2, nextTrigger);
            previous_answers_div.innerHTML = "";
            for(i=0; i < allTriggerAnswersData[0][current_trigger].length; i++){
              p = document.createElement('p');
              p.innerText = allTriggerAnswersData[0][current_trigger][i];
              previous_answers_div.appendChild(p);
            }
          }
        }
        else {
          paragraphs[paragraphs.length - 2].style.color = "red";
          correct_answers_div.innerText = "Correct Answer:" + allTriggerAnswersData[0][current_trigger][current_trigger_index];
        }
      }
    }
    if(paragraphs.length > 5){
      paragraphs[0].remove();
    }
    recognition.addEventListener('end', () => {
      audio_img.src = "public/img/not_speaking_microphone.png"
    });
  } else {
    // STUDENT SPEAKS FIRST
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
    if(paragraphs.length > 5){
      paragraphs[0].remove();
    }
    recognition.addEventListener('end', () => {
      audio_img.src = "public/img/not_speaking_microphone.png"
    });
  }
  });
  // Key command to pause and start the audio 
  window.addEventListener("keydown", (event) => {
    if(event.isComposing || event.keyCode === 32){
      recognition.start();
      console.log(tutorial_counter);
      if(tutorial_counter % 2 == 1){
        deleteEverything();
        tutorial_counter++;
      }
      if (computerSpeakingFirst && switchPlaces % 2 == 0) {
        computerFirst();
        computerSpeakingFirst = false;
      } else {
        // deleteEverything();
      }
    }
  });
  // Button to start the microphone 
  function turnOnMicro(){
    recognition.start();
    if(tutorial_counter % 2 == 1){
      deleteEverything();
      tutorial_counter++;
    }
    if (computerSpeakingFirst && switchPlaces % 2 == 0) {
      computerFirst();
      computerSpeakingFirst = false;
    } else {
      // deleteEverything();
    }
  }
  // Key command to go to next trigger 
  window.addEventListener("keydown", (event) => {
    if(event.isComposing || event.keyCode === 39){
      nextTrigger();
    }
  });