#!/bin/bash
for i in {1..49} 
do 
python3 create_babysteps.py $1/$i out_$i
cat out_$i >> $1_output
rm out_$i
done
