//棋子的类型:将、士、相、车、马、炮、兵
var CHESS_TYPE;
(function (CHESS_TYPE) {
    CHESS_TYPE[CHESS_TYPE["JIANG"] = 0] = "JIANG";
    CHESS_TYPE[CHESS_TYPE["SHI"] = 1] = "SHI";
    CHESS_TYPE[CHESS_TYPE["XIANG"] = 2] = "XIANG";
    CHESS_TYPE[CHESS_TYPE["CHE"] = 3] = "CHE";
    CHESS_TYPE[CHESS_TYPE["MA"] = 4] = "MA";
    CHESS_TYPE[CHESS_TYPE["PAO"] = 5] = "PAO";
    CHESS_TYPE[CHESS_TYPE["BING"] = 6] = "BING";
})(CHESS_TYPE || (CHESS_TYPE = {}));
var CHESS_COLOR;
(function (CHESS_COLOR) {
    CHESS_COLOR[CHESS_COLOR["RED"] = 0] = "RED";
    CHESS_COLOR[CHESS_COLOR["BLACK"] = 1] = "BLACK";
})(CHESS_COLOR || (CHESS_COLOR = {}));
var Step = (function () {
    function Step() {
    }
    var __egretProto__ = Step.prototype;
    return Step;
})();
Step.prototype.__class__ = "Step";
var Chess = (function () {
    function Chess() {
        this.parent_layer = null;
        this.chess_type = 0;
        this.chess_id = 0; //棋子的ID  0~31(一共有32个棋子)
        this.chess_color = 0 /* RED */;
        this.is_dead = false;
        this.x = 0;
        this.y = 0;
        this.chess_img_name = "";
        this.chess_img = null;
    }
    var __egretProto__ = Chess.prototype;
    __egretProto__.initData = function (parent_layer, chess_id) {
        this.parent_layer = parent_layer;
        this.chess_id = chess_id;
        //当棋子的id小于16时,棋子是红色的
        this.chess_color = 0 /* RED */;
        if (this.chess_id >= 16) {
            this.chess_color = 1 /* BLACK */;
        }
        this.chess_type = Logic.getChessType(this.chess_id, this.chess_color);
        this.chess_img_name = Logic.getChessImgName(this.chess_type, this.chess_color);
        this.is_dead = false;
        var start_pos = Logic.getChessInitPos(this.chess_id);
        this.x = start_pos[0];
        this.y = start_pos[1];
        this.chess_img = new egret.Bitmap();
        this.chess_img.texture = RES.getRes(this.chess_img_name);
        this.chess_img.x = Math.random() * this.parent_layer.WIDTH;
        this.chess_img.y = Math.random() * this.parent_layer.HEIGHT;
        this.chess_img.visible = false;
        this.chess_img.touchEnabled = true;
        this.chess_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchChess, this);
        this.parent_layer.addChild(this.chess_img);
    };
    __egretProto__.resetPos = function () {
        var start_pos = Logic.getChessInitPos(this.chess_id);
        this.x = start_pos[0];
        this.y = start_pos[1];
    };
    __egretProto__.onTouchChess = function (evt) {
        this.parent_layer.onTouchChess(this.chess_id);
    };
    return Chess;
})();
Chess.prototype.__class__ = "Chess";
var GameLayer = (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        _super.call(this);
        this.WIDTH = 800;
        this.HEIGHT = 480;
        this.PLATE_OFFSET = [20, 10];
        this.CHESS_OFFSET = [42, 420];
        this.CHESS_DIAMETER = 46;
        this.chess_turn = 0 /* RED */;
        this.select_chess_id = -1;
        this.select_frame_image = null;
        this.game_is_running = false;
        this.steps_list = [];
        this.chess_list = [];
        this.chess_index_bottom = 0;
        this.chess_index_top = 0;
        this.background_music = null;
    }
    var __egretProto__ = GameLayer.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.main_director = main_director;
        // Add self layer to stage
        this.main_director.stage.addChildAt(this, 0);
        // Add UIStage.
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 1);
        this.main_view = new UIMainView();
        this.main_view.show(this, main_director);
        this.initGameLayer();
        this.initAllChess();
    };
    __egretProto__.removeFromMainLayer = function () {
        this.main_director.stage.removeChild(this);
        this.main_director.stage.removeChild(this.guiLayer);
    };
    __egretProto__.initGameLayer = function () {
        var background = new egret.Bitmap();
        background.texture = RES.getRes("floor_jpg");
        this.addChild(background);
        background.x = 0;
        background.y = 0;
        var plate = new egret.Bitmap();
        plate.texture = RES.getRes("background_png");
        this.addChild(plate);
        plate.x = this.PLATE_OFFSET[0];
        plate.y = this.PLATE_OFFSET[1];
        plate.touchEnabled = true;
        plate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchPlate, this);
        this.background_music = RES.getRes("main_mp3");
        this.background_music.play(true);
    };
    __egretProto__.initAllChess = function () {
        this.chess_list = [];
        for (var i = 0; i < 32; i++) {
            var chess = new Chess();
            chess.initData(this, i);
            this.chess_list.push(chess);
        }
        this.chess_index_bottom = this.getChildIndex(this.chess_list[0].chess_img);
        this.chess_index_top = this.getChildIndex(this.chess_list[this.chess_list.length - 1].chess_img);
        this.select_frame_image = new egret.Bitmap();
        this.select_frame_image.texture = RES.getRes("selected_png");
        this.select_frame_image.x = 0;
        this.select_frame_image.y = 0;
        this.select_frame_image.visible = false;
        this.addChild(this.select_frame_image);
    };
    __egretProto__.newGame = function () {
        this.steps_list = [];
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            chess.chess_img.x = Math.random() * this.WIDTH;
            chess.chess_img.y = Math.random() * this.HEIGHT;
            chess.chess_img.visible = false;
            chess.is_dead = false;
            chess.resetPos();
        }
        this.chess_turn = 0 /* RED */;
    };
    __egretProto__.startGame = function () {
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            chess.chess_img.visible = true;
            var end_pos = this.getChessPos(chess.x, chess.y);
            var tw = egret.Tween.get(chess.chess_img);
            tw.to({ x: end_pos[0], y: end_pos[1] }, 500, egret.Ease.sineInOut);
        }
        this.game_is_running = true;
    };
    __egretProto__.backGame = function () {
        if (this.steps_list.length <= 0) {
            return;
        }
        var step = this.steps_list.pop();
        this.chess_list[step.move_id].x = step.start_x;
        this.chess_list[step.move_id].y = step.start_y;
        var pos = this.getChessPos(step.start_x, step.start_y);
        this.chess_list[step.move_id].chess_img.x = pos[0];
        this.chess_list[step.move_id].chess_img.y = pos[1];
        if (step.kill_id != -1) {
            this.chess_list[step.kill_id].is_dead = false;
            this.chess_list[step.kill_id].chess_img.visible = true;
        }
        if (this.chess_turn == 0 /* RED */) {
            this.chess_turn = 1 /* BLACK */;
        }
        else {
            this.chess_turn = 0 /* RED */;
        }
    };
    __egretProto__.closeMusic = function () {
        this.background_music.pause();
    };
    __egretProto__.openMusic = function () {
        this.background_music.play(true);
    };
    //将棋盘坐标转换成窗口坐标
    __egretProto__.getChessPos = function (x, y) {
        var new_x = x * this.CHESS_DIAMETER + this.CHESS_OFFSET[0];
        var new_y = -y * this.CHESS_DIAMETER + this.CHESS_OFFSET[1];
        return [new_x, new_y];
    };
    __egretProto__.getClickPos = function (stageX, stageY) {
        var x = stageX - this.CHESS_OFFSET[0];
        var y = -stageY + this.CHESS_OFFSET[1] + this.CHESS_DIAMETER;
        if (x < 0 || y < 0) {
            return [-1, -1];
        }
        x = Math.floor(x / this.CHESS_DIAMETER);
        y = Math.floor(y / this.CHESS_DIAMETER);
        if (x > 8 || y > 9) {
            return [-1, -1];
        }
        return [x, y];
    };
    //通过坐标的下标获取棋子的ID
    //如果坐标上没有棋子,返回-1
    __egretProto__.getChessIdByPlatePos = function (x, y) {
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            if (chess.x == x && chess.y == y && chess.is_dead == false) {
                return chess.chess_id;
            }
        }
        return -1;
    };
    __egretProto__.onTouchPlate = function (evt) {
        if (this.game_is_running == false) {
            return;
        }
        if (this.select_chess_id == -1) {
            return;
        }
        var x = evt.stageX;
        var y = evt.stageY;
        var touch_pos = this.getClickPos(x, y);
        //console.log(touch_pos);
        if (touch_pos[0] < 0) {
            return;
        }
        this.moveChess(this.select_chess_id, -1, touch_pos[0], touch_pos[1]);
    };
    __egretProto__.setSelectChessId = function (chess_id) {
        var chess = this.chess_list[chess_id];
        if (chess == null) {
            return;
        }
        if (chess.chess_color != this.chess_turn) {
            return;
        }
        this.select_chess_id = chess_id;
        this.select_frame_image.visible = true;
        this.select_frame_image.x = chess.chess_img.x;
        this.select_frame_image.y = chess.chess_img.y;
    };
    __egretProto__.onTouchChess = function (chess_id) {
        if (this.game_is_running == false) {
            return;
        }
        if (this.select_chess_id == -1) {
            this.setSelectChessId(chess_id);
        }
        else {
            var chess = this.chess_list[chess_id];
            this.moveChess(this.select_chess_id, chess_id, chess.x, chess.y);
        }
    };
    //移动棋子
    //第一个参数：移动的棋子的id
    //第二个参数：通过触摸点的位置判断触摸点上是否有棋子
    //第三个参数：触摸点的x坐标
    //第四个参数：触摸点的y坐标
    __egretProto__.moveChess = function (move_id, kill_id, x, y) {
        var chess1 = this.chess_list[move_id];
        var chess2 = this.chess_list[kill_id];
        if (kill_id != -1 && chess1.chess_color == chess2.chess_color) {
            this.setSelectChessId(kill_id);
            return;
        }
        var bCanMove = this.canMove(move_id, kill_id, x, y);
        if (bCanMove == false) {
            return;
        }
        //走棋之前记录棋子的信息
        var step = new Step();
        step.move_id = move_id;
        step.kill_id = kill_id;
        step.start_x = chess1.x;
        step.start_y = chess1.y;
        step.end_x = x;
        step.end_y = y;
        this.steps_list.push(step);
        chess1.x = x;
        chess1.y = y;
        this.setChildIndex(chess1.chess_img, this.chess_index_top);
        var end_pos = this.getChessPos(x, y);
        var tw = egret.Tween.get(chess1.chess_img);
        tw.to({ x: end_pos[0], y: end_pos[1] }, 500, egret.Ease.sineInOut).call(this.endMoveAnim, this, [kill_id]);
    };
    __egretProto__.endMoveAnim = function (kill_id) {
        if (kill_id != -1) {
            var killed_chess = this.chess_list[kill_id];
            killed_chess.is_dead = true;
            killed_chess.chess_img.visible = false;
            if (killed_chess.chess_type == 0 /* JIANG */) {
                // Game over!
                this.game_is_running = false;
                if (this.chess_turn == 0 /* RED */) {
                    // Win
                    this.main_view.showWinImg();
                }
                else {
                    // Lose
                    this.main_view.showLoseImg();
                }
            }
        }
        this.select_chess_id = -1;
        this.select_frame_image.visible = false;
        if (this.chess_turn == 0 /* RED */) {
            this.chess_turn = 1 /* BLACK */;
        }
        else {
            this.chess_turn = 0 /* RED */;
        }
    };
    __egretProto__.canMove = function (move_id, kill_id, x, y) {
        var chess = this.chess_list[move_id];
        switch (chess.chess_type) {
            case 0 /* JIANG */:
                {
                    return this.canMoveJiang(move_id, kill_id, x, y);
                }
            case 1 /* SHI */:
                {
                    return this.canMoveShi(move_id, kill_id, x, y);
                }
            case 2 /* XIANG */:
                {
                    return this.canMoveXiang(move_id, kill_id, x, y);
                }
            case 3 /* CHE */:
                {
                    return this.canMoveChe(move_id, kill_id, x, y);
                }
            case 4 /* MA */:
                {
                    return this.canMoveMa(move_id, kill_id, x, y);
                }
            case 5 /* PAO */:
                {
                    return this.canMovePao(move_id, kill_id, x, y);
                }
            case 6 /* BING */:
                {
                    return this.canMoveBing(move_id, kill_id, x, y);
                }
        }
        return false;
    };
    __egretProto__.canMoveJiang = function (move_id, kill_id, x, y) {
        var chess_to_kill = this.chess_list[kill_id];
        //将的走棋规则：
        //1、一次走一格
        //2、不能出九宫格
        //将的对杀
        if (chess_to_kill != null && chess_to_kill.chess_type == 0 /* JIANG */) {
            return this.canMoveChe(move_id, kill_id, x, y);
        }
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        var xoff = Math.abs(xo - x);
        var yoff = Math.abs(yo - y);
        if (xoff + yoff != 1) {
            return false;
        }
        //判断将是否出了九宫
        //红色的将和黑色的将的x坐标的范围都是3<=x<=5
        if (x < 3 || x > 5) {
            return false;
        }
        if (chess.chess_color == 0 /* RED */) {
            if (y < 0 || y > 2) {
                return false;
            }
        }
        else {
            if (y > 9 || y < 7) {
                return false;
            }
        }
        return true;
    };
    __egretProto__.canMoveShi = function (move_id, kill_id, x, y) {
        //士的走棋规则：
        //1、一次走一格
        //2、不能出九宫格
        //3、斜着走
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        var xoff = Math.abs(xo - x);
        var yoff = Math.abs(yo - y);
        if (xoff != 1 || yoff != 1) {
            return false;
        }
        //判断将是否出了九宫
        //红色的将和黑色的士的x坐标的范围都是3<=x<=5
        if (x < 3 || x > 5) {
            return false;
        }
        if (chess.chess_color == 0 /* RED */) {
            if (y < 0 || y > 2) {
                return false;
            }
        }
        else {
            if (y > 9 || y < 7) {
                return false;
            }
        }
        return true;
    };
    __egretProto__.canMoveXiang = function (move_id, kill_id, x, y) {
        //相的走棋规则：
        //每走一次x移动2格,y移动2格
        //不能过河
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        var xoff = Math.abs(xo - x);
        var yoff = Math.abs(yo - y);
        if (xoff != 2 || yoff != 2) {
            return false;
        }
        //计算两个坐标的中点坐标
        var xm = (xo + x) / 2;
        var ym = (yo + y) / 2;
        //得到(xm,ym)上的棋子
        var chess_id = this.getChessIdByPlatePos(xm, ym);
        if (chess_id != -1) {
            //当(xm,ym)上有棋子的时候, 不能走相
            return false;
        }
        //限制相不能过河
        //如果玩家的棋子是红棋
        if (chess.chess_color == 0 /* RED */) {
            if (y > 4) {
                return false;
            }
        }
        else {
            if (y < 5) {
                return false;
            }
        }
        return true;
    };
    __egretProto__.canMoveChe = function (move_id, kill_id, x, y) {
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        //当两点之间有棋子的时候车不能走
        if (this.getChessCount(xo, yo, x, y) != 0) {
            return false;
        }
        return true;
    };
    __egretProto__.canMoveMa = function (move_id, kill_id, x, y) {
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        //获得马走的格数
        //(x,y)表示马走到的位置
        //马有两种情况：
        //第一种情况：马先向前或向后走1步，再向左或向右走2步
        //第二种情况：马先向左或向右走1步，再向前或向后走2步
        var xoff = Math.abs(xo - x);
        var yoff = Math.abs(yo - y);
        var d = xoff * 10 + yoff;
        if (d != 12 && d != 21) {
            return false;
        }
        //记录绑脚点坐标
        var xm;
        var ym;
        if (d == 12) {
            xm = xo;
            ym = (yo + y) / 2;
        }
        else {
            xm = (xo + x) / 2;
            ym = yo;
        }
        //得到(xm,ym)上的棋子
        var chess_id = this.getChessIdByPlatePos(xm, ym);
        if (chess_id != -1) {
            //当(xm,ym)上有棋子的时候, 不能走马
            return false;
        }
        return true;
    };
    __egretProto__.canMovePao = function (move_id, kill_id, x, y) {
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        //当触摸点上有一个棋子
        //而且两点之间只有一个棋子的时候
        //炮吃掉触摸点上的棋子
        if (kill_id != -1 && this.getChessCount(xo, yo, x, y) == 1) {
            return true;
        }
        if (kill_id == -1 && this.getChessCount(xo, yo, x, y) == 0) {
            return true;
        }
        return false;
    };
    __egretProto__.canMoveBing = function (move_id, kill_id, x, y) {
        //兵的走棋规则：
        //1、一次走一格
        //2、前进一格后不能后退
        //3、过河后才可以左右移动
        var chess = this.chess_list[move_id];
        var xo = chess.x;
        var yo = chess.y;
        var xoff = Math.abs(xo - x);
        var yoff = Math.abs(yo - y);
        if (xoff + yoff != 1) {
            return false;
        }
        //如果玩家的棋子是红棋
        if (chess.chess_color == 0 /* RED */) {
            if (y < yo) {
                //限制红色的兵不能后退
                return false;
            }
            if (yo <= 4 && xoff == 1) {
                //红色的兵没有过河不能左右移动
                return false;
            }
        }
        else {
            if (y > yo) {
                //限制黑色的兵不能后退
                return false;
            }
            if (yo >= 5 && xoff == 1) {
                //黑色的兵没有过河不能左右移动
                return false;
            }
        }
        return true;
    };
    ///计算(xo,yo)和(x,y)之间的棋子数
    //如果棋子数为-1,表示(xo,yo)和(x,y)不在一条直线上
    __egretProto__.getChessCount = function (xo, yo, x, y) {
        var ret = 0; //记录两点之间的棋子的个数
        //(xo,yo)和(x,y)不在同一条直线上
        if (xo != x && yo != y) {
            return -1;
        }
        //(xo,yo)和(x,y)在同一点上
        if (xo == x && yo == y) {
            return -1;
        }
        //两点在同一条竖线上
        if (xo == x) {
            var min = yo;
            var max = y;
            if (yo > y) {
                min = y;
                max = yo;
            }
            for (var i = min + 1; i < max; i++) {
                if (this.getChessIdByPlatePos(x, i) != -1) {
                    ret++;
                }
            }
        }
        else {
            var min = xo;
            var max = x;
            if (xo > x) {
                min = x;
                max = xo;
            }
            for (var i = min + 1; i < max; i++) {
                if (this.getChessIdByPlatePos(i, y) != -1) {
                    ret++;
                }
            }
        }
        return ret;
    };
    return GameLayer;
})(egret.DisplayObjectContainer);
GameLayer.prototype.__class__ = "GameLayer";
