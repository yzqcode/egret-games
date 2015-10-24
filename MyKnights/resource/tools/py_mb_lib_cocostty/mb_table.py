# -*- coding: gbk -*-
r'''
mb_table模块是一个专门为读取mb表格设计的库。其最大特点是：能够像访问基本类型一样访问表格；在底层已经处理好类型，使用时无需指定类型。
mb表格，其实就是用Excel方式存储的txt表格。某些特殊符号仅保证在Excel编辑下正确。
使用方法：
1、创建mb表格：
	create_mb(paths)
	例子：g_index_list = create_mb(r'D:\mb\index_list.txt')
	
2、读取mb表格
	例子，D:\test.txt：
各列类型：1	0	1	2	4	5
默认行（当读取行错误时返回这行，为及时发现错误，本python表格库不支持默认行）
表头：	注释(1)	ID(0)	数据(2)	批量数据(4)	其他数据(5)
		试验	1	3.4	5*6*7*56	Ilike*py_mb*256
		试验	2	8.9	4*5*8*98	Ilike*py_mb*336	hello
	t = create_mb([r'D:\test.txt']);
	line = t[2]	#返回表格索引为2的行，line的类型为mb_line
	print line[0]	#str类型，打印结果：试验
	print line[1]	#int类型，打印结果：2
	print line[2]	#float类型，打印结果：8.9
	print line[3]	#list类型，打印结果：[4,5,8,98]
	print line[4]	#list类型，打印结果：['Ilike','py_mb','336']
	print line[5]	#这列已经超出定义的范围，自动沿用最后一列定义5，str，打印结果：hello
	line.index()	#返回l这行的索引ID，同line[1]，返回2

	迭代器：
		t = create_mb(r'D:\test.txt');
		for line in t:
			#用line循环访问每一行
		for i in range(0, len(t))
			#len(t)返回表格t的行数

3、数据类型：
		0:整数	4:整数数组
		1:字符串	5：字符串数组
		2:浮点数	6：浮点数数组
		3:变化类型（不指定类型）	7：不指定类型的数组
	使用时，直接返回python对应类型：int、str、float、var_type
	其中var_type可以使用toint()、tostr()等成员函数进一步转换。数组即为python list
	PS：为使用时避免失误，本库可能对返回类型做特殊处理，例如不允许对返回的str做切片操作。
'''

import os
import sys
import re
from global_define import *

class mb_line:
	def __init__(self):
		self.cells = []
		self.is_bad = False
	def set_line(self, cells):
		self.cells = cells
	def set_father(self, table):
		self.father = table
	def __getitem__(self,i):
		try:
			t = self.father.get_type(i)
			if (i>=0 and i<len(self.cells)) or (i<0 and i>=-len(self.cells)):
				ret = self.cells[i]
			else:
				ret = ''
			if t == ct_int:
				if ret == '':
					ret = 0
				else:
					ret = int(ret)
			elif t == ct_str:
				ret = solid_str(ret)
			elif t == ct_float:
				if ret == '':
					ret = 0.0
				else:
					ret = float(ret)
			elif t == ct_var:
				ret = var_type(ret)
			elif t == ct_arr_int:
				ret = ret.split('*')
				if ret==['']:
					return []
				ret = int_list(ret)
			elif t == ct_arr_str:
				if ret == '':
					ret = []
				else:
					ret = ret.split('*')
					ret = str_list(ret)
			elif t == ct_arr_float:
				ret = ret.split('*')
				ret = float_list(ret)
			elif t == ct_arr_var('*'):
				ret = ret.split('*')
				ret = var_list(ret)
			else:
				pass
			return ret
		except:
			print '读取某单元格错误，列：', i, '表：',self.father.name,
			print '类型%s, 值%s'%( self.father.get_type(i), self.cells[i] )
			return None
	def getstr(self, i):
		try:
			return self.cells[i]
		except:
			return ''
	def empty(self, i):
		try:
			return self.cells[i] == ''
		except:
			return True
	def getint(self, i):
		if self.cells[i] == '':
			return 0
		elif self.cells[i].isdigit():
			return int(self.cells[i])
		else:
			print 'getint 失败，返回0，值为：', self.cells[i]
			return 0
	def getfloat(self, i):
		if self.cells[i] == '':
			return 0.0
		elif self.cells[i].isdigit():
			return float(self.cells[i])
		else:
			print 'getfloat 失败，返回0.0，值为：', self.cells[i]
			return 0.0
	def __len__(self):	return len(self.father.types)
	def data(self):	return self.cells
	def index(self):
		return toint(self.cells[1])
	def __iter__(self):
		for cell in self.cells:
			yield cell



class mb_table:
	def __init__(self):
		self.types = []
		self.index_map = {}
		self.lines = []
		self.table_head = None
		self.default_line = []
	def set_name(self, name):
		self.name = name
	def get_type(self, col):
		if col >= len(self.types) or col<0:
			print self.name, self.types, col
			return -1
		return self.types[col]
	def set_data(self, cells):
		# 构建所有行
		for l in cells:
			line = mb_line()
			line.set_line(l)
			line.set_father(self)
			self.lines.append(line)
		# 建立索引
		for i in range(0, len(self.lines)):
			value = None
			try:
				value = int(self.lines[i][1])
			except (TypeError, ValueError), e:
				print '建立表格时索引错误，表：%s, 行：%d'%(self.name, i), '行内容：', cells[i]
				self.lines[i].is_bad = True
				continue
			if self.index_map.has_key( value ):
				print '建立表格时索引重复，表：%s, 行：%d，索引：%d'%(self.name, i,value)
				self.lines[i].is_bad = True
				continue
			self.index_map[ value ] = i
		return True
	def set_head(self, head_cells):
		try:
			self.types = [int(i) for i in head_cells[0]]
			self.default_line = head_cells[1]
			self.table_head = head_cells[2]
			return True
		except ValueError, e:
			return False
	def __getitem__(self, i):
		try:
			return self.lines[ self.index_map[i] ]
		except:
			import traceback
			print '获得行错误, 返回None', self.name, 'ID：',i, 'type',type(i), '存在索引？', self.index_map.has_key(i)
			traceback.print_exc()
			print '-----------END----------------------'
			return None
	def get_num_line(self, line_num):
		line = self.lines[line_num]
		if line.is_bad:
			print 'Get num line, bad line', self.name, line_num
		return self.lines[line_num]
	def __iter__(self):
		for line in self.lines:
			# 索引错误的行认为是不可用的
			if line.is_bad:
				continue
			yield line
	def __len__(self):
		return len( [l for l in self.lines if not l.is_bad] )
	#---------- 以下是添加、修改、保存表格相关函数----------------
	def get_max_id( self ):
		return max(self.index_map.keys())
	def check_index( self, line_data):
		if self.index_id > 0:
			try:
				line_id = int(line_data[self.index_id])
				if line_id < 0:
					raise Exception,''
			except:
				print '新添加的行索引不正确, 内容为：', line_data, '索引为', line_data[self.index_id]
				return False, -1
		return True, line_id
	#添加一行，内容为line_data
	def new_empty_line(self, line_id):
		# 以第一行数据的列数为准，生成一个只填了行索引的空白list
		new_line = [''] * len(self.lines[1])
		if self.index_id > 0:
			new_line[self.index_id] = str(line_id)
		return new_line
	def add_line(self, line_data):
		flag, index = self.check_index( line_data )
		if not flag:
			return False
		if index <= self.get_max_id():
			print '该行已经存在，add_line失败', index
			return False
		line = mb_line()
		line.set_index_col(self.index_id)
		line.set_line(line_data)
		line.set_father(self)
		self.lines.append(line)
		self.index_map[index] = len(self.lines)-1
		return True
	def get_new_id(self):
		max_id = self.get_max_id()
		new_id = max_id + 1
		return new_id
	def get_raw_line(self, line_id):
		return self.lines(self.index_map[line_id])[:]	#这里应该返回一个拷贝
	def change_line(self, line_data):
		flag, index = self.check_index( line_data )
		if not flag:
			return False
		if index > self.get_max_id():
			print self.get_max_id()
			print '该行不存在，change_line失败', index
			return False
		line = self.lines[self.index_map[index]]
		line.set_line(line_data)
		return True
	def set_line(self, line_data):
		flag, index = self.check_index( line_data )
		if not flag:
			return False
		if self.index_map.has_key( index ):
			return self.change_line(line_data)
		else:
			return self.add_line(line_data)
	def save_to_file(self, file_name = None ):
		if file_name == None:
			file_name = self.name
		s = ''
		if self.table_head != None:
			for cell in self.table_head:
				s += str(cell) + '\t'
			s = s[:-1]
			s += '\n'
		for line in self.lines:
			for cell in line:
				s += str(cell) + '\t'
			s = s[:-1]
			s += '\n'
		f = file(file_name, 'w')
		f.write(s)
		f.close()
	def try_get_line( self, i ):
		if not self.index_map.has_key( i ):
			return None
		return self.lines[ self.index_map[i] ]

def replace_newline( match ):
	s = match.groups()[0]
	return s.replace( '\n', '\\n' )

# 预处理表格，处理引号、换行，符合Excel保存TXT的规则
def preprocess_table(source):
	'''
	# 连续两个双引号实际是一个双引号，先替换掉以免和一个双引号混淆
	temp = re.sub(r'""', r'<quot>', source)

	# 单引号里面的换行，是真实换行。先找到所有引号括起来的数据，然后替换成r'\n'
	result = re.sub(r'"((?:[^"]|\n)+?)"', replace_newline, temp )
	# 还原引号
	result = re.sub(r'<quot>', r'"', result)
	'''
	# 原有处理方式不够好，采用新方式
	temp = re.sub('\x0D\x0A', '\x0D', source )
	return temp


def divide_string_to_cells(source):
	lines = source.split('\x0D')
	cells = []
	for line in lines:
		line = line.rstrip()
		cells.append(line.split('\t'))
	#print cells
	return cells

def read_files_to_string(path):
	source = ''
	head_text = ''			#表头要保存起来
	if not os.path.isfile(path):
		return "",""
	src_file = open(path, "rb")
	source = src_file.read()
	src_file.close()

	if source[0] == '\xff' or source[0] == '\xfe':
		source = source.decode('utf-16').encode('utf-8')
	#预处理并删除表头，由于多表格分拆的情况，会有多个表头，所以在这里做比较好
	source = preprocess_table(source)
	if not source:
		return '', ''
	#删除第一行表头
	count = 0
	pos = 0
	for i in range(0, len(source)):
		if source[i] == '\x0D':
			count += 1
			if count == 3:
				pos = i + 1
				break
	if count != 3:
		return '', ''
	head_text = source[:pos]
	source = source[pos:]
	if len(source) == 0:
		return '', head_text
	if source[-1] == '\x0D':
		source = source[:-1] 
	return source, head_text

def create_mb(path, name):
	source,head_text = read_files_to_string(path)
	if source == ''  and head_text != '':
		print '表格为空', path
		return ''
	if source == '' or head_text == '':
		print '读取文件错误', path
		return None
	#删除表头和预处理在read_files_to_string里面已经做了
	head_cells = divide_string_to_cells(head_text)
	cells = divide_string_to_cells(source)
	# index的结构是固定的
	table = mb_table()
	table.set_name(name)
	if not table.set_head(head_cells):
		print '表格创建时set_head失败', path
		return None
	if not table.set_data(cells):
		print '表格创建时set_data失败', path
		return None
	return table


if __name__ == "__main__":
	import ParseTTYDefine
	exec ParseTTYDefine.python_code
	t = create_mb(r'C:\code\cocostty\CocosTTY\Resources\mb\item\item_list.mb', 'item_list')
	print t
	l = t.get_num_line(1)
	print l[item_list_id]
	l = t.get_num_line(0)
	print l[item_list_id]



