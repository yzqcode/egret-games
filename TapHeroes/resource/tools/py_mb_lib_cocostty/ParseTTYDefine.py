#!/usr/bin/env python

import re

enuming = False
counter = 0

python_code_l = []

from cfg import * 

for line in file(path_const):
    if line.find('{') != -1:
        enuming = True
        counter = 0
        continue
    if enuming == True:
        if line.find('}') != -1:
            enuming = False
            continue
        l = re.findall(r'([0-9A-Za-z_]+)\s*=\s*(\d+)', line)
        if len(l) > 0:
            python_code_l.append( l[0][0] + '=' + l[0][1] )
            counter = int(l[0][1]) + 1
            continue
        l = re.findall(r'[0-9A-Za-z_]+', line)
        if len(l) > 0:
            python_code_l.append( l[0] + '=' + str(counter) )
            counter += 1
python_code = '\n'.join(python_code_l)

if __name__=='__main__':
	print python_code

