var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemShopPerk = (function (_super) {
    __extends(ItemShopPerk, _super);
    function ItemShopPerk() {
        _super.call(this);
        this.skinName = "skins.base.ShopPerkItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemShopPerk.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshPerkInfo();
        // Add touch event listener.
        this.btnUsePerk.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnUsePerkClicked, this);
    };
    ItemShopPerk.prototype.refreshPerkInfo = function () {
        this.iconPerkPic.source = RES.getRes(this.m_strPerkIconName);
        this.labelPerkName.text = this.m_strPerkName;
        this.labelPerkDes.text = this.m_strPerkDesc;
        this.labelPerkFee.text = "" + this.m_iPerkFee;
        if (this.m_iPerkIndex == 4) {
            if (Logic.isProtectingHero()) {
                this.btnUsePerk.enabled = false;
            }
            else {
                this.btnUsePerk.enabled = true;
            }
        }
    };
    ItemShopPerk.prototype.setPerkIndex = function (index) {
        this.m_iPerkIndex = index;
        this.refresh();
    };
    ItemShopPerk.prototype.refresh = function () {
        var index = this.m_iPerkIndex;
        if (index == 0) {
            var money = Logic.getShopMoney();
            this.m_strPerkIconName = "钻石购买_钱雨";
            this.m_strPerkName = "用元宝砸死你";
            this.m_strPerkDesc = "获得" + Utils.bigNumber(money) + "元宝";
            this.m_iPerkFee = G.buy_money_fee;
        }
        else if (index == 1) {
            this.m_strPerkIconName = "钻石购买_天罚";
            this.m_strPerkName = "天罚";
            this.m_strPerkDesc = "打击妖怪，伤害为妖怪血量的一半";
            this.m_iPerkFee = G.shop_hit1_fee;
        }
        else if (index == 2) {
            this.m_strPerkIconName = "钻石购买_天庭审判";
            this.m_strPerkName = "天庭审判";
            this.m_strPerkDesc = "重创妖怪，伤害为妖怪血量的90%";
            this.m_iPerkFee = G.shop_hit2_fee;
        }
        else if (index == 3) {
            this.m_strPerkIconName = "钻石购买_三头六臂";
            this.m_strPerkName = "三头六臂";
            this.m_strPerkDesc = "按住屏幕自动高速攻击" + G.holding_tap_time + "秒";
            this.m_iPerkFee = G.holding_tap_fee;
        }
        else if (index == 4) {
            this.m_strPerkIconName = "钻石购买_八卦阵";
            this.m_strPerkName = "八卦阵";
            this.m_strPerkDesc = "保护英雄，24小时内不会死亡";
            this.m_iPerkFee = G.protect_fee;
        }
    };
    ItemShopPerk.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ItemShopPerk.prototype.usePerk = function (index) {
        var success = false;
        if (index == 0) {
            //Logic.money += 1000000000000000000000000;
            //Logic.player.level += 600;
            var l = Logic.buyShopMoney();
            if (l[0] == 0) {
                this.gameView.ui_main.refreshDiamond();
                this.gameView.receiveDiamondMoney(l[1]);
                success = true;
            }
            else {
                this.gameView.showLowDiamondHint();
            }
        }
        else if (index == 1) {
            if (Logic.monster.hp > 0) {
                if (Logic.costDiamond(G.shop_hit1_fee)) {
                    this.gameView.showShopHitAnim();
                    this.gameView.makeDamageToMonster("Shop_Hit1");
                    this.gameView.ui_main.refreshDiamond();
                    success = true;
                }
                else {
                    this.gameView.showLowDiamondHint();
                }
            }
        }
        else if (index == 2) {
            if (Logic.monster.hp > 0) {
                if (Logic.costDiamond(G.shop_hit2_fee)) {
                    this.gameView.showShopHitAnim();
                    this.gameView.makeDamageToMonster("Shop_Hit2");
                    this.gameView.ui_main.refreshDiamond();
                    success = true;
                }
                else {
                    this.gameView.showLowDiamondHint();
                }
            }
        }
        else if (index == 3) {
            var ret = Logic.shopHoldingTap();
            if (ret == 0) {
                this.gameView.ui_main.refreshDiamond();
                this.gameView.startHoldingTap();
                this.gameView.showHoldingHintAmin();
                success = true;
            }
            else if (ret == 1) {
                this.gameView.showLowDiamondHint();
            }
            else if (ret == 2) {
                console.log("holding tap already");
            }
        }
        else if (index == 4) {
            var ret = Logic.shopProtectHero();
            if (ret == 0) {
                this.gameView.showProtectHeroAnim();
                this.gameView.ui_main.refreshDiamond();
                this.refreshPerkInfo();
                success = true;
            }
            else if (ret == 1) {
                this.gameView.showLowDiamondHint();
            }
            else if (ret == 2) {
            }
        }
        if (success) {
            Stat.addListData(ST.PERKS, index, 1);
        }
    };
    ItemShopPerk.prototype.btnUsePerkClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            this.usePerk(this.m_iPerkIndex);
        }
    };
    return ItemShopPerk;
})(egret.gui.Panel);
ItemShopPerk.prototype.__class__ = "ItemShopPerk";
