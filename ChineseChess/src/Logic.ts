class Logic {
    public static CHESS_INIT_POS = [
        [0, 0, CHESS_TYPE.CHE], //车的位置(0,0)
        [1, 0, CHESS_TYPE.MA], //马的位置(1,0)
        [2, 0, CHESS_TYPE.XIANG], //相的位置(2,0)
        [3, 0, CHESS_TYPE.SHI], //士的位置(3,0)
        [4, 0, CHESS_TYPE.JIANG], //将的位置(4,0)
        [5, 0, CHESS_TYPE.SHI], //士的位置(5,0)
        [6, 0, CHESS_TYPE.XIANG], //相的位置(6,0)
        [7, 0, CHESS_TYPE.MA], //马的位置(7,0)
        [8, 0, CHESS_TYPE.CHE], //车的位置(8,0)
        [1, 2, CHESS_TYPE.PAO], //炮的位置(1,2)
        [7, 2, CHESS_TYPE.PAO], //炮的位置(7,2)
        [0, 3, CHESS_TYPE.BING], //兵的位置(0,3)
        [2, 3, CHESS_TYPE.BING], //兵的位置(2,3)
        [4, 3, CHESS_TYPE.BING], //兵的位置(4,3)
        [6, 3, CHESS_TYPE.BING], //兵的位置(6,3)
        [8, 3, CHESS_TYPE.BING], //兵的位置(8,3)
    ];
    public static CHESS_IMG_NAME_LIST = [
        "rshuai_png", //(红色)帅
        "rshi_png",   //(红色)士
        "rxiang_png", //(红色)相
        "rche_png",   //(红色)车
        "rma_png",    //(红色)马
        "rpao_png",   //(红色)炮
        "rbing_png",  //(红色)兵

        "bjiang_png", //(黑色)将
        "bshi_png",   //(黑色)士
        "bxiang_png", //(黑色)相
        "bche_png",   //(黑色)车
        "bma_png",    //(黑色)马
        "bpao_png",   //(黑色)炮
        "bzu_png"     //(黑色)卒
    ];

    public static getChessType(chess_id:number, chess_color:CHESS_COLOR) {
        var chess_type = CHESS_TYPE.CHE;
        if (chess_color == CHESS_COLOR.RED) {
            chess_type = Logic.CHESS_INIT_POS[chess_id][2];
        }
        else {
            chess_type = Logic.CHESS_INIT_POS[chess_id-16][2];
        }

        return chess_type;
    }

    public static getChessInitPos(chess_id:number) {
        var x = 0;
        var y = 0;
        if (chess_id < 16) {
            x = Logic.CHESS_INIT_POS[chess_id][0];
            y = Logic.CHESS_INIT_POS[chess_id][1];
        }
        else {
            x = 8 - Logic.CHESS_INIT_POS[chess_id-16][0];
            y = 9 - Logic.CHESS_INIT_POS[chess_id-16][1];
        }

        return [x, y];
    }

    public static getChessImgName(chess_type:CHESS_TYPE, chess_color:CHESS_COLOR) {
        var index:number = chess_type;
        if (chess_color == CHESS_COLOR.BLACK) {
            index += 7;
        }
        
        return Logic.CHESS_IMG_NAME_LIST[index];
    }

    public static randInt(a:number, b:number):number {
        var n = Math.floor(b-a)
        return Math.floor(a + Math.random() * ( n + 1));
    }
}


