#1/usr/bin/env python
#!-*-coding:utf8-*-
import json
import shutil
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import codecs

file_name = 'resource_Publish/resource.json'

class JsonFormatter:#{{{
    def __init__(self,intend=4,name=""):
        self.name=name
        self.intend=intend
        self.stack=[]
        self.obj=None
        self.source=self.get_source(name)
        self.prepare()
 
    @staticmethod
    def json_str(s):
        return '"'+s+'"'
 
    @staticmethod
    def get_source(name):
        with open(name,'r') as f:
            return ''.join(f.read().split())
 
    def prepare(self):
        try:
            self.obj=eval(self.source)
        except:
            raise Exception('Invalid json string!')
 
    def line_intend(self,level=0):
        return '\n'+' '*self.intend*level
 
    def parse_dict(self,obj=None,intend_level=0):
        self.stack.append(self.line_intend(intend_level)+'{')
        intend_level+=1
        for key,value in obj.items():
            key=self.json_str(str(key))
            self.stack.append(self.line_intend(intend_level)+key+':')
            self.parse(value,intend_level)
            self.stack.append(',')
        self.stack.pop()
        self.stack.append(self.line_intend(intend_level-1)+'}')
 
    def parse_list(self,obj=None,intend_level=0):
        self.stack.append(self.line_intend(intend_level)+'[')
        intend_level+=1
        for item in obj:
            self.parse(item,intend_level)
            self.stack.append(',')
        self.stack.pop()
        self.stack.append(self.line_intend(intend_level-1)+']')
 
    def parse(self,obj,intend_level=0):
        if obj is None:
            self.stack.append('null')
        elif obj is True:
            self.stack.append('true')
        elif obj is False:
            self.stack.append('false')
        elif isinstance(obj,(int,long,float)):
            self.stack.append(str(obj))
        elif isinstance(obj,str):
            self.stack.append(self.json_str(obj))
        elif isinstance(obj,(list,tuple)):
            self.parse_list(obj,intend_level)
        elif isinstance(obj,dict):
            self.parse_dict(obj,intend_level)
        else:
            raise Exception('Invalid json type %s!' % obj)
 
    def render(self):
        self.parse(self.obj,0)
        res_file=self.name
        res=''.join(self.stack)
        with open(res_file,'w') as f:
            f.write(res)
 #}}}

def process():
    if len(sys.argv) != 3:
        print 'Please enter the uri and process type!'
        exit(0)

    uri = sys.argv[1]
    if uri == '0':
        uri = 'http://oss.aliyuncs.com/tapheroes/resource_Publish/'
    uri_len = len(uri)
    process_type = sys.argv[2].strip()

    rf = codecs.open(file_name, 'r', 'utf-8')
    jresource = json.load(rf)
    rf.close()
    if process_type == '1':
        for r in jresource['resources']:
            if r['url'][:uri_len] == uri:
                print u"已经添加前缀完了"
                return 
            r['url'] = uri + r['url']
    elif process_type == '2':
        for r in jresource['resources']:
            if r['url'][:uri_len] == uri:
                r['url'] = r['url'][uri_len:]
            else:
                print u"前缀为添加过"
                return 
    else:
        print u'错误的处理类型!!! 请输入1或者2'

    shutil.copyfile(file_name, file_name+'.bk')
    wf = codecs.open(file_name, 'w', 'utf-8')
    wf.write(json.dumps(jresource).decode('unicode-escape').encode('utf-8'))
    wf.close()

if __name__=="__main__":
    process()
    jf=JsonFormatter(name=file_name)
    jf.render()

