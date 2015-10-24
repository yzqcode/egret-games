import os,re
import sys
import zipfile
import shutil

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

def find_game_zip():
    l = os.listdir( root )
    for fn in l:
        if fn[-4:] == ".zip" and fn.find( "game_code_" ) != -1:
            return fn
    return None
    
def extract_zip_temp():
    global root, zip_file
    zip_path = os.path.join( root, zip_file )
    temp_path = os.path.join( root, "temp" )
    f = zipfile.ZipFile( zip_path, 'r' )
    if os.path.isdir( temp_path ):
        shutil.rmtree( temp_path )
    os.mkdir( temp_path )
    f.extractall( temp_path )
    print "end extract", temp_path

def extract_zip( extract_path ):
    global root, zip_file
    zip_path = os.path.join( root, zip_file )
    f = zipfile.ZipFile( zip_path, 'r' )
    f.extractall( extract_path )
    print "end extract", extract_path

def redo_zip():
    global root, zip_file
    zip_path = os.path.join( root, zip_file )
    temp_path = os.path.join( root, "temp" )
    f = zipfile.ZipFile( zip_path, "w" )
    l = os.listdir( temp_path )
    for fn in l:
        if os.path.isdir( os.path.join( temp_path, fn ) ):
            ll = os.listdir( os.path.join( temp_path, fn ) )
            for fn2 in ll:
                f.write( os.path.join( temp_path, fn, fn2 ), os.path.join( fn, fn2 ) )
                #print "write2", os.path.join( temp_path, fn, fn2 )
        else:
            f.write( os.path.join( temp_path, fn ), fn )
            #print "write1", fn
    f.close()
    print "zip finished"

def rename_zip():
    src = os.path.join( root, zip_file )
    dest = os.path.join( root, "game_code_test.zip" )
    shutil.move( src, dest )
    

root = ""
zip_file = None
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print "need argument"
        exit(0)
    root = os.path.join( sys.argv[1], "proj.android/assets/egret-game" )
    zip_file = find_game_zip()
    if zip_file == None:
        print "can't find zip file"
        exit(0)
    if sys.argv[2] == "zip":
        extract_zip_temp()
        convert_file( os.path.join( root, "temp/launcher", "game-min-native.js" ) )
        redo_zip()
        shutil.rmtree( os.path.join( root, "temp" ) )
        #rename_zip()
    elif sys.argv[2] == "normal":
        extract_zip( root )
        convert_file( os.path.join( root, "launcher", "game-min-native.js" ) )
        os.remove( os.path.join( root, zip_file ) )



