#!/bin/bash
let start_question=301
let number_of_questions=10
let state="badenw"
for i in {301..310}
do
	python3 convert_questions.py state_questions_german/${state}_questions_german$i state_questions_english/${state}_questions_english$i $start_question $i $number_of_questions
done
