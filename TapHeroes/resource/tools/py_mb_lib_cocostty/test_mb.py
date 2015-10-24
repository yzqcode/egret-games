# -*- coding: gbk -*-

import os
import sys
from mb_table import *
#from mb_manager import *
import tty_const
import timeit
from cfg import *

import ParseTTYDefine
exec ParseTTYDefin.python_code

def build_mb_and_const():
	create_index_mbs()

def test_mb():
	print '-------test begin--------'
	print g_mbs[item_list]
	print g_mbs[item_list][2]
	print g_mbs[item_list][2][1]

	print 'item_use %d' % item_use
	print g_mbs[item_use]
	print g_mbs[item_use][2]
	print g_mbs[item_use][2][4]

	print 'cha_list ', cha_list
	print g_mbs[cha_list]
	print g_mbs[cha_list][1].data()


if __name__ == '__main__':
	#print timeit.Timer('mb_manager.create_index_mbs()','import mb_manager').timeit(1)
	#build_mb_and_const()
	t = create_mb([r'D:\test.txt'], 0, 1, [1])
	'''
	print 'item_list:', item_list
	t = g_mbs[item_list]
	print t[58000].cells
	print t[58001].cells
	test_mb()
	print '共有表格 %d 个' % len(g_mbs)
	table = g_mbs[equip_chy]
	g_mbs[equip_chy].save_to_file('test_old.txt')
	new_line = table.new_empty_line( table.get_new_id() )
	print new_line
	new_line[0] = 'mayao'
	new_line[2] = '哈哈哈'
	table.add_line(new_line)
	print table[15]
	g_mbs[equip_chy].save_to_file('test.txt')
	'''

