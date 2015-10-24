var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var CleanCdDlgSkin = (function (_super) {
        __extends(CleanCdDlgSkin, _super);
        function CleanCdDlgSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.clean_btn_i(), this.__6_i(), this.close_area_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.diamond_text_i(), this.award_icon_2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(CleanCdDlgSkin.prototype, "skinParts", {
            get: function () {
                return CleanCdDlgSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        CleanCdDlgSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [224, egret.Rectangle(84,20,79,217), "背弹底", 371, 135, 455]);
            return t;
        };
        CleanCdDlgSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "scale9Grid", "source", "top", "width"], [0.5, 114, 157, egret.Rectangle(15,14,18,20), "背弹框底", 479, 326]);
            return t;
        };
        CleanCdDlgSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "touchEnabled", "x", "y"], ["Arial", 25, "确认", 16777215, false, 380, 617]);
            return t;
        };
        CleanCdDlgSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "touchEnabled", "x", "y"], ["Arial", 25, "取消", 0xFFFFFF, false, 209, 617]);
            return t;
        };
        CleanCdDlgSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 43, 25, "消除所有技能冷却时间", "center", 16762624, "middle", 303, 168, 495]);
            return t;
        };
        CleanCdDlgSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, 18, "花费", "right", 0xFFFFFF, "middle", 50, 243, 551]);
            return t;
        };
        CleanCdDlgSkin.prototype.award_icon_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_icon_2 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [29, "钻石", 29, 299, 549]);
            return t;
        };
        CleanCdDlgSkin.prototype.clean_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.clean_btn = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [52, "fight_btn_red_png", 122, 347, 607]);
            return t;
        };
        CleanCdDlgSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [52, "fight_btn_gray_png", 122, 176, 607]);
            return t;
        };
        CleanCdDlgSkin.prototype.diamond_text_i = function () {
            var t = new egret.gui.Label();
            this.diamond_text = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, 18, "x??????", 0xFFFFFF, "middle", 102, 334, 551]);
            return t;
        };
        CleanCdDlgSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        CleanCdDlgSkin._skinParts = ["clean_btn", "close_area", "diamond_text", "award_icon_2"];
        return CleanCdDlgSkin;
    })(egret.gui.Skin);
    skins.CleanCdDlgSkin = CleanCdDlgSkin;
    CleanCdDlgSkin.prototype.__class__ = "skins.CleanCdDlgSkin";
})(skins || (skins = {}));
