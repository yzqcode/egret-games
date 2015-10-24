var skins;
(function (skins) {
    var UIBaseLoadingViewSkin = (function (_super) {
        __extends(UIBaseLoadingViewSkin, _super);
        function UIBaseLoadingViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.loading_bg_i(), this.label_progress_i(), this.logo_i(), this.btn_start_game_i(), this.btn_show_server_list_i(), this.btn_switch_user_i(), this.label_server_desc_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIBaseLoadingViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIBaseLoadingViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.btn_start_game_i = function () {
            var t = new egret.gui.Button();
            this.btn_start_game = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [10.5, "开始游戏", skins.BtnBlueLargeSkin, 52]);
            return t;
        };
        __egretProto__.btn_switch_user_i = function () {
            var t = new egret.gui.Button();
            this.btn_switch_user = t;
            this.__s(t, ["bottom", "label", "right", "skinName", "width", "y"], [20, "切换账号", 20, skins.BtnYellowLargeSkin, 209, 10]);
            return t;
        };
        __egretProto__.label_progress_i = function () {
            var t = new egret.gui.Label();
            this.label_progress = t;
            this.__s(t, ["bottom", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "width", "x"], [21, 55, 0.5, "读取中", "center", 0xF7EDBC, "middle", 677, 10]);
            return t;
        };
        __egretProto__.label_server_desc_i = function () {
            var t = new egret.gui.Label();
            this.label_server_desc = t;
            this.__s(t, ["bottom", "fontFamily", "height", "left", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width"], [31, "Arial", 35, 35, 25, "默认服务器", "center", 0x000000, false, "middle", 172]);
            return t;
        };
        __egretProto__.loading_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.loading_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 0, "loading_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.logo_i = function () {
            var t = new egret.gui.UIAsset();
            this.logo = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [13.5, "logo_png", -146.5]);
            return t;
        };
        __egretProto__.btn_show_server_list_i = function () {
            var t = new egret.gui.Button();
            this.btn_show_server_list = t;
            this.__s(t, ["bottom", "left", "skinName"], [20, 20, skins.BtnYellowLargeSkin]);
            return t;
        };
        UIBaseLoadingViewSkin._skinParts = ["loading_bg", "label_progress", "logo", "btn_start_game", "btn_show_server_list", "btn_switch_user", "label_server_desc"];
        return UIBaseLoadingViewSkin;
    })(egret.gui.Skin);
    skins.UIBaseLoadingViewSkin = UIBaseLoadingViewSkin;
    UIBaseLoadingViewSkin.prototype.__class__ = "skins.UIBaseLoadingViewSkin";
})(skins || (skins = {}));
