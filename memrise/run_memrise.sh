#!/bin/bash
for i in {6..49}
do
	let "i+=1"
	cp memrise.py $i
	cd $i
	python3 memrise.py lesson$i words$i exceptions
	let "i+=1"
	cp exceptions ../$i
	cd ..
done
