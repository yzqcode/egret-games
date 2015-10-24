var Logic = (function () {
    function Logic() {
    }
    var __egretProto__ = Logic.prototype;
    Logic.getChessType = function (chess_id, chess_color) {
        var chess_type = 3 /* CHE */;
        if (chess_color == 0 /* RED */) {
            chess_type = Logic.CHESS_INIT_POS[chess_id][2];
        }
        else {
            chess_type = Logic.CHESS_INIT_POS[chess_id - 16][2];
        }
        return chess_type;
    };
    Logic.getChessInitPos = function (chess_id) {
        var x = 0;
        var y = 0;
        if (chess_id < 16) {
            x = Logic.CHESS_INIT_POS[chess_id][0];
            y = Logic.CHESS_INIT_POS[chess_id][1];
        }
        else {
            x = 8 - Logic.CHESS_INIT_POS[chess_id - 16][0];
            y = 9 - Logic.CHESS_INIT_POS[chess_id - 16][1];
        }
        return [x, y];
    };
    Logic.getChessImgName = function (chess_type, chess_color) {
        var index = chess_type;
        if (chess_color == 1 /* BLACK */) {
            index += 7;
        }
        return Logic.CHESS_IMG_NAME_LIST[index];
    };
    Logic.randInt = function (a, b) {
        var n = Math.floor(b - a);
        return Math.floor(a + Math.random() * (n + 1));
    };
    Logic.CHESS_INIT_POS = [
        [0, 0, 3 /* CHE */],
        [1, 0, 4 /* MA */],
        [2, 0, 2 /* XIANG */],
        [3, 0, 1 /* SHI */],
        [4, 0, 0 /* JIANG */],
        [5, 0, 1 /* SHI */],
        [6, 0, 2 /* XIANG */],
        [7, 0, 4 /* MA */],
        [8, 0, 3 /* CHE */],
        [1, 2, 5 /* PAO */],
        [7, 2, 5 /* PAO */],
        [0, 3, 6 /* BING */],
        [2, 3, 6 /* BING */],
        [4, 3, 6 /* BING */],
        [6, 3, 6 /* BING */],
        [8, 3, 6 /* BING */],
    ];
    Logic.CHESS_IMG_NAME_LIST = [
        "rshuai_png",
        "rshi_png",
        "rxiang_png",
        "rche_png",
        "rma_png",
        "rpao_png",
        "rbing_png",
        "bjiang_png",
        "bshi_png",
        "bxiang_png",
        "bche_png",
        "bma_png",
        "bpao_png",
        "bzu_png"
    ];
    return Logic;
})();
Logic.prototype.__class__ = "Logic";
