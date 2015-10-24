# -*- coding: gbk -*-
'''
	mb_common模块是处理mb数据的一些常用函数，主要用于挖掘mb数据组合成表格。并非用于创建和读取mb表。
'''

import os
import sys
from mb_table import *
from mb_manager import *
import tty_const
import timeit

# 保存所有的规则，格式dict{'规则名称':[是否生成过,生成函数,结果map]}
g_generates = {}
def insert_generate_rule( func, name ):
	if g_generates.has_key(name):
		print 'insert_generate_rule已经有同样的规则，覆盖',name
	g_generates[name] = [False, func, {}]

def get_generate_result(name):
	if g_generates.has_key(name):
		l = g_generates[name]
		if l[0]:
			return l[2]
		else:
			l[2] = l[1]()
			l[0] = True
			return l[2]
	else:
		print '找不到规则:', name
		return

# 将新元素插入到dict里，参数为（dict, key, list_or_value）。
# 无论输入如何，结果都是 键-单层列表 形式：{key:[value,value2...]}
def append_to_listdict(m, k, l):
	if (not m.has_key(k)):
		if is_list_type(l):
			m[k] = l
		else:
			m[k] = [l]
	else:
		if is_list_type(l):
			m[k] += l
		else:
			m[k].append(l)

# 和append_to_listdict 相同，但是会检查重复，让list里的内容无重复
def append_to_listdict_no_repeat(m, k, l):
	if (not m.has_key(k)):
		if is_list_type(l):
			m[k] = l
		else:
			m[k] = [l]
	else:
		if is_list_type(l):
			new_elements = [x for x in l if m[k].count(x)==0]
			m[k] += new_elements
		else:
			if m[k].count(l) == 0:
				m[k].append(l)



def test_mb():
	print '-------test begin--------'
	print g_mbs[item_list]
	print g_mbs[item_list][2]
	print g_mbs[item_list][2][1]

	print 'item_use %d' % item_use
	print g_mbs[item_use]
	print g_mbs[item_use][2]
	print g_mbs[item_use][2][7]

# 双层list的listdict，求最大list长度
def longest_list_in_dict(m):
	max_len = -1
	max_k = None
	for k in m:
		if len(m[k]) > max_len:
			max_len = len(m[k])
			max_k = k
	return max_len

def write_listdict_to_file(m, name):
	f = open(name, 'w')
	for k in sorted(m):
		f.write(str(k))
		f.write('\t')
		for i in range(0, len(m[k])):
			if i>0:
				f.write('*')
			f.write(str(m[k][i]))
		f.write('\n')
	f.close()

# 合并多个listdict，实际使用时m1和maps的key应该是同一类东西，m1和maps都是简单的listdict
# 合并结果结构为 {key:[[list1],[list2],...]}
def merge_dict(m1, *maps):
	m = m1
	# 把简单listdict变成nesting_listdict
	for k in m:
		m[k] = [m[k]]
	for m2 in maps:
		# 不管怎么样先加一排，保证列数正确
		for k in m:
			m[k].append([])
		num_cols = longest_list_in_dict(m)

		for k2 in m2:
			if k2 in m:
				m[k2][-1] = m2[k2]
			else:
				m[k2] = []
				for i in range(0,num_cols):
					m[k2].append([])
				m[k2][-1] = m2[k2]
	return m

# 把merge_dict的复杂结果，输出成表格
def write_nesting_listdict_to_file(m, file_name, table_head='', id_col=0):
	f = open(file_name, 'w')
	if table_head != '':
		f.write(table_head)
		f.write('\n')
	for k in sorted(m):
		for g in range(0, len(m[k])):
			l = m[k][g]
			if g == id_col:
				f.write(str(k))
				f.write('\t')
			for i in range(0, len(l)):
				if i>0:
					f.write('*')
				f.write(str(l[i]))
			f.write('\t')
		f.write('\n')
	f.close()

		
if __name__ == '__main__':
	#print timeit.Timer('mb_manager.create_index_mbs()','import mb_manager').timeit(1)
	test_mb()
	print '共有表格 %d 个' % len(g_mbs)

