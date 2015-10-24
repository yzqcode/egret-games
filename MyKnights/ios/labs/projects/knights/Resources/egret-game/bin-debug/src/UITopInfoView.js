var UITopInfoView = (function (_super) {
    __extends(UITopInfoView, _super);
    function UITopInfoView() {
        _super.call(this);
        this.skinName = "skins.UITopInfoViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UITopInfoView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.y = 0;
        this.add_diamond_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showAddDiamondLayer, this);
        this.add_money_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showAddMoneyLayer, this);
        this.add_stamina_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showAddStaminaLayer, this);
        this.initMoneyText();
        this.initDiamond();
        this.initStamina();
        this.initHonor();
    };
    __egretProto__.initPlayer = function () {
        var knight_info = Logic.getPlayerKnight();
        if (knight_info == null) {
            return;
        }
        this.icon_head.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);
        this.label_level.text = "" + knight_info.level;
        this.label_name.text = "" + knight_info.name;
        var guild_name = Logic.getGuildName();
        this.label_guild.text = "" + guild_name;
    };
    __egretProto__.initMoneyText = function () {
        this.last_money = Logic.money;
        this.label_money.text = "" + this.last_money;
    };
    __egretProto__.initDiamond = function () {
        this.last_diamond = Logic.diamond;
        this.label_diamond.text = "" + this.last_diamond;
    };
    __egretProto__.initStamina = function () {
        this.last_stamina_max = Logic.stamina_max;
        this.last_stamina = Logic.stamina;
        this.label_stamina.text = "" + this.last_stamina + "/" + this.last_stamina_max;
    };
    __egretProto__.initHonor = function () {
        this.last_honor = Logic.honor;
        this.label_honor.text = "" + this.last_honor;
    };
    __egretProto__.refreshMoneyText = function () {
        var difference_money = Logic.money - this.last_money;
        if (difference_money == 0) {
            return;
        }
        else {
            this.change_animation_money = Math.floor(difference_money / 10);
            if (this.change_animation_money == 0) {
                this.change_animation_money = 1;
            }
            this.timer_money = new egret.Timer(50, 1);
            this.timer_money.addEventListener(egret.TimerEvent.TIMER, this.moneyAnimation, this);
            this.timer_money.start();
        }
    };
    __egretProto__.refreshDiamondText = function () {
        var difference_diamond = Logic.diamond - this.last_diamond;
        if (difference_diamond == 0) {
            return;
        }
        else {
            this.change_animation_diamond = Math.floor(difference_diamond / 10);
            if (this.change_animation_diamond == 0) {
                this.change_animation_diamond = 1;
            }
            this.timer_diamond = new egret.Timer(50, 1);
            this.timer_diamond.addEventListener(egret.TimerEvent.TIMER, this.diamondAnimation, this);
            this.timer_diamond.start();
        }
    };
    __egretProto__.refreshStaminaText = function () {
        var difference_stamina = Logic.stamina - this.last_stamina;
        if (difference_stamina == 0) {
            return;
        }
        else {
            if (difference_stamina < 0) {
                this.change_animation_stamina = -1;
            }
            else {
                this.change_animation_stamina = 1;
            }
            this.timer_stamina = new egret.Timer(10, 1);
            this.timer_stamina.addEventListener(egret.TimerEvent.TIMER, this.staminaAnimation, this);
            this.timer_stamina.start();
        }
    };
    __egretProto__.refreshHonorText = function () {
        var difference_honor = Logic.honor - this.last_diamond;
        if (difference_honor == 0) {
            return;
        }
        else {
            this.change_animation_honor = Math.floor(difference_honor / 10);
            if (this.change_animation_honor == 0) {
                this.change_animation_honor = 1;
            }
            this.timer_honor = new egret.Timer(50, 1);
            this.timer_honor.addEventListener(egret.TimerEvent.TIMER, this.honorAnimation, this);
            this.timer_honor.start();
        }
    };
    __egretProto__.moneyAnimation = function (evt) {
        if (this.change_animation_money < 0) {
            if (this.last_money <= Logic.money) {
                this.last_money = Logic.money;
                this.label_money.text = "" + Logic.money;
            }
            else {
                this.last_money = this.last_money + this.change_animation_money;
                if (this.last_money <= Logic.money) {
                    this.last_money = Logic.money;
                    this.label_money.text = "" + Logic.money;
                }
                else {
                    this.label_money.text = "" + this.last_money;
                    this.timer_money = new egret.Timer(50, 1);
                    this.timer_money.addEventListener(egret.TimerEvent.TIMER, this.moneyAnimation, this);
                    this.timer_money.start();
                }
            }
        }
        else {
            if (this.last_money >= Logic.money) {
                this.last_money = Logic.money;
                this.label_money.text = "" + Logic.money;
            }
            else {
                this.last_money = this.last_money + this.change_animation_money;
                if (this.last_money >= Logic.money) {
                    this.last_money = Logic.money;
                    this.label_money.text = "" + Logic.money;
                }
                else {
                    this.label_money.text = "" + this.last_money;
                    this.timer_money = new egret.Timer(50, 1);
                    this.timer_money.addEventListener(egret.TimerEvent.TIMER, this.moneyAnimation, this);
                    this.timer_money.start();
                }
            }
        }
    };
    __egretProto__.diamondAnimation = function (evt) {
        if (this.change_animation_diamond < 0) {
            if (this.last_diamond <= Logic.diamond) {
                this.last_diamond = Logic.diamond;
                this.label_diamond.text = "" + Logic.diamond;
            }
            else {
                this.last_diamond = this.last_diamond + this.change_animation_diamond;
                if (this.last_diamond <= Logic.diamond) {
                    this.last_diamond = Logic.diamond;
                    this.label_diamond.text = "" + Logic.diamond;
                }
                else {
                    this.label_diamond.text = "" + this.last_diamond;
                    this.timer_diamond = new egret.Timer(50, 1);
                    this.timer_diamond.addEventListener(egret.TimerEvent.TIMER, this.diamondAnimation, this);
                    this.timer_diamond.start();
                }
            }
        }
        else {
            if (this.last_diamond >= Logic.diamond) {
                this.last_diamond = Logic.diamond;
                this.label_diamond.text = "" + Logic.diamond;
            }
            else {
                this.last_diamond = this.last_diamond + this.change_animation_diamond;
                if (this.last_diamond >= Logic.diamond) {
                    this.last_diamond = Logic.diamond;
                    this.label_diamond.text = "" + Logic.diamond;
                }
                else {
                    this.label_diamond.text = "" + this.last_diamond;
                    this.timer_diamond = new egret.Timer(50, 1);
                    this.timer_diamond.addEventListener(egret.TimerEvent.TIMER, this.diamondAnimation, this);
                    this.timer_diamond.start();
                }
            }
        }
    };
    __egretProto__.staminaAnimation = function (evt) {
        if (this.change_animation_stamina < 0) {
            if (this.last_stamina <= Logic.stamina) {
                this.last_stamina = Logic.stamina;
                this.label_stamina.text = "" + Logic.stamina + "/" + this.last_stamina_max;
            }
            else {
                this.last_stamina = this.last_stamina + this.change_animation_stamina;
                if (this.last_stamina <= Logic.stamina) {
                    this.last_stamina = Logic.stamina;
                    this.label_stamina.text = "" + Logic.stamina + "/" + this.last_stamina_max;
                }
                else {
                    this.label_stamina.text = "" + this.last_stamina;
                    this.timer_stamina = new egret.Timer(10, 1);
                    this.timer_stamina.addEventListener(egret.TimerEvent.TIMER, this.staminaAnimation, this);
                    this.timer_stamina.start();
                }
            }
        }
        else {
            if (this.last_stamina >= Logic.stamina) {
                this.last_stamina = Logic.stamina;
                this.label_stamina.text = "" + Logic.stamina + "/" + this.last_stamina_max;
            }
            else {
                this.last_stamina = this.last_stamina + this.change_animation_stamina;
                if (this.last_stamina >= Logic.stamina) {
                    this.last_stamina = Logic.stamina;
                    this.label_stamina.text = "" + Logic.stamina + "/" + this.last_stamina_max;
                }
                else {
                    this.label_stamina.text = "" + this.last_stamina;
                    this.timer_stamina = new egret.Timer(10, 1);
                    this.timer_stamina.addEventListener(egret.TimerEvent.TIMER, this.staminaAnimation, this);
                    this.timer_stamina.start();
                }
            }
        }
    };
    __egretProto__.honorAnimation = function (evt) {
        if (this.change_animation_honor < 0) {
            if (this.last_honor <= Logic.honor) {
                this.last_honor = Logic.honor;
                this.label_honor.text = "" + Logic.honor;
            }
            else {
                this.last_honor = this.last_honor + this.change_animation_honor;
                if (this.last_honor <= Logic.honor) {
                    this.last_honor = Logic.honor;
                    this.label_honor.text = "" + Logic.honor;
                }
                else {
                    this.label_honor.text = "" + this.last_honor;
                    this.timer_honor = new egret.Timer(50, 1);
                    this.timer_honor.addEventListener(egret.TimerEvent.TIMER, this.honorAnimation, this);
                    this.timer_honor.start();
                }
            }
        }
        else {
            if (this.last_honor >= Logic.honor) {
                this.last_honor = Logic.honor;
                this.label_honor.text = "" + Logic.honor;
            }
            else {
                this.last_honor = this.last_honor + this.change_animation_honor;
                if (this.last_honor >= Logic.honor) {
                    this.last_honor = Logic.honor;
                    this.label_honor.text = "" + Logic.honor;
                }
                else {
                    this.label_honor.text = "" + this.last_honor;
                    this.timer_honor = new egret.Timer(50, 1);
                    this.timer_honor.addEventListener(egret.TimerEvent.TIMER, this.honorAnimation, this);
                    this.timer_honor.start();
                }
            }
        }
    };
    __egretProto__.showAddDiamondLayer = function (evt) {
        // TODO:
        console.log("add_d");
    };
    __egretProto__.showAddMoneyLayer = function (evt) {
        // TODO:
        console.log("add_m");
    };
    __egretProto__.showAddStaminaLayer = function (evt) {
        // TODO:
        console.log("add_s");
    };
    return UITopInfoView;
})(egret.gui.Panel);
UITopInfoView.prototype.__class__ = "UITopInfoView";
