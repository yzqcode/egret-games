var skins;
(function (skins) {
    var UIJobTeamListItemSkin = (function (_super) {
        __extends(UIJobTeamListItemSkin, _super);
        function UIJobTeamListItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [65, 900]);
            this.elementsContent = [this.join_btn_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.captain_name_i(), this.captain_job_type_i(), this.captain_level_i(), this.team_number_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIJobTeamListItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIJobTeamListItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 120, 276, 5]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 129, 416, 5]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 207, 564, 5]);
            return t;
        };
        __egretProto__.captain_job_type_i = function () {
            var t = new egret.gui.Label();
            this.captain_job_type = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 95, 289, 18]);
            return t;
        };
        __egretProto__.captain_level_i = function () {
            var t = new egret.gui.Label();
            this.captain_level = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 106, 427, 18]);
            return t;
        };
        __egretProto__.captain_name_i = function () {
            var t = new egret.gui.Label();
            this.captain_name = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 228, 10, 18]);
            return t;
        };
        __egretProto__.join_btn_i = function () {
            var t = new egret.gui.Button();
            this.join_btn = t;
            this.__s(t, ["height", "label", "skinName", "x", "y"], [66, "加入", skins.BtnBlueSmallSkin, 788, -2]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 255, 0, 5]);
            return t;
        };
        __egretProto__.team_number_i = function () {
            var t = new egret.gui.Label();
            this.team_number = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 186, 574, 18]);
            return t;
        };
        UIJobTeamListItemSkin._skinParts = ["join_btn", "captain_name", "captain_job_type", "captain_level", "team_number"];
        return UIJobTeamListItemSkin;
    })(egret.gui.Skin);
    skins.UIJobTeamListItemSkin = UIJobTeamListItemSkin;
    UIJobTeamListItemSkin.prototype.__class__ = "skins.UIJobTeamListItemSkin";
})(skins || (skins = {}));
