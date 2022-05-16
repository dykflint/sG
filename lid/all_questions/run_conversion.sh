#!/bin/bash
let start_question=1
let number_of_questions=30
for i in {1..30}
do
	python3 convert_questions.py german/$i english/$i $start_question $i $number_of_questions
done
