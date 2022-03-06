import sys
import os

from numpy import number

questionfile = str(sys.argv[1])
output_html = str(sys.argv[2])
number_of_questions = int(sys.argv[3])
questions = []
counter = 0
with open(questionfile, 'r') as qfile:
    for line in qfile:
        line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n']
        #! skip iteration if array is empty
        if len(line_tmp) == 0: continue
        line_tmp = line_tmp[0].replace("—", "")
        line_tmp = line_tmp.replace("-", "")
        line_tmp = line_tmp.replace("✓", "&#10004;")
        questions.append(line_tmp)


try:
    os.remove(output_html)
except:
    pass

#! write output html file
question_counter = 0
with open(output_html, 'a') as file:
    file.write("<!DOCTYPE html>\n")
    file.write("<html>\n")
    file.write("<head>\n")
    file.write("    <style>\n")
    file.write("        table, tr, td {\n")
    file.write("            border: 2px solid #FFC7DB;\n")
    file.write("            border-radius: 10px;\n")
    file.write("        }\n")
    file.write("        table {\n")
    file.write("            border: 5px solid #FFC7DB;\n")
    file.write("        }\n")
    file.write("        #correct_answer span {\n")
    file.write("            background-color: lightgreen;\n")
    file.write("            font-size: 20px;\n")
    file.write("        }\n")
    file.write("    </style>\n")
    file.write("</head>\n")
    file.write("<body>\n")
    file.write("    <div>\n")
    file.write("        <table>\n")
    file.write("            <colgroup>\n")
    file.write("                <col>\n")
    file.write("                <col>\n")
    file.write("                <col>\n")
    file.write("            </colgroup>\n")
    file.write("            <body class=\"lid\">\n")
    for row in range(number_of_questions):
        file.write("                <tr>\n")
        file.write("                    <td>\n")
        file.write("                        <p>"+str(row+1))
        file.write("                        </p>\n")
        file.write("                    </td>\n")
        file.write("                    <td>\n")
        file.write("                        <h3>"+str(questions[row*8])+"</h3>\n")
        file.write("                        <ul>\n")
        #! German questions and answers
        if "&#10004;" in str(questions[row*8+1]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+1])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+1])+"</li>")
        if "&#10004;" in str(questions[row*8+2]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+2])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+2])+"</li>")
        if "&#10004;" in str(questions[row*8+3]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+3])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+3])+"</li>")
        if "&#10004;" in str(questions[row*8+4]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+4])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+4])+"</li>")
        file.write("                        </ul><br>\n")
        file.write("                    </td>\n")
        #! English questions and answers
        file.write("                    <td>\n")
        file.write("                        <h3>"+str(questions[row*4+5])+"</h3>\n")
        file.write("                        <ul>\n")
        if "&#10004;" in str(questions[row*8+6]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+6])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+6])+"</li>")
        if "&#10004;" in str(questions[row*8+7]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+7])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+7])+"</li>")
        if "&#10004;" in str(questions[row*8+8]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+8])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+8])+"</li>")
        if "&#10004;" in str(questions[row*8+9]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*8+9])+" </span></li>")
        else:
            file.write("                            <li>"+str(questions[row*8+9])+"</li>")
        file.write("                        </ul><br>\n")
        file.write("                    </td>\n")
        file.write("                </tr>\n")
    file.write("            </body>\n")
    file.write("        </table>\n")
    file.write("    </div>\n")
    file.write("</body>\n")
    file.write("</html>\n")
print(questions)
