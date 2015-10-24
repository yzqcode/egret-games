var skins;
(function (skins) {
    var UIArenaTenRankItemSkin = (function (_super) {
        __extends(UIArenaTenRankItemSkin, _super);
        function UIArenaTenRankItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [68, 768]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_ranking_i(), this.label_name_i(), this.label_guild_i(), this.label_grade_i(), this.label_score_i(), this.btn_look_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIArenaTenRankItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIArenaTenRankItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 189, 83, 6]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 206, 279, 6]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 77, 489, 6]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 77, 571, 6]);
            return t;
        };
        __egretProto__.btn_look_i = function () {
            var t = new egret.gui.Button();
            this.btn_look = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [67, "查看", skins.BtnYellowSmallSkin, 112, 655, -1]);
            return t;
        };
        __egretProto__.label_grade_i = function () {
            var t = new egret.gui.Label();
            this.label_grade = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 40, 28, "段位", "center", 0x040303, "middle", 77, 489, 17]);
            return t;
        };
        __egretProto__.label_guild_i = function () {
            var t = new egret.gui.Label();
            this.label_guild = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 40, 28, "骑士团", "center", 0x050404, "middle", 198, 282, 17]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 40, 28, "名字", "center", 0x030202, "middle", 179, 87, 17]);
            return t;
        };
        __egretProto__.label_ranking_i = function () {
            var t = new egret.gui.Label();
            this.label_ranking = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 40, 28, "排名", "center", 0x040303, "middle", 66, 5, 17]);
            return t;
        };
        __egretProto__.label_score_i = function () {
            var t = new egret.gui.Label();
            this.label_score = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 40, 28, "积分", "center", 0x040303, "middle", 77, 571, 17]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 76, 0, 6]);
            return t;
        };
        UIArenaTenRankItemSkin._skinParts = ["label_ranking", "label_name", "label_guild", "label_grade", "label_score", "btn_look"];
        return UIArenaTenRankItemSkin;
    })(egret.gui.Skin);
    skins.UIArenaTenRankItemSkin = UIArenaTenRankItemSkin;
    UIArenaTenRankItemSkin.prototype.__class__ = "skins.UIArenaTenRankItemSkin";
})(skins || (skins = {}));
