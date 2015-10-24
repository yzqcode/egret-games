import os, sys

def init():
    os.environ["path"] = ".\\png_lib;" + os.environ["path"]


def compress8( file_path ):
    print "compress8", file_path, "start"
    ret = os.system( '1>nul 2>&1 pngquant --speed 1 "%s"' % file_path )
    temp_path = os.path.splitext( file_path )[0] + "-fs8.png"
    os.system( 'move /y %s %s'% ( temp_path, file_path) )
    os.system( 'truepng -f0,5 -i0 -g0 -a1 -nc -md remove all -zc6 -zm9 -zs0,1 -quiet -force -y "%s"' % file_path )
    os.system( 'advdef -z -3 -q "%s"' % file_path )
    print "compress8", file_path, "finished"


def compress32( file_path ):
    print "compress32", file_path, "start"
    ret = os.system( 'pngout -c4 -f0 -s4 -k0 -q -y -force "%s"' % file_path )
    ret = os.system( 'truepng -f3 -i0 -g0 -a0 -nc -md remove all -l q=4 m=1 -zc1 -zm1 -zs3 -quiet -force -y "%s"' % file_path )
    ret = os.system( 'advdef -z -3 -q "%s"' % file_path )
    print "compress32", file_path, "finished"

    #pngout -c4 -f0 -s4 -k0 -q -y -force "%1"
    #truepng -f3 -i0 -g0 -a0 -nc -md remove all -l q=4 m=1 -zc1 -zm1 -zs3 -quiet -force -y "%1"
    #advdef -z -3 -q "%1"

def onVisit( arg, dirname, names ):
    i = 0
    while i < len(names):
        if names[i][0] == '.':
            names.pop(i)
            continue
        i += 1

    for name in names:
        full_name = os.path.join( dirname, name )
        print "onVisit", full_name
        if not os.path.isfile(full_name):
            continue
        if full_name[-4:] != '.png':
            continue
        if name[:7] == "beijing":
            compress8( full_name )
        else:
            compress32( full_name )


def search_compress():
    os.path.walk("../../resource_Publish", onVisit, None)
    #compress32( "../../resource_Publish/groups/preloadsheet.png" )

if __name__ == "__main__":
    init()
    search_compress()

