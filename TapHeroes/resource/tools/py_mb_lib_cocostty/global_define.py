# -*- coding: gbk -*-

error_str = '_error'

#cell types:
ct_int = 0
ct_str = 1
ct_float = 2
ct_var = 3
ct_arr_int = 4
ct_arr_str = 5
ct_arr_float = 6
ct_arr_var = 7

# 不能使用[]操作符的str，防止误操作
class solid_str(str):
    def __getitem__(self, i):
    	raise Exception,"不应对solid_str对象使用[]操作符"
    def __getslice__(self, a, b):
    	raise Exception,"不应对solid_str对象使用[]操作符"
    def __repr__(self):
        s = str(self.decode("utf-8").encode("utf-8"))
        if self.find('"') == 0 and self.rfind('"') == len(self)-1:
            return s
    	return '"' + s + '"'

# 对mb表格的不定类型特别处理一下，主要目的是防止误用
class var_type:
    def __init__(self, v):
    	self.v = v
    def toint(self):
    	if self.v=='':
    		return 0
    	else:
    		try:
    			return int(self.v)
    		except:
    			print '变体 toint()错误，返回0，值为：', self.v
    			return 0
    def tostr(self):
    	try:
    		return str(self.v)
    	except:
    		print '变体 tostr()错误，返回""，值为：', self.v
    		return ""
    def tofloat(self):
    	if self.v=='':
    		return 0.0
    	else:
    		try:
    			return float(self.v)
    		except:
    			print '变体 tofloat()错误，返回0.0，值为：', self.v
    			return 0.0

def toint(v):
    if v=='':
    	return 0
    else:
    	try:
    		return int(v)
    	except:
    		return 0
def tostr(v):
    try:
    	return solid_str(v)
    except:
    	return 0
def tofloat(v):
    if v=='':
    	return 0.0
    else:
    	try:
    		return float(v)
    	except:
    		return 0.0


# 四种不同类型的list
class int_list(list):
    def __getitem__(self, i):
    	if i>=self.__len__() or i<-self.__len__():
    		print 'int_list下标越界，原长度：',self.__len__(),'下标：',i
    		return 0
    	return toint(list.__getitem__(self, i))
    def __getslice__(self, a, b):
    	return int_list(list.__getslice__(self, a, b))
    def __iter__(self):
    	for i in range(0, self.__len__()):
    		yield toint(list.__getitem__(self,i))
    def __repr__(self):
        return "[" + ", ".join( [str(i) for i in self] ) + "]"
        

class str_list(list):
    def __getitem__(self, i):
    	if i>=self.__len__() or i<-self.__len__():
    		print 'str_list下标越界，原长度：',self.__len__(),'下标：',i
    		return solid_str('')
    	return tostr(list.__getitem__(self, i))
    def __getslice__(self, a, b):
    	return str_list(list.__getslice__(self, a, b))
    def __iter__(self):
    	for i in range(0, self.__len__()):
    		yield tostr(list.__getitem__(self,i))

class float_list(list):
    def __getitem__(self, i):
    	if i>=self.__len__() or i<-self.__len__():
    		print 'float_list下标越界，原长度：',self.__len__(),'下标：',i
    		return 0.0
    	return tofloat(list.__getitem__(self, i))
    def __getslice__(self, a, b):
    	return float_list(list.__getslice__(self, a, b))
    def __iter__(self):
    	for i in range(0, self.__len__()):
    		yield tofloat(list.__getitem__(self,i))
    def __repr__(self):
        return "[" + ", ".join( [str(i) for i in self] ) + "]"

class var_list(list):
    def __getitem__(self, i):
    	if i>=self.__len__() or i<-self.__len__():
    		print 'var_list下标越界，原长度：',self.__len__(),'下标：',i
    		return 0.0
    	return var_type(list.__getitem__(self, i))
    def __getslice__(self, a, b):
    	return var_list(list.__getslice__(self, a, b))
    def __iter__(self):
    	for i in range(0, self.__len__()):
    		yield var_type(list.__getitem__(self,i))

def is_list_type(l):
    t = type(l)
    if t==type([]) or t==type(var_list([])) or t==type(int_list([])) or t==type(str_list([])) or t==type(float_list([])):
    	return True
    return False

