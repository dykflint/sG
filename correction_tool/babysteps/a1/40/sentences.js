function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"vielen Dank für deine Einladung.",
"Sollen wir uns im Park treffen?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"vielen Dank",
"für deine",
"Einladung.",
"Sollen wir uns",
"im Park treffen?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"vielen Dank für deine Einladung.",
"Sollen wir uns im Park treffen?",
"Herzliche Grüße",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
