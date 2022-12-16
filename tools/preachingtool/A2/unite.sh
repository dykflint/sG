#!/bin/bash
for i in {1..50}
do
	cat solutions/${i}Quotes emptyline triggers/formatted${i}Triggers > ${i}full
done
