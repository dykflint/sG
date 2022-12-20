import sys
from tracemalloc import start


question_file = str(sys.argv[1])
start_question = int(sys.argv[2])

question_arr = []
counter = 0
with open(question_file) as f:
    for line in f:
        list_tmp = [elt.strip("") for elt in line.split('\n')]
        question_arr.extend(list_tmp[:-1])


for i in range(len(question_arr)):
    if i % 6 == 0:
        with open("test/"+str(question_file)+str(start_question+counter), "a") as out:
            out.write(question_arr[i]+"\n")
            out.write(question_arr[i+1]+"\n")
            out.write(question_arr[i+2]+"\n")
            out.write(question_arr[i+3]+"\n")
            out.write(question_arr[i+4]+"\n")
            out.write(question_arr[i+5]+"\n")
        counter += 1
