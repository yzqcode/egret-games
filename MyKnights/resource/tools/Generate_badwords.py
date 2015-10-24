#!/usr/bin/env python
#encoding=utf-8

import glob
import os
import time

input_file = open("./badword.txt", "r");
all_lines = input_file.readlines();
input_file.close();

badwords_file_name = "badwords_" + time.strftime('%m-%d') + ".txt"
output_file = file(badwords_file_name, 'w')
output_file.write('public static BAD_WORDS = [');

for eachline in all_lines:
	output_file.write('"');
   	output_file.write(eachline.strip('\r\n'));
   	output_file.write('"');

   	output_file.write(',');

output_file.write('];');




