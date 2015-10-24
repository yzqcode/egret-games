# -*- coding: gbk -*-

path_const = r'E:\WORK\F项目\SVN\cocostty\trunk\CocosTTY\Classes\tty_base\TTYDefine.h'
mb_root_path = r'E:\WORK\F项目\SVN\cocostty\branches\v1.0.5\CocosTTY\Resources\mb'

txt_path = r'E:\快盘\WORK\F项目\项目研发\first\design\表格制作\TXT'

import sys,os

if os.path.isfile('config.txt'):
	print '找到配置文件config.txt'
	f = file('config.txt','r')
	for line in f:
		exec line

