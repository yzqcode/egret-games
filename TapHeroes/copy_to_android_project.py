#coding:utf-8
dest_path = r"D:\Labs\projects\TapHeroes"
source_path = r""

import os, sys, shutil
join = os.path.join

# 需要拷贝的目录
copy_dirs = [ [ "resource_Publish", "resource" ], 
    [ "src", "src"],
    [ "libs", "libs" ],
    [ "launcher", "launcher"] ]

copy_files = [ "egretProperties.json", "build_engine.bat", "build.bat", "fix.py", "build_.bat", "run.bat" ]

# 清空目标目录
if os.path.isdir( dest_path ):
    print "删除", dest_path
    shutil.rmtree( dest_path )
    if not os.path.isdir( dest_path ):
        os.mkdir( dest_path )

# 拷贝目录
for c in copy_dirs:
    print "拷贝目录", c
    shutil.copytree( join( source_path, c[0] ), join( dest_path, c[1] ) )

for s in copy_files:
    print "拷贝文件", s
    shutil.copy( join( source_path, s ), join( dest_path, s ) )

# 修改config.ts
config_ts_path = join( dest_path, "src/config.ts" )
print "写入", config_ts_path
f = file( config_ts_path, "w" )
f.write( "var resource_root = 'resource/'\nvar android=true\nvar sdk_login=true\nvar sdk_buy=true\nvar account_type=1\nvar no_any_pay=true" )
f.close()


