var skins;
(function (skins) {
    var UIQuestButtonsViewSkin = (function (_super) {
        __extends(UIQuestButtonsViewSkin, _super);
        function UIQuestButtonsViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.btn_hire_i(), this.btn_report_i(), this.icon_report_flag_i(), this.icon_hire_flag_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIQuestButtonsViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIQuestButtonsViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.btn_report_i = function () {
            var t = new egret.gui.Button();
            this.btn_report = t;
            this.__s(t, ["label", "left", "skinName", "top"], ["攻打", 27, skins.BtnWarReportSkin, 237]);
            return t;
        };
        __egretProto__.icon_hire_flag_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hire_flag = t;
            this.__s(t, ["left", "source", "top", "touchEnabled"], [97, "gou_png", 166, false]);
            return t;
        };
        __egretProto__.icon_report_flag_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_report_flag = t;
            this.__s(t, ["left", "source", "top", "touchEnabled"], [98, "exclamation_png", 297, false]);
            return t;
        };
        __egretProto__.btn_hire_i = function () {
            var t = new egret.gui.Button();
            this.btn_hire = t;
            this.__s(t, ["label", "left", "skinName", "top"], ["攻打", 27, skins.BtnHireSkin, 103]);
            return t;
        };
        UIQuestButtonsViewSkin._skinParts = ["btn_hire", "btn_report", "icon_report_flag", "icon_hire_flag"];
        return UIQuestButtonsViewSkin;
    })(egret.gui.Skin);
    skins.UIQuestButtonsViewSkin = UIQuestButtonsViewSkin;
    UIQuestButtonsViewSkin.prototype.__class__ = "skins.UIQuestButtonsViewSkin";
})(skins || (skins = {}));
