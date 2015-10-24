var skins;
(function (skins) {
    var UIBottomInfoViewSkin = (function (_super) {
        __extends(UIBottomInfoViewSkin, _super);
        function UIBottomInfoViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [116, 1136]);
            this.elementsContent = [this.knight_team_group_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.btn_back_i(), this.label_join_guild_i(), this.label_check_guild_i(), this.label_back_i(), this.scroller_view_i(), this.chat_mask_icon_i(), this.knight_head_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIBottomInfoViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIBottomInfoViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["chat_title_bg_png", 19, 4]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["loudspeaker_png", 145, 5]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], [false, "Arial", 32, 20, "骑士团聊天", "center", 0x000000, false, 123, 27, 14]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.btn_back_i = function () {
            var t = new egret.gui.Button();
            this.btn_back = t;
            this.__s(t, ["enabled", "skinName", "x", "y"], [true, skins.BtnBackHomeSkin, 960, 22]);
            return t;
        };
        __egretProto__.chat_mask_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.chat_mask_icon = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 112, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 176, 2, 1]);
            return t;
        };
        __egretProto__.knight_head_i = function () {
            var t = new egret.gui.UIAsset();
            this.knight_head = t;
            this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.5, 105, "head_nor_1_png", 126, 204, -9]);
            return t;
        };
        __egretProto__.knight_team_group_i = function () {
            var t = new egret.gui.Group();
            this.knight_team_group = t;
            this.__s(t, ["height", "width", "x"], [116, 785, 174]);
            return t;
        };
        __egretProto__.label_back_i = function () {
            var t = new egret.gui.Label();
            this.label_back = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 36, 28, "返回", "center", 0x000000, false, false, 150, 974, 54]);
            return t;
        };
        __egretProto__.label_check_guild_i = function () {
            var t = new egret.gui.Label();
            this.label_check_guild = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 36, 28, "出征", "center", 0x000000, false, false, 150, 974, 54]);
            return t;
        };
        __egretProto__.label_join_guild_i = function () {
            var t = new egret.gui.Label();
            this.label_join_guild = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], [true, "Arial", 36, 28, "出征", "center", 0x000000, false, 150, 974, 54]);
            return t;
        };
        __egretProto__.scroller_view_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_view = t;
            this.__s(t, ["height", "width", "x", "y"], [56, 150, 13, 50]);
            t.viewport = this.__7_i();
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [80, egret.gui.getScale9Grid("15,15,18,17"), "chat_content_bg_png", 174, 2, 38]);
            return t;
        };
        UIBottomInfoViewSkin._skinParts = ["knight_team_group", "btn_back", "label_join_guild", "label_check_guild", "label_back", "scroller_view", "chat_mask_icon", "knight_head"];
        return UIBottomInfoViewSkin;
    })(egret.gui.Skin);
    skins.UIBottomInfoViewSkin = UIBottomInfoViewSkin;
    UIBottomInfoViewSkin.prototype.__class__ = "skins.UIBottomInfoViewSkin";
})(skins || (skins = {}));
