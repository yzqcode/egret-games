var skins;
(function (skins) {
    var UIMainViewSkin = (function (_super) {
        __extends(UIMainViewSkin, _super);
        function UIMainViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [480, 800]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_new_i(), this.btn_diffcult_i(), this.btn_pause_i(), this.btn_back_i(), this.btn_start_i(), this.btn_open_voice_i(), this.btn_close_voice_i(), this.win_img_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIMainViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIMainViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "visible", "x", "y"], ["background_png", false, 20, 10]);
            return t;
        };
        __egretProto__.btn_back_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_back = t;
            this.__s(t, ["source", "x", "y"], ["regret_jpg", 570, 160]);
            return t;
        };
        __egretProto__.btn_close_voice_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_close_voice = t;
            this.__s(t, ["source", "x", "y"], ["openVolice_png", 603, 362]);
            return t;
        };
        __egretProto__.btn_diffcult_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_diffcult = t;
            this.__s(t, ["source", "x", "y"], ["difficulty_jpg", 570, 280]);
            return t;
        };
        __egretProto__.btn_new_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_new = t;
            this.__s(t, ["source", "x", "y"], ["new_jpg", 570, 40]);
            return t;
        };
        __egretProto__.btn_open_voice_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_open_voice = t;
            this.__s(t, ["source", "visible", "x", "y"], ["closeVolice_png", false, 603, 362]);
            return t;
        };
        __egretProto__.btn_pause_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_pause = t;
            this.__s(t, ["source", "x", "y"], ["pause_jpg", 570, 220]);
            return t;
        };
        __egretProto__.btn_start_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_start = t;
            this.__s(t, ["source", "x", "y"], ["start_jpg", 570, 100]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "visible", "x", "y"], ["floor_jpg", false, 0, 0]);
            return t;
        };
        __egretProto__.win_img_i = function () {
            var t = new egret.gui.UIAsset();
            this.win_img = t;
            this.__s(t, ["source", "visible", "x", "y"], ["yingjiemian_png", false, 264, 100]);
            return t;
        };
        UIMainViewSkin._skinParts = ["btn_new", "btn_diffcult", "btn_pause", "btn_back", "btn_start", "btn_open_voice", "btn_close_voice", "win_img"];
        return UIMainViewSkin;
    })(egret.gui.Skin);
    skins.UIMainViewSkin = UIMainViewSkin;
    UIMainViewSkin.prototype.__class__ = "skins.UIMainViewSkin";
})(skins || (skins = {}));
