function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Lieber Max,",
"vielen Dank für deine Einladung.",
"Sollen wir uns im Englischen Garten treffen?",
"Aber am Montag kann ich leider nicht.",
"Was hältst du vom Wochenende?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Lieber Max,",
"vielen Dank",
"für deine",
"Einladung.",
"Sollen wir uns",
"im Englischen Garten",
"treffen?",
"Aber am Montag",
"kann ich leider",
"nicht.",
"Was hältst",
"du vom",
"Wochenende?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Lieber Max,",
"vielen Dank für deine Einladung.",
"Sollen wir uns im Englischen Garten treffen?",
"Aber am Montag kann ich leider nicht.",
"Was hältst du vom Wochenende?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
