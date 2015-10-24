var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var Loading = (function (_super) {
        __extends(Loading, _super);
        function Loading() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.label_progress_i(), this.dialog_i(), this.input_i(), this.btn_login_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(Loading.prototype, "skinParts", {
            get: function () {
                return Loading._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        Loading.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "source", "touchEnabled", "x"], [1, "loading1", false, 0]);
            return t;
        };
        Loading.prototype.btn_login_i = function () {
            var t = new egret.gui.Button();
            this.btn_login = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter", "visible"], [-10.5, "按钮", skins.base.BtnLoginSkin, 138, false]);
            return t;
        };
        Loading.prototype.dialog_i = function () {
            var t = new egret.gui.UIAsset();
            this.dialog = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [1.5, "duihuakuang", 29, false]);
            return t;
        };
        Loading.prototype.input_i = function () {
            var t = new egret.gui.EditableText();
            this.input = t;
            this.__s(t, ["height", "horizontalCenter", "size", "textAlign", "textColor", "verticalCenter", "visible", "width"], [56, 0, 30, "center", 0x000000, 63, false, 308]);
            return t;
        };
        Loading.prototype.label_progress_i = function () {
            var t = new egret.gui.Label();
            this.label_progress = t;
            this.__s(t, ["height", "horizontalCenter", "text", "textAlign", "verticalAlign", "width", "y"], [47, 0, "读取中", "center", "middle", 353, 505]);
            return t;
        };
        Loading.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "loading", 0]);
            return t;
        };
        Loading._skinParts = ["label_progress", "dialog", "input", "btn_login"];
        return Loading;
    })(egret.gui.Skin);
    skins.Loading = Loading;
    Loading.prototype.__class__ = "skins.Loading";
})(skins || (skins = {}));
