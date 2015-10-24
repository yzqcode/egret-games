//棋子的类型:将、士、相、车、马、炮、兵
enum CHESS_TYPE
{
    JIANG = 0,
    SHI,
    XIANG,
    CHE,
    MA,
    PAO,
    BING
}

enum CHESS_COLOR
{
    RED = 0,
    BLACK,
}

class Step {
    public move_id:number;//需要移动的棋子的id
    public kill_id:number;//通过触摸点的位置判断触摸点上是否有棋子
    public start_x:number;//棋子当前的位置的x坐标
    public start_y:number;//棋子当前的位置的y坐标
    public end_x:number;//棋子移动后的位置的x坐标
    public end_y:number;//棋子移动后的位置的y坐标
}

class Chess {
    public parent_layer:GameLayer = null;
    public chess_type:CHESS_TYPE = 0;
    public chess_id:number = 0; //棋子的ID  0~31(一共有32个棋子)
    public chess_color:CHESS_COLOR = CHESS_COLOR.RED;
    public is_dead:boolean = false;

    public x:number = 0;
    public y:number = 0;

    public chess_img_name:string = "";
    public chess_img:egret.Bitmap = null;

    public initData(parent_layer:GameLayer, chess_id:number) {
        this.parent_layer = parent_layer;
        this.chess_id = chess_id;
        
        //当棋子的id小于16时,棋子是红色的
        this.chess_color = CHESS_COLOR.RED;
        if (this.chess_id >= 16) {
            this.chess_color = CHESS_COLOR.BLACK;
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
    }

    public resetPos() {
        var start_pos = Logic.getChessInitPos(this.chess_id);
        this.x = start_pos[0];
        this.y = start_pos[1];
    }

    private onTouchChess( evt ) {
        this.parent_layer.onTouchChess(this.chess_id);
    }
}

class GameLayer extends egret.DisplayObjectContainer {

    public guiLayer:egret.gui.UIStage;
    public main_director:Main;
    public main_view:UIMainView;

    public WIDTH:number = 800;
    public HEIGHT:number = 480;
    public PLATE_OFFSET = [20, 10];
    public CHESS_OFFSET = [42, 420];
    public CHESS_DIAMETER = 46;

    public chess_turn:CHESS_COLOR = CHESS_COLOR.RED;

    public select_chess_id:number = -1;
    public select_frame_image:egret.Bitmap = null;
    public game_is_running:boolean = false;

    public steps_list = [];
    public chess_list = [];

    private chess_index_bottom:number = 0;
    private chess_index_top:number = 0;

    private background_music:egret.Sound = null;

    public constructor() {
        super();
    }

    public showOnMainLayer(main_director:Main):void {
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
    }
    public removeFromMainLayer():void {
        this.main_director.stage.removeChild(this);
        this.main_director.stage.removeChild(this.guiLayer);
    }

    private initGameLayer() {
        var background = new egret.Bitmap()
        background.texture = RES.getRes("floor_jpg");
        this.addChild(background);
        background.x = 0;
        background.y = 0;

        var plate = new egret.Bitmap()
        plate.texture = RES.getRes("background_png");
        this.addChild(plate);
        plate.x = this.PLATE_OFFSET[0];
        plate.y = this.PLATE_OFFSET[1];

        plate.touchEnabled = true;
        plate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchPlate, this);

        this.background_music = RES.getRes("main_mp3");
        this.background_music.play(true);
    }
    private initAllChess() {
        this.chess_list = [];

        for (var i = 0; i < 32; i++) {
            var chess = new Chess();
            chess.initData(this, i);

            this.chess_list.push(chess);
        }

        this.chess_index_bottom = this.getChildIndex(this.chess_list[0].chess_img);
        this.chess_index_top = this.getChildIndex(this.chess_list[this.chess_list.length-1].chess_img);

        this.select_frame_image = new egret.Bitmap();
        this.select_frame_image.texture = RES.getRes("selected_png");
        this.select_frame_image.x = 0;
        this.select_frame_image.y = 0;
        this.select_frame_image.visible = false;
        this.addChild(this.select_frame_image);
    }

    public newGame() {
        this.steps_list = [];
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            chess.chess_img.x = Math.random() * this.WIDTH;
            chess.chess_img.y = Math.random() * this.HEIGHT;
            chess.chess_img.visible = false;
            chess.is_dead = false;

            chess.resetPos();
        }

        this.chess_turn = CHESS_COLOR.RED;
    }

    public startGame() {
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            chess.chess_img.visible = true;

            var end_pos = this.getChessPos(chess.x, chess.y);

            var tw = egret.Tween.get(chess.chess_img);
            tw.to({x:end_pos[0], y:end_pos[1]}, 500, egret.Ease.sineInOut);
        }

        this.game_is_running = true;
    }

    public backGame() {
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

        if (this.chess_turn == CHESS_COLOR.RED) {
            this.chess_turn = CHESS_COLOR.BLACK;
        }
        else {
            this.chess_turn = CHESS_COLOR.RED;
        }
    }

    public closeMusic() {
        this.background_music.pause();
    }
    public openMusic() {
        this.background_music.play(true);
    }

    //将棋盘坐标转换成窗口坐标
    private getChessPos(x:number, y:number) {
        var new_x = x * this.CHESS_DIAMETER + this.CHESS_OFFSET[0];
        var new_y = -y * this.CHESS_DIAMETER + this.CHESS_OFFSET[1];
        return [new_x, new_y];
    }

    private getClickPos(stageX:number, stageY:number) {
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
    }

    //通过坐标的下标获取棋子的ID
    //如果坐标上没有棋子,返回-1
    private getChessIdByPlatePos(x:number, y:number) {
        for (var i = 0; i < this.chess_list.length; i++) {
            var chess = this.chess_list[i];
            if (chess.x == x && chess.y == y && chess.is_dead == false) {
                return chess.chess_id;
            }
        }

        return -1;
    }

    private onTouchPlate( evt ) {
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
    }

    private setSelectChessId(chess_id:number) {
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
    }
    public onTouchChess(chess_id:number) {
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
    }

    //移动棋子
    //第一个参数：移动的棋子的id
    //第二个参数：通过触摸点的位置判断触摸点上是否有棋子
    //第三个参数：触摸点的x坐标
    //第四个参数：触摸点的y坐标
    private moveChess(move_id:number, kill_id:number, x:number, y:number) {
        var chess1 = this.chess_list[move_id];
        var chess2 = this.chess_list[kill_id];

        if (kill_id != -1 && chess1.chess_color == chess2.chess_color) {
            this.setSelectChessId(kill_id);
            return;
        }

        var bCanMove:boolean = this.canMove(move_id, kill_id, x, y);
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
        tw.to({x:end_pos[0], y:end_pos[1]}, 500, egret.Ease.sineInOut).call(this.endMoveAnim, this, [kill_id]);
    }

    private endMoveAnim(kill_id:number) {
        if (kill_id != -1) {
            var killed_chess = this.chess_list[kill_id];
            killed_chess.is_dead = true;
            killed_chess.chess_img.visible = false;

            if (killed_chess.chess_type == CHESS_TYPE.JIANG) {
                // Game over!
                this.game_is_running = false;

                if (this.chess_turn == CHESS_COLOR.RED) {
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

        if (this.chess_turn == CHESS_COLOR.RED) {
            this.chess_turn = CHESS_COLOR.BLACK;
        }
        else {
            this.chess_turn = CHESS_COLOR.RED;
        }
    }

    private canMove(move_id:number, kill_id:number, x:number, y:number) {
        var chess = this.chess_list[move_id];

        switch (chess.chess_type) {
            case CHESS_TYPE.JIANG:
            {
                return this.canMoveJiang(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.SHI:
            {
                return this.canMoveShi(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.XIANG:
            {
                return this.canMoveXiang(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.CHE:
            {
                return this.canMoveChe(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.MA:
            {
                return this.canMoveMa(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.PAO:
            {
                return this.canMovePao(move_id, kill_id, x, y);
            }

            case CHESS_TYPE.BING:
            {
                return this.canMoveBing(move_id, kill_id, x, y);
            }
        }

        return false;
    }

    private canMoveJiang(move_id:number, kill_id:number, x:number, y:number) {
        var chess_to_kill = this.chess_list[kill_id];

        //将的走棋规则：
        //1、一次走一格
        //2、不能出九宫格

        //将的对杀
        if (chess_to_kill != null && chess_to_kill.chess_type == CHESS_TYPE.JIANG) {
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

        if (chess.chess_color == CHESS_COLOR.RED) {
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
    }

    private canMoveShi(move_id:number, kill_id:number, x:number, y:number) {
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

        if (chess.chess_color == CHESS_COLOR.RED) {
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
    }

    private canMoveXiang(move_id:number, kill_id:number, x:number, y:number) {
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
        if (chess.chess_color == CHESS_COLOR.RED) {
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
    }

    private canMoveChe(move_id:number, kill_id:number, x:number, y:number) {
        var chess = this.chess_list[move_id];

        var xo = chess.x;
        var yo = chess.y;

        //当两点之间有棋子的时候车不能走
        if (this.getChessCount(xo, yo, x, y) != 0) {
            return false;
        }

        return true;
    }

    private canMoveMa(move_id:number, kill_id:number, x:number, y:number) {
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
    }

    private canMovePao(move_id:number, kill_id:number, x:number, y:number) {
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
    }

    private canMoveBing(move_id:number, kill_id:number, x:number, y:number) {
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
        if (chess.chess_color == CHESS_COLOR.RED) {
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
    }

    ///计算(xo,yo)和(x,y)之间的棋子数
    //如果棋子数为-1,表示(xo,yo)和(x,y)不在一条直线上
    private getChessCount(xo, yo, x, y) {
        var ret = 0;//记录两点之间的棋子的个数

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

            for (var i = min+1; i < max; i++) {
                if (this.getChessIdByPlatePos(x, i) != -1) {
                    ret++;
                }
            }
        }
        //两点在同一条横线上yo == y
        else {
            var min = xo;
            var max = x;
            if (xo > x) {
                min = x;
                max = xo;
            }

            for (var i = min+1; i < max; i++) {
                if (this.getChessIdByPlatePos(i, y) != -1) {
                    ret++;
                }
            }
        }

        return ret;
    }
}