var skins;
(function (skins) {
    var UITestBattleSetViewSkin = (function (_super) {
        __extends(UITestBattleSetViewSkin, _super);
        function UITestBattleSetViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [500, 800]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.hp_edit_i(), this.__7_i(), this.offset_edit_i(), this.__8_i(), this.direction_edit_i(), this.__9_i(), this.quick_battle_edit_i(), this.__10_i(), this.job_edit_i(), this.__11_i(), this.name_edit_i(), this.__12_i(), this.lv_edit_i(), this.__13_i(), this.atk_edit_i(), this.__14_i(), this.def_edit_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.add_btn_i(), this.fight_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UITestBattleSetViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UITestBattleSetViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 86, 64]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 310, 62]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 86, 112]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 312, 112]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "width", "x", "y"], [32, 15, "职业(战士1 弓箭2 法师3 骑士4 斗士5 刺客6 长弓7 弩手8 火法9 冰法10 牧师11)", 564, 19, 19]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "名字", "right", "middle", 46, 31, 64]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "level", "right", "middle", 41, 264, 58]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "攻击系数", "right", "middle", 76, 6, 113]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "防御系数", "right", "middle", 68, 243, 110]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "hp系数", "right", "middle", 71, 473, 107]);
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [66, 15, "位置偏移（注意，如果填写2，右边的从右边界开始往里面挪2，就是变成18）", "left", "middle", 202, 255, 166]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "左1右2", "right", "middle", 53, 26, 172]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [39, 15, "快速战斗填写这个，然后点击确定，格式为xxxxx-xxxxx", "right", "middle", 425, 20, 350]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.7, 500, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 799, 0, 0]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Rect();
            t.setStyle("textColor", 0xFFFFFF);
            this.__s(t, ["fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [0x386744, 291, 0, 0x444444, 767, 11, 11]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.Rect();
            t.setStyle("textColor", 0xFFFFFF);
            this.__s(t, ["fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [0x384567, 104, 0, 0x444444, 767, 11, 321]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 550, 108]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 469, 178]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 85, 173]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [60, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 270, 461, 342]);
            return t;
        };
        __egretProto__.add_btn_i = function () {
            var t = new egret.gui.Button();
            this.add_btn = t;
            t.setStyle("fontFamily", "Arial");
            t.setStyle("size", 20);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0x000000);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [121, "添加", skins.UIBoxButtonSkin, 125, 641, 161]);
            return t;
        };
        __egretProto__.atk_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.atk_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 102, 118]);
            return t;
        };
        __egretProto__.def_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.def_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 328, 118]);
            return t;
        };
        __egretProto__.direction_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.direction_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 101, 179]);
            return t;
        };
        __egretProto__.fight_btn_i = function () {
            var t = new egret.gui.Button();
            this.fight_btn = t;
            t.setStyle("fontFamily", "Arial");
            t.setStyle("size", 20);
            t.setStyle("textAlign", "center");
            t.setStyle("textColor", 0xFF0000);
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [55, "开战", skins.BtnBlueSmallSkin, 124, 355, 433]);
            return t;
        };
        __egretProto__.hp_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.hp_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 566, 114]);
            return t;
        };
        __egretProto__.job_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.job_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 612, 22]);
            return t;
        };
        __egretProto__.lv_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.lv_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 326, 68]);
            return t;
        };
        __egretProto__.name_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.name_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 115, 102, 70]);
            return t;
        };
        __egretProto__.offset_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.offset_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [22, 20, "center", 0xFFFFFF, 113, 485, 184]);
            return t;
        };
        __egretProto__.quick_battle_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.quick_battle_edit = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "width", "x", "y"], [45, 30, "center", 0xFFFFFF, 234, 477, 350]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [35, egret.gui.getScale9Grid("19,20,58,57"), "talk_frame_png", 151, 596, 16]);
            return t;
        };
        UITestBattleSetViewSkin._skinParts = ["hp_edit", "offset_edit", "direction_edit", "quick_battle_edit", "job_edit", "name_edit", "lv_edit", "atk_edit", "def_edit", "add_btn", "fight_btn"];
        return UITestBattleSetViewSkin;
    })(egret.gui.Skin);
    skins.UITestBattleSetViewSkin = UITestBattleSetViewSkin;
    UITestBattleSetViewSkin.prototype.__class__ = "skins.UITestBattleSetViewSkin";
})(skins || (skins = {}));
