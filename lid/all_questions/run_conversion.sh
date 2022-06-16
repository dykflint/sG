#!/bin/bash
let start_question=11
let number_of_questions=20
for i in {11..30}
do
	python3 convert_questions.py german/$i english/$i $start_question $i $number_of_questions
done
