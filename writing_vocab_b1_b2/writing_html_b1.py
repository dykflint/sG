import sys

lesson = str(sys.argv[1])
output_writing = str(sys.argv[2])

lesson_arr = []
with open(lesson) as l:
    for line in l:
        list_tmp = [elt.strip() for elt in line.split('\t')]
        while '' in list_tmp:
            list_tmp.remove('')
        lesson_arr.append(list_tmp)

with open(output_writing, "a") as ow:
    ow.write("#################### BEGINNING OF " + lesson + " #########################\n")
    ow.write("<button class=\"post-body-btn\" onclick=\"myFunction('myDIV1')\">View Vocabulary</button>\n")
    ow.write("<div id=\"myDIV1\" style=\"display: none;\">\n")
    ow.write("<table class=\"k-dot-table\" id=\"k-table-border\">\n")
    for arr in lesson_arr:
        ow.write("  <tr>\n")
        ow.write("      <td><strong>"+str(arr[0])+"</strong></td>\n")
        ow.write("      <td>"+str(arr[1])+"</td>\n")
        ow.write("  </tr>\n")
    ow.write("</table>\n")
    ow.write("</div>\n")
    ow.write("#################### END #########################\n")