<script>
function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Frau Fraulich,",
"ich hoffe, es geht Ihnen gut.",
"Unsere Heizung fiept.",
"Bitte schicken Sie jemanden vorbei.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte",
"Frau Fraulich,",
"ich hoffe, es",
"geht Ihnen gut.",
"Unsere Heizung fiept.",
"Bitte schicken",
"Sie jemanden",
"vorbei.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Frau Fraulich,",
"ich hoffe, es geht Ihnen gut.",
"Unsere Heizung fiept.",
"Bitte schicken Sie jemanden vorbei.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
</script>
