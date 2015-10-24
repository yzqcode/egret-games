import os,re

def replace( match ):
    return "egret.Rectangle(%s,%s,%s,%s)"%match.groups()

def convert_file( file_name ):
    s = open(file_name).read()
    # egret.gui.getscale9grid(".\{-},.\{-},.\{-},.\{-}")
    #print re.findall( r'egret\.gui\.getScale9Grid\(".*?,.*?,.*?,.*?"\)', s )
    #for c in re.finditer( r'egret\.gui\.getScale9Grid\("(.*?),(.*?),(.*?),(.*?)"\)', s ):
        #print c.group(), c.span(), c.groups()
    ss = re.sub( r'egret\.gui\.getScale9Grid\("(.*?),(.*?),(.*?),(.*?)"\)', replace, s )

    out = file( file_name, "w" )
    out.write( ss )
    out.close()

for c in os.walk( "bin-debug/src/skins" ):
    l = c[2]
    for file_name in l:
        if len(file_name) >= 4 and file_name[-3:] == ".js":
            path = c[0]
            convert_file( os.path.join( path, file_name ) )
convert_file( "release/html5/launcher/game-min.js" )

