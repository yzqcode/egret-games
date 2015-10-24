#coding:gbk
import os, sys
import time

from py_mb_lib_cocostty.mb_table import create_mb
from py_mb_lib_cocostty.mb_manager import *
from py_mb_lib_cocostty.global_define import *

log_file_name = "结果" + time.strftime('%m-%d') + ".txt"
log_file = file(log_file_name, 'w')
log_file.write('-----------%s----------\n'%time.ctime())

output_path = os.path.join(mb_root_path, "../../src/mb.ts")
output_file = file( output_path, 'w' )

def error(s, *args):
	str_args = [str(arg) for arg in args]
	ss = '%s\t%s'%(s, '\t'.join(str_args))
	print '----', ss
	global log_file
	log_file.write(ss)
	log_file.write('\n')

fmt = 'class mb {\n\tpublic static data = %s\n\tpublic static index = %s\n}\n'
fmt_const = 'var %s = %s;'
source = ""

def convert():
    global source
    all_tables = {}
    all_indexes = {}
    all_consts = {}
    for table, name in g_mbs:
        if table == None:
            continue
        # ---- 表格第二行用于定义常数 ----
        for i in xrange( len(table.default_line) ):
            key = table.default_line[i]
            if len(key) < 2 or key[0].isdigit():
                error("常数定义错误", "表格", name, "列", i)
                continue
            key = name + "_" + key
            all_consts[key] = i
        # ---- end ----
        l_table = []
        m_index = {}
        all_tables[name] = l_table
        all_indexes[name] = m_index
        for i in xrange( len( table ) ):
            line = table.get_num_line( i )
            l_line = []
            for j in xrange(len( line )):
                l_line.append( line[j] )
            l_table.append( l_line )
            m_index[l_line[1]] = i
    source = fmt % (all_tables, all_indexes)
    consts = []
    for k in sorted(all_consts):
        const = fmt_const % (k, all_consts[k])
        consts.append( const )
    consts = "\n".join( consts )
    source += consts + "\n"


convert()
output_file.write( source )
output_file.close()
log_file.close()
print '运行完毕，按回车关闭窗口。错误信息在“结果(日期).txt”内'

