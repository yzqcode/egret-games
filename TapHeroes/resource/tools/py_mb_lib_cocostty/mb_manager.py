# -*- coding: gbk -*-
import os
import sys
import re
from mb_table import *
from cfg import *
import traceback

# 给出mb类型和相对路径（必须是列表），返回完整路径（列表），无扩展名则默认mb
def get_table_full_path(path):
	root = mb_root_path
	if path.find('.') < 0:
		path += '.mb'
	path = os.path.join( root, path )
	if not os.path.isfile(path):
		print 'get_table_full_path 错误，文件不存在：', path
		return ''
	return path

class mb_mng:
	def __init__(self):
		self.index_list = None
		self.mb_map = {}
	def create( self, index_list ):
		for line in index_list:
			self.insert( str(line[0]), str(line[2]) )
		return True
	def insert(self, mb_name, path, mb_table=None):
		if (self.mb_map.has_key(mb_name)):
			print '已经有相同mb_name的表格了,%d' % mb_name
			return
		self.mb_map[mb_name] = [path, mb_table]
	def __getitem__(self, mb_name):
		if (not self.mb_map.has_key(mb_name)):
			print '++++++++++++++++++++++++++++++'
			traceback.print_exc()
			print '++++++++++++END+++++++++++++++'
			print '不存在的表格', mb_name
		else:
			temp = self.mb_map[mb_name]
			if temp[1]:
				return temp[1]
			else:
				path = temp[0]
				full_path = get_table_full_path( path )
				if full_path == '':
					print '创建表格错误1', mb_name
					return None
				t = create_mb( full_path, mb_name )
				if t == '':
					return ''
				if t == None:
					print '创建表格错误2', mb_name
					return None
				temp[1] = t
				return t
	def __iter__(self):
		for name in self.mb_map:
			yield self.__getitem__(name), name
	def __len__(self):
		return len(self.mb_map)

g_index_list = create_mb( get_table_full_path('index_list'), 'index_list' )
g_mbs = mb_mng()
g_mbs.create( g_index_list )

if __name__ == '__main__':
	import ParseTTYDefine
	exec ParseTTYDefine.python_code
	t = g_mbs['award_list']
	print t
	print t[405101101][0]

