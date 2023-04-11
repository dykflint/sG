// Initialize the SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set the properties of the recognition object
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

// Get references to the record button and the output element
const recordButton = document.querySelector('#record');
const outputElement = document.querySelector('#output');

// Add a click event listener to the record button
recordButton.addEventListener('click', () => {
  if (recognition.running) {
    // Stop recognition if it is running
    recognition.stop();
    recordButton.textContent = 'Record';
  } else {
    // Start recognition if it is not running
    recognition.start();
    recordButton.textContent = 'Stop';
  }
});

// Listen for the 'result' event
recognition.onresult = (event) => {
  const lastResultIndex = event.results.length - 1;
  const lastResult = event.results[lastResultIndex][0].transcript;

  // Update the output element with the latest result
  outputElement.textContent = lastResult;
};

// Listen for the 'end' event
recognition.onend = () => {
  // Change the text on the record button to 'Record'
  recordButton.textContent = 'Record';
};

// Handle errors
recognition.onerror = (event) => {
  console.error(event.error);
};
