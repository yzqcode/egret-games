var skins;
(function (skins) {
    var UIBattleWinViewSkin = (function (_super) {
        __extends(UIBattleWinViewSkin, _super);
        function UIBattleWinViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.ui_layer_i(), this.anim_layer_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIBattleWinViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIBattleWinViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [201, "chat_dialog_panel_2_jpg", 303, 3, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [210, "send_msg_frame_png", 314, 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [183, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 284, 14, 13]);
            return t;
        };
        __egretProto__.anim_layer_i = function () {
            var t = new egret.gui.Group();
            this.anim_layer = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0, 0, -109, 0, 10, 10]);
            return t;
        };
        __egretProto__.btn_ok_i = function () {
            var t = new egret.gui.Button();
            this.btn_ok = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["确定", skins.BtnGreenLargeSkin, 53, 79]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.ui_layer_i = function () {
            var t = new egret.gui.Group();
            this.ui_layer = t;
            this.__s(t, ["height", "width", "x", "y"], [210, 310, 413, 332]);
            t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.btn_ok_i()];
            return t;
        };
        UIBattleWinViewSkin._skinParts = ["btn_ok", "ui_layer", "anim_layer"];
        return UIBattleWinViewSkin;
    })(egret.gui.Skin);
    skins.UIBattleWinViewSkin = UIBattleWinViewSkin;
    UIBattleWinViewSkin.prototype.__class__ = "skins.UIBattleWinViewSkin";
})(skins || (skins = {}));
