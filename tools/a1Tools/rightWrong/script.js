// Delay function 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleepFor(seconds, whattodo){
    for (let i = 0; i < seconds; i++){
        await sleep(i*1000);
    }
    whattodo();
}


// Collect all the necessary containers 
const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('right-wrong-options');
const finishScreen = document.querySelector('.finish-screen');
const rightButton = document.querySelector('.right');
const wrongButton = document.querySelector('.wrong');

// Necessary variables for points and other values 
let ncorrect = 0;
let baseButtonColor = "#D7EBFA";
let buttonClickedColor = "#A6BFDC";
let rightColor = "#23CD9C";
let wrongColor = "#FF8080";
let start = true;
let id = 0;

// Create data structure of questions with the correct answer highlighted 
const Questions = [
{
    id: 0,
    q: 'Die Hauptstadt von Deutschland ist Berlin.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 1,
    q: 'Die Hauptstadt von Frankreich ist Toulouse', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 2,
    q: 'Die Hauptstadt von Kanada ist Ottawa', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
}
];

// Testing field 


rightButton.addEventListener('click', () => {
    rightButton.style.backgroundColor = buttonClickedColor;
})

// Iterate through all the questions 
function iterate(id) {
    wrongButton.removeAttribute('style');
    wrongButton.classList.remove('unclickable');
    rightButton.removeAttribute('style');
    rightButton.classList.remove('unclickable');
    // Put the current question into the question div
    questionContainer.innerText = Questions[id].q;

    // Create a copy of the right and wrong buttons to give them the true/false values
    rightButton.value = Questions[id].a[0].isCorrect;
    wrongButton.value = Questions[id].a[1].isCorrect;

    // if(rightButton.value) {
    //     console.log("The answer you picked is correct.")
    // }    
    // Set start variable to false
    start = false;
}

// Create event listener for both buttons
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        // Make the right and wrong buttons unclickable
        wrongButton.classList.add('unclickable');
        rightButton.classList.add('unclickable');
        console.log(item.value);
        if(item.value == "true"){
            ncorrect++;
            sleepFor(1, () => {
                console.log(item.value);
                item.style.backgroundColor = rightColor;
            })
        } else {
            sleepFor(1, () => {
                item.style.backgroundColor = wrongColor;
            })
        }
        sleepFor(2, () => {
            if(id < Questions.length - 1){
                id++;
                item.style.backgroundColor = baseButtonColor;
                wrongButton.classList.remove('unclickable');
                rightButton.classList.remove('unclickable');
                iterate(id);
            } else {
                console.log("In the finish screen");
                finishScreen.classList.remove('hide');
                finishScreen.innerText = "You have finished the quiz. Your score is " + ncorrect + "/" + Questions.length + ".";
            }
        })
    })
})


initialize: if(start) iterate(0);