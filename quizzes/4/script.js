// Questions will be asked
const Questions = [{
    id: 0,
    q: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    a: [{ text: "hier Religionsfreiheit gilt.", isCorrect: false },
        { text: "die Menschen Steuern zahlen.", isCorrect: false },
        { text: "die Menschen das Wahlrecht haben.", isCorrect: false },
        { text: "hier Meinungsfreiheit gilt.", isCorrect: true }
    ]

},
{
    id: 1,
    q: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    a: [{ text: "Geschichtsunterricht teilnimmt.", isCorrect: false, isSelected: false },
        { text: "Religionsunterricht teilnimmt.", isCorrect: true },
        { text: "Politikunterricht teilnimmt.", isCorrect: false },
        { text: "Sprachunterricht teilnimmt.", isCorrect: false }
    ]
    
},
{
    id: 2,
    q: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    a: [{ text: " Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.", isCorrect: true },
    { text: "Der Staat muss sich nicht an die Gesetze halten.", isCorrect: false },
    { text: "Nur Deutsche müssen die Gesetze befolgen.", isCorrect: false },
    { text: "Die Gerichte machen die Gesetze.", isCorrect: false }
]

}

]

const Translations = [{
    id: 0,
    q: "In Germany, people are allowed to say something openly against the government because...",
    a: [{ text: "Freedom of religion applies here.", isCorrect: false },
    { text: "people pay taxes.", isCorrect: false },
    { text: "people have the right to vote.", isCorrect: false },
    { text: "Freedom of opinion applies here.", isCorrect: true }
]

},
{
    id: 1,
    q: "In Germany, parents up to the age of 14 can decide whether at school their child should  ...",
    a: [{ text: "attend history classes.", isCorrect: false, isSelected: false },
    { text: "participate in religious education.", isCorrect: true },
    { text: "attend political classes.", isCorrect: false },
    { text: "participate in language classes.", isCorrect: false }
]

},
{
    id: 2,
    q: "Germany is a constitutional state. What does that mean?",
    a: [{ text: " All residents and the state must obey the law.", isCorrect: true },
    { text: "The state does not have to obey the law.", isCorrect: false },
    { text: "Only Germans have to obey the law.", isCorrect: false },
    { text: "The courts make the laws.", isCorrect: false }
]


}

]


// Set start
var start = true;

// Counter for correct answers
var ncorrect = 0;

var selected = "";
var chosenAnswer = "";
// Iterate
var counter = 0;
const option_container = document.getElementsByClassName("option-container")[0];
const check_button = document.getElementsByClassName("check")[0];
const evaluate_button = document.getElementsByClassName("evaluate")[0];
const panel_container = document.getElementsByClassName("panel")[0];
const question_container = document.getElementsByClassName("question-container")[0];
// const result_container = document.getElementsByClassName("result_container")[0];
const finished_container = document.getElementsByClassName("finished")[0];
const restart_button = document.getElementsByClassName("restart")[0];
const translation_button = document.getElementsByClassName("translation_button")[0];
const questionsBank = document.getElementsByClassName("questions-bank")[0];
// const result = document.getElementsByClassName("result_container");
function iterate(id) {

// Getting the result display section
// var result = document.getElementsByClassName("result_container");
// result[0].innerText = "";


// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

// Translation button 
translation_button.addEventListener("click", () => {
    if (counter %2 == 0) {
        // English Version of the Questions and Answers
        // Setting the question text
        question.innerText = Translations[id].q;
        // Providing option text
        op1.innerText = Translations[id].a[0].text;
        op2.innerText = Translations[id].a[1].text;
        op3.innerText = Translations[id].a[2].text;
        op4.innerText = Translations[id].a[3].text;
    
        // Providing the true or false value to the options
        op1.value = Translations[id].a[0].isCorrect;
        op2.value = Translations[id].a[1].isCorrect;
        op3.value = Translations[id].a[2].isCorrect;
        op4.value = Translations[id].a[3].isCorrect;
        translation_button.innerHTML = "Show Original";
    }
    else {
        // German Version of the Questions and Answers
        // Setting the question text
        question.innerText = Questions[id].q;
        // Providing option text
        op1.innerText = Questions[id].a[0].text;
        op2.innerText = Questions[id].a[1].text;
        op3.innerText = Questions[id].a[2].text;
        op4.innerText = Questions[id].a[3].text;

        // Providing the true or false value to the options
        op1.value = Questions[id].a[0].isCorrect;
        op2.value = Questions[id].a[1].isCorrect;
        op3.value = Questions[id].a[2].isCorrect;
        op4.value = Questions[id].a[3].isCorrect;
        translation_button.innerHTML = "Show Translation";
    }
    counter++
})
// var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "rgb(250, 250, 250)";
    op3.style.backgroundColor = "rgb(250, 250, 250)";
    op4.style.backgroundColor = "rgb(250, 250, 250)";
    selected = op1.value;
    chosenAnswer = op1;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(250, 250, 250)";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "rgb(250, 250, 250)";
    op4.style.backgroundColor = "rgb(250, 250, 250)";
    selected = op2.value;
    chosenAnswer = op2;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(250, 250, 250)";
    op2.style.backgroundColor = "rgb(250, 250, 250)";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "rgb(250, 250, 250)";
    selected = op3.value;
    chosenAnswer = op3;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(250, 250, 250)";
    op2.style.backgroundColor = "rgb(250, 250, 250)";
    op3.style.backgroundColor = "rgb(250, 250, 250)";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
    chosenAnswer = op4;
})

// Grabbing the evaluate button
// const check = document.getElementsByClassName("check")[0];

// Evaluate method
// check.addEventListener("click", () => {
//     check.classList.add("hide-konstantin");
//     if (selected == "true") {
//         ncorrect++;
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })
// return selected;
}

initialize: if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

// Next button and method
evaluate_button.addEventListener("click", () => {
    option_container.classList.add("hide-konstantin");
    question_container.classList.add("hide-konstantin");
    finished_container.classList.remove("hide-konstantin");
    finished_container.innerHTML = "YOU GOT " + ncorrect + " OUT OF " + Questions.length + " QUESTIONS CORRECT. <br> DO YOU WANT TO PRACTICE MORE?";
    evaluate_button.classList.add("hide-konstantin");
    restart_button.classList.remove("hide-konstantin");
    translation_button.classList.add("hide-konstantin");
    questionsBank.classList.remove("hide-konstantin");
    // result[0].innerText = "";
})
restart_button.addEventListener("click", () => {
    window.location.reload();
})

check_button.addEventListener("click", () => {
    if (selected == "true") {
        ncorrect++;
        chosenAnswer.style.backgroundColor = "#BBE4DA";
        check_button.classList.add("hide-konstantin");
        next.classList.remove("hide-konstantin");
        // result[0].innerHTML = "True";
        // result[0].style.color = "green";
    } else {
        chosenAnswer.style.backgroundColor = "#FFA4A5";
        check_button.classList.add("hide-konstantin");
        next.classList.remove("hide-konstantin");
        // result[0].innerHTML = "False";
        // result[0].style.color = "red";
    }
    selected = "";
})

next.addEventListener("click", () => {
    chosenAnswer.style.backgroundColor = "white";
    start = false;    
    if (id < (Questions.length-1)) {
        check_button.classList.remove("hide-konstantin")
        next.classList.add("hide-konstantin")
        id++;
        iterate(id);
        console.log(id);
        console.log(selected);
    }    
    else  {
        next.classList.add("hide-konstantin");
        check_button.classList.add("hide-konstantin");
        evaluate_button.classList.remove("hide-konstantin");
    }    
}
)



