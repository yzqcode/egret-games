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

# 覆盖目录
for c in copy_dirs:
    print "拷贝目录", c
    if os.path.isdir( join( dest_path, c[1] ) ):
        shutil.rmtree( join( dest_path, c[1] ) )
    shutil.copytree( join( source_path, c[0] ), join( dest_path, c[1] ) )

# 修改config.ts
config_ts_path = join( dest_path, "src/config.ts" )
print "写入", config_ts_path
f = file( config_ts_path, "w" )
f.write( "var resource_root = 'resource/'\nvar android=true\nvar sdk_login=false\nvar sdk_buy=false\nvar account_type=1\nvar no_any_pay=false" )
f.close()

