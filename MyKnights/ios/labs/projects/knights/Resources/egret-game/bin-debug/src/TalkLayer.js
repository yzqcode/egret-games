var GUIDE_TYPE;
(function (GUIDE_TYPE) {
    GUIDE_TYPE[GUIDE_TYPE["FIRST_QUEST_FLAG"] = 0] = "FIRST_QUEST_FLAG";
    GUIDE_TYPE[GUIDE_TYPE["FIRST_QUEST_FIGHT"] = 1] = "FIRST_QUEST_FIGHT";
    GUIDE_TYPE[GUIDE_TYPE["FIRST_QUEST_END"] = 2] = "FIRST_QUEST_END";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_FLAG1"] = 10] = "CITY_2_FLAG1";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_FIGHTBTN1"] = 11] = "CITY_2_FIGHTBTN1";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_HIRE"] = 12] = "CITY_2_HIRE";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_HOME"] = 20] = "VILLAGE_HIRE_HOME";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_SOLDIER"] = 21] = "VILLAGE_HIRE_SOLDIER";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_HIRE"] = 22] = "VILLAGE_HIRE_HIRE";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_CONFIRM"] = 23] = "VILLAGE_HIRE_CONFIRM";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_BACK"] = 24] = "VILLAGE_HIRE_BACK";
    GUIDE_TYPE[GUIDE_TYPE["VILLAGE_HIRE_BACKHOME"] = 25] = "VILLAGE_HIRE_BACKHOME";
    GUIDE_TYPE[GUIDE_TYPE["TEAM_MGR_HOME"] = 30] = "TEAM_MGR_HOME";
    GUIDE_TYPE[GUIDE_TYPE["TEAM_MGR_SOLDIER"] = 31] = "TEAM_MGR_SOLDIER";
    GUIDE_TYPE[GUIDE_TYPE["TEAM_MGR_GOBATTLE"] = 32] = "TEAM_MGR_GOBATTLE";
    GUIDE_TYPE[GUIDE_TYPE["TEAM_MGR_BACK"] = 33] = "TEAM_MGR_BACK";
    GUIDE_TYPE[GUIDE_TYPE["CLICK_QUEST_HOME"] = 40] = "CLICK_QUEST_HOME";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_FLAG2"] = 50] = "CITY_2_FLAG2";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_FIGHTBTN2"] = 51] = "CITY_2_FIGHTBTN2";
    GUIDE_TYPE[GUIDE_TYPE["CITY_2_END"] = 52] = "CITY_2_END";
    GUIDE_TYPE[GUIDE_TYPE["CITY_3_FIGHTBTN1"] = 60] = "CITY_3_FIGHTBTN1";
    GUIDE_TYPE[GUIDE_TYPE["CITY_3_END1"] = 61] = "CITY_3_END1";
    GUIDE_TYPE[GUIDE_TYPE["TEAM_MGR_SWITCH"] = 70] = "TEAM_MGR_SWITCH";
    GUIDE_TYPE[GUIDE_TYPE["CITY_3_FLAG2"] = 80] = "CITY_3_FLAG2";
    GUIDE_TYPE[GUIDE_TYPE["CITY_3_FIGHTBTN2"] = 81] = "CITY_3_FIGHTBTN2";
    GUIDE_TYPE[GUIDE_TYPE["GUIDE_END"] = 9999] = "GUIDE_END";
})(GUIDE_TYPE || (GUIDE_TYPE = {}));
var TalkLayer = (function (_super) {
    __extends(TalkLayer, _super);
    function TalkLayer() {
        _super.call(this);
        this.parent_layer = null;
        this.parent_callback = null;
        this.talk_text = "";
        this.plot_id = 0;
        this.is_in_guide = false;
        this.talk_frame_zorder = -1;
    }
    var __egretProto__ = TalkLayer.prototype;
    __egretProto__.showTalkLayer = function (parent, callback) {
        if (callback === void 0) { callback = null; }
        this.parent_layer = parent;
        this.parent_layer.addChild(this);
        this.parent_callback = callback;
        var mask_sprite = new egret.Sprite();
        mask_sprite.graphics.beginFill(0x000000, 0);
        mask_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        mask_sprite.graphics.endFill();
        mask_sprite.width = G.win_width;
        mask_sprite.height = G.win_height;
        mask_sprite.touchEnabled = true;
        this.addChild(mask_sprite);
        var talk_frame = new egret.Bitmap();
        talk_frame.texture = RES.getRes("chat_content_bg_png");
        var rect = new egret.Rectangle(15, 15, 18, 17);
        talk_frame.scale9Grid = rect;
        talk_frame.width = G.win_width - 40;
        talk_frame.height = 120;
        talk_frame.x = 20;
        talk_frame.y = G.win_height - talk_frame.height - 10;
        this.addChild(talk_frame);
        this.talk_frame = talk_frame;
        var talk_label = new egret.TextField();
        talk_label.width = G.win_width - 60;
        talk_label.height = 100;
        talk_label.x = 40;
        talk_label.y = G.win_height - talk_frame.height + 10;
        talk_label.bold = true;
        talk_label.textColor = 0xF7EDBC;
        talk_label.size = 20;
        talk_label.fontFamily = "Arial";
        talk_label.text = "";
        talk_label.touchEnabled = true;
        this.addChild(talk_label);
        this.talk_label = talk_label;
        this.talk_label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickText, this);
        mask_sprite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickText, this);
        var show_text_timer = new egret.Timer(100, 1);
        show_text_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showMoreTalkText, this);
        show_text_timer.start();
        this.talk_frame_zorder = this.getChildIndex(talk_frame);
    };
    __egretProto__.showMoreTalkText = function () {
        var len = this.talk_label.text.length;
        if (len >= this.talk_text.length) {
            return;
        }
        this.talk_label.text = this.talk_text.substring(0, len + 2);
        if (len + 2 >= this.talk_text.length) {
            this.showGuideHandIfNeed();
            return;
        }
        var show_text_timer = new egret.Timer(100, 1);
        show_text_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showMoreTalkText, this);
        show_text_timer.start();
    };
    __egretProto__.onGuideHandComplete = function (evt) {
        evt.target.animation.gotoAndPlay("dj");
    };
    __egretProto__.addGuideHandDragon = function (posX, posY, touchCallback) {
        var hand_dragon = Utils.createDragonBone("tx005");
        var dd = hand_dragon.getDisplay();
        dd.x = posX;
        dd.y = posY;
        dd.visible = true;
        this.addChild(dd);
        hand_dragon.animation.gotoAndPlay("dj");
        hand_dragon.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onGuideHandComplete);
        var touch_hand = new egret.Sprite();
        touch_hand.graphics.beginFill(0x000000, 0);
        touch_hand.graphics.drawRect(posX, posY, 60, 60);
        touch_hand.graphics.endFill();
        touch_hand.anchorX = 0.5;
        touch_hand.anchorY = 0.5;
        touch_hand.width = 60;
        touch_hand.height = 60;
        touch_hand.touchEnabled = true;
        this.addChild(touch_hand);
        touch_hand.addEventListener(egret.TouchEvent.TOUCH_TAP, touchCallback, this);
        this.setChildIndex(dd, this.talk_frame_zorder);
        this.setChildIndex(touch_hand, this.talk_frame_zorder);
    };
    __egretProto__.hideTalkText = function () {
        var isPlot = this.parent_layer instanceof PlotLayer;
        if (isPlot) {
            if (this.parent_layer.npc != null) {
                this.parent_layer.npc.alpha = 0;
            }
        }
        this.talk_frame.visible = false;
        this.talk_label.visible = false;
    };
    __egretProto__.guide_FIRST_QUEST_FLAG = function () {
        this.is_in_guide = true;
        var x = 0.16 * G.win_width;
        var y = 0.61 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_FIRST_QUEST_FLAG);
    };
    __egretProto__.end_FIRST_QUEST_FLAG = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showFirstCityDetailDlgForGuide();
            Logic.guide_flag = 1 /* FIRST_QUEST_FIGHT */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_FIRST_QUEST_FIGHT = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2;
        var y = G.win_height / 2 + 127.5;
        this.addGuideHandDragon(x, y, this.end_FIRST_QUEST_FIGHT);
    };
    __egretProto__.end_FIRST_QUEST_FIGHT = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.city_detail_view != null) {
                current_layer.city_detail_view.onFightBtnClicked();
                Logic.guide_flag = 2 /* FIRST_QUEST_END */;
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_FIRST_QUEST_END = function () {
        this.is_in_guide = true;
        var x = 0.16 * G.win_width;
        var y = 0.61 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_FIRST_QUEST_END);
    };
    __egretProto__.end_FIRST_QUEST_END = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.collectCityMoney(1, 0);
            Logic.guide_flag = 10 /* CITY_2_FLAG1 */;
            Net.saveGuideFlag();
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_2_FLAG1 = function () {
        this.is_in_guide = true;
        var x = 0.28 * G.win_width;
        var y = 0.66 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_guide_CITY_2_FLAG1);
    };
    __egretProto__.end_guide_CITY_2_FLAG1 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showSecondCityDetailDlgForGuide();
            Logic.guide_flag = 11 /* CITY_2_FIGHTBTN1 */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_2_FIGHTBTN1 = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2;
        var y = G.win_height / 2 + 127.5;
        this.addGuideHandDragon(x, y, this.end_CITY_2_FIGHTBTN1);
    };
    __egretProto__.end_CITY_2_FIGHTBTN1 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.city_detail_view != null) {
                current_layer.city_detail_view.onFightBtnClicked();
                Logic.guide_flag = 12 /* CITY_2_HIRE */;
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_CITY_2_HIRE = function () {
        this.is_in_guide = true;
        var x = 27 + 43;
        var y = 103 + 55;
        this.addGuideHandDragon(x, y, this.end_CITY_2_HIRE);
    };
    __egretProto__.end_CITY_2_HIRE = function (evt) {
        this.closeTalkLayer();
        Logic.guide_flag = 20 /* VILLAGE_HIRE_HOME */;
        Net.saveGuideFlag();
        G.main_director.enterHireView();
    };
    __egretProto__.guide_VILLAGE_HIRE_HOME = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 - 300.5;
        var y = G.win_height / 2 + 6;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_HOME);
    };
    __egretProto__.end_VILLAGE_HIRE_HOME = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            current_layer.onVillageHire();
            Logic.guide_flag = 21 /* VILLAGE_HIRE_SOLDIER */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_VILLAGE_HIRE_SOLDIER = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 - 345;
        var y = G.win_height / 2 + 4;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_SOLDIER);
    };
    __egretProto__.end_VILLAGE_HIRE_SOLDIER = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            if (current_layer.current_subview instanceof UIVillageHireView) {
                current_layer.current_subview.onSelectKnight0();
                Logic.guide_flag = 22 /* VILLAGE_HIRE_HIRE */;
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_VILLAGE_HIRE_HIRE = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 - 4.5;
        var y = G.win_height / 2 + 162;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_HIRE);
    };
    __egretProto__.end_VILLAGE_HIRE_HIRE = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            if (current_layer.current_subview instanceof UIVillageHireView) {
                if (current_layer.current_subview.hire_detail_info != null) {
                    current_layer.current_subview.hire_detail_info.hireCallback();
                    Logic.guide_flag = 23 /* VILLAGE_HIRE_CONFIRM */;
                    this.closeTalkLayer();
                }
            }
        }
    };
    __egretProto__.guide_VILLAGE_HIRE_CONFIRM = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 + 74;
        var y = G.win_height / 2 + 101;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_CONFIRM);
    };
    __egretProto__.end_VILLAGE_HIRE_CONFIRM = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            if (current_layer.current_subview instanceof UIVillageHireView) {
                if (current_layer.current_subview.hire_detail_info == null) {
                    return;
                }
                if (current_layer.current_subview.hire_detail_info.hire_confirm_dlg == null) {
                    return;
                }
                current_layer.current_subview.hire_detail_info.hire_confirm_dlg.okCallback();
                Logic.guide_flag = 24 /* VILLAGE_HIRE_BACK */;
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_VILLAGE_HIRE_BACK = function () {
        this.is_in_guide = true;
        var x = G.win_width - 89;
        var y = G.win_height - 50;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_BACK);
    };
    __egretProto__.end_VILLAGE_HIRE_BACK = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            current_layer.onBackBtnClicked();
            Logic.guide_flag = 25 /* VILLAGE_HIRE_BACKHOME */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_VILLAGE_HIRE_BACKHOME = function () {
        this.is_in_guide = true;
        var x = G.win_width - 89;
        var y = G.win_height - 50;
        this.addGuideHandDragon(x, y, this.end_VILLAGE_HIRE_BACKHOME);
    };
    __egretProto__.end_VILLAGE_HIRE_BACKHOME = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHireHomeView) {
            current_layer.onBackBtnClicked();
            Logic.guide_flag = 30 /* TEAM_MGR_HOME */;
            Net.saveGuideFlag();
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_TEAM_MGR_HOME = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 + 197.5;
        var y = G.win_height / 2 + 155.5;
        this.addGuideHandDragon(x, y, this.end_TEAM_MGR_HOME);
    };
    __egretProto__.end_TEAM_MGR_HOME = function (evt) {
        G.main_director.enterMyTeamSetView();
        Logic.guide_flag = 31 /* TEAM_MGR_SOLDIER */;
        this.closeTalkLayer();
    };
    __egretProto__.guide_TEAM_MGR_SOLDIER = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 + 433;
        var y = G.win_height / 2 - 39 - 155 + 40;
        this.addGuideHandDragon(x, y, this.end_TEAM_MGR_SOLDIER);
    };
    __egretProto__.end_TEAM_MGR_SOLDIER = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIMyKnightTeamSetView) {
            current_layer.showKnightDetail(2 /* KNIGHT_ON_DESK */, 0);
            Logic.guide_flag = 32 /* TEAM_MGR_GOBATTLE */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_TEAM_MGR_GOBATTLE = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 + 59;
        var y = G.win_height / 2 + 154;
        this.addGuideHandDragon(x, y, this.end_TEAM_MGR_GOBATTLE);
    };
    __egretProto__.end_TEAM_MGR_GOBATTLE = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIMyKnightTeamSetView) {
            current_layer.onEnterTeamClicked(null);
            Logic.guide_flag = 33 /* TEAM_MGR_BACK */;
            Net.saveGuideFlag();
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_TEAM_MGR_BACK = function () {
        this.is_in_guide = true;
        var x = G.win_width - 89;
        var y = G.win_height - 50;
        this.addGuideHandDragon(x, y, this.end_TEAM_MGR_BACK);
    };
    __egretProto__.end_TEAM_MGR_BACK = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIMyKnightTeamSetView) {
            current_layer.onBackBtnClicked();
            Logic.guide_flag = 40 /* CLICK_QUEST_HOME */;
            Net.saveGuideFlag();
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CLICK_QUEST_HOME = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2 + 296.5;
        var y = G.win_height / 2 - 45.5;
        this.addGuideHandDragon(x, y, this.end_CLICK_QUEST_HOME);
    };
    __egretProto__.end_CLICK_QUEST_HOME = function (evt) {
        G.main_director.enterQuestView();
        Logic.guide_flag = 50 /* CITY_2_FLAG2 */;
        Net.saveGuideFlag();
        this.closeTalkLayer();
    };
    __egretProto__.guide_CITY_2_FLAG2 = function () {
        this.is_in_guide = true;
        var x = 0.28 * G.win_width;
        var y = 0.66 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_CITY_2_FLAG2);
    };
    __egretProto__.end_CITY_2_FLAG2 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showSecondCityDetailDlgForGuide();
            Logic.guide_flag = 51 /* CITY_2_FIGHTBTN2 */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_2_FIGHTBTN2 = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2;
        var y = G.win_height / 2 + 127.5;
        this.addGuideHandDragon(x, y, this.end_CITY_2_FIGHTBTN2);
    };
    __egretProto__.end_CITY_2_FIGHTBTN2 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.city_detail_view != null) {
                current_layer.city_detail_view.onFightBtnClicked();
                Logic.guide_flag = 52 /* CITY_2_END */;
                Net.saveGuideFlag();
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_CITY_2_END = function () {
        this.is_in_guide = true;
        var x = 0.38 * G.win_width;
        var y = 0.61 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_CITY_2_END);
    };
    __egretProto__.end_CITY_2_END = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showThirdCityDetailDlgForGuide();
            Logic.guide_flag = 60 /* CITY_3_FIGHTBTN1 */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_3_FIGHTBTN1 = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2;
        var y = G.win_height / 2 + 127.5;
        this.addGuideHandDragon(x, y, this.end_CITY_3_FIGHTBTN1);
    };
    __egretProto__.end_CITY_3_FIGHTBTN1 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.city_detail_view != null) {
                current_layer.city_detail_view.onFightBtnClicked();
                Logic.guide_flag = 70 /* TEAM_MGR_SWITCH */;
                Net.saveGuideFlag();
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.guide_TEAM_MGR_SWITCH = function () {
        this.is_in_guide = true;
        var x = 174 + 82.5;
        var y = G.win_height - 60;
        var hand_dragon = Utils.createDragonBone("tx005");
        var dd = hand_dragon.getDisplay();
        dd.x = x;
        dd.y = y;
        dd.visible = true;
        this.addChild(dd);
        hand_dragon.animation.gotoAndPlay("dj");
        hand_dragon.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onGuideHandComplete);
        var startX = x;
        var endX = x + 165 * 4;
        var tw = egret.Tween.get(dd, { loop: true });
        tw.to({ x: endX }, 1500).wait(100).to({ x: startX }, 10).wait(100);
        var touch_hand = new egret.Sprite();
        touch_hand.graphics.beginFill(0x000000, 0);
        touch_hand.graphics.drawRect(174, G.win_height - 116, 165 * 5, 120);
        touch_hand.graphics.endFill();
        touch_hand.anchorX = 0;
        touch_hand.anchorY = 0;
        touch_hand.width = 165 * 5;
        touch_hand.height = 120;
        touch_hand.touchEnabled = true;
        this.addChild(touch_hand);
        touch_hand.addEventListener(egret.TouchEvent.TOUCH_END, this.end_TEAM_MGR_SWITCH, this);
        this.setChildIndex(dd, this.talk_frame_zorder);
        this.setChildIndex(touch_hand, this.talk_frame_zorder);
    };
    __egretProto__.end_TEAM_MGR_SWITCH = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.bottom_info_bar == null) {
                return;
            }
            current_layer.bottom_info_bar.sendKnightSwitchPosition(0, 4);
            Logic.guide_flag = 80 /* CITY_3_FLAG2 */;
            Net.saveGuideFlag();
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_3_FLAG2 = function () {
        this.is_in_guide = true;
        var x = 0.38 * G.win_width;
        var y = 0.61 * G.win_height + 115 / 2;
        this.addGuideHandDragon(x, y, this.end_CITY_3_FLAG2);
    };
    __egretProto__.end_CITY_3_FLAG2 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showThirdCityDetailDlgForGuide();
            Logic.guide_flag = 81 /* CITY_3_FIGHTBTN2 */;
            this.closeTalkLayer();
        }
    };
    __egretProto__.guide_CITY_3_FIGHTBTN2 = function () {
        this.is_in_guide = true;
        var x = G.win_width / 2;
        var y = G.win_height / 2 + 127.5;
        this.addGuideHandDragon(x, y, this.end_CITY_3_FIGHTBTN2);
    };
    __egretProto__.end_CITY_3_FIGHTBTN2 = function (evt) {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.city_detail_view != null) {
                current_layer.city_detail_view.onFightBtnClicked();
                Logic.guide_flag = 9999 /* GUIDE_END */;
                Net.saveGuideFlag();
                this.closeTalkLayer();
            }
        }
    };
    __egretProto__.showGuideHandIfNeed = function () {
        if (Logic.guide_flag == 0 /* FIRST_QUEST_FLAG */ && this.plot_id == 110010) {
            this.guide_FIRST_QUEST_FLAG();
        }
        else if (Logic.guide_flag == 1 /* FIRST_QUEST_FIGHT */ && this.plot_id == 110011) {
            this.guide_FIRST_QUEST_FIGHT();
        }
        else if (Logic.guide_flag == 2 /* FIRST_QUEST_END */ && this.plot_id == 110020) {
            this.guide_FIRST_QUEST_END();
        }
        else if (Logic.guide_flag == 10 /* CITY_2_FLAG1 */ && this.plot_id == 120001) {
            this.guide_CITY_2_FLAG1();
        }
        else if (Logic.guide_flag == 11 /* CITY_2_FIGHTBTN1 */ && this.plot_id == 120002) {
            this.guide_CITY_2_FIGHTBTN1();
        }
        else if (Logic.guide_flag == 12 /* CITY_2_HIRE */ && this.plot_id == 120003) {
            this.guide_CITY_2_HIRE();
        }
        else if (Logic.guide_flag == 20 /* VILLAGE_HIRE_HOME */ && this.plot_id == 130020) {
            this.guide_VILLAGE_HIRE_HOME();
        }
        else if (Logic.guide_flag == 21 /* VILLAGE_HIRE_SOLDIER */ && this.plot_id == 130021) {
            this.guide_VILLAGE_HIRE_SOLDIER();
        }
        else if (Logic.guide_flag == 22 /* VILLAGE_HIRE_HIRE */ && this.plot_id == 130022) {
            this.guide_VILLAGE_HIRE_HIRE();
        }
        else if (Logic.guide_flag == 23 /* VILLAGE_HIRE_CONFIRM */ && this.plot_id == 130023) {
            this.guide_VILLAGE_HIRE_CONFIRM();
        }
        else if (Logic.guide_flag == 24 /* VILLAGE_HIRE_BACK */ && this.plot_id == 130024) {
            this.guide_VILLAGE_HIRE_BACK();
        }
        else if (Logic.guide_flag == 25 /* VILLAGE_HIRE_BACKHOME */ && this.plot_id == 130025) {
            this.guide_VILLAGE_HIRE_BACKHOME();
        }
        else if (Logic.guide_flag == 30 /* TEAM_MGR_HOME */ && this.plot_id == 130030) {
            this.guide_TEAM_MGR_HOME();
        }
        else if (Logic.guide_flag == 31 /* TEAM_MGR_SOLDIER */ && this.plot_id == 130031) {
            this.guide_TEAM_MGR_SOLDIER();
        }
        else if (Logic.guide_flag == 32 /* TEAM_MGR_GOBATTLE */ && this.plot_id == 130032) {
            this.guide_TEAM_MGR_GOBATTLE();
        }
        else if (Logic.guide_flag == 33 /* TEAM_MGR_BACK */ && this.plot_id == 130033) {
            this.guide_TEAM_MGR_BACK();
        }
        else if (Logic.guide_flag == 40 /* CLICK_QUEST_HOME */ && this.plot_id == 140040) {
            this.guide_CLICK_QUEST_HOME();
        }
        else if (Logic.guide_flag == 50 /* CITY_2_FLAG2 */ && this.plot_id == 150010) {
            this.guide_CITY_2_FLAG2();
        }
        else if (Logic.guide_flag == 51 /* CITY_2_FIGHTBTN2 */ && this.plot_id == 150011) {
            this.guide_CITY_2_FIGHTBTN2();
        }
        else if (Logic.guide_flag == 52 /* CITY_2_END */ && this.plot_id == 160005) {
            this.guide_CITY_2_END();
        }
        else if (Logic.guide_flag == 60 /* CITY_3_FIGHTBTN1 */ && this.plot_id == 160006) {
            this.guide_CITY_3_FIGHTBTN1();
        }
        else if (Logic.guide_flag == 70 /* TEAM_MGR_SWITCH */ && this.plot_id == 170005) {
            this.guide_TEAM_MGR_SWITCH();
        }
        else if (Logic.guide_flag == 80 /* CITY_3_FLAG2 */ && this.plot_id == 180005) {
            this.guide_CITY_3_FLAG2();
        }
        else if (Logic.guide_flag == 81 /* CITY_3_FIGHTBTN2 */ && this.plot_id == 180006) {
            this.guide_CITY_3_FIGHTBTN2();
        }
    };
    __egretProto__.onClickText = function () {
        var len = this.talk_label.text.length;
        if (len < this.talk_text.length) {
            return;
        }
        if (this.is_in_guide) {
            this.hideTalkText();
            return;
        }
        this.closeTalkLayer();
    };
    __egretProto__.closeTalkLayer = function () {
        this.removeChildren();
        this.parent_layer.removeChild(this);
        if (this.parent_callback != null) {
            this.parent_callback.call(this.parent_layer);
        }
    };
    return TalkLayer;
})(egret.DisplayObjectContainer);
TalkLayer.prototype.__class__ = "TalkLayer";
