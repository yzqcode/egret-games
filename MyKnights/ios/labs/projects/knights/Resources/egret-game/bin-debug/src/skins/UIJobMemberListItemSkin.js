var skins;
(function (skins) {
    var UIJobMemberListItemSkin = (function (_super) {
        __extends(UIJobMemberListItemSkin, _super);
        function UIJobMemberListItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [65, 630]);
            this.elementsContent = [this.select_frame_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.member_name_i(), this.member_job_type_i(), this.member_post_i(), this.member_level_i(), this.select_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIJobMemberListItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIJobMemberListItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 106, 273, 5]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 99, 393, 5]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 118, 506, 5]);
            return t;
        };
        __egretProto__.member_job_type_i = function () {
            var t = new egret.gui.Label();
            this.member_job_type = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 83, 285, 18]);
            return t;
        };
        __egretProto__.member_level_i = function () {
            var t = new egret.gui.Label();
            this.member_level = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 97, 517, 18]);
            return t;
        };
        __egretProto__.member_name_i = function () {
            var t = new egret.gui.Label();
            this.member_name = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 228, 15, 18]);
            return t;
        };
        __egretProto__.member_post_i = function () {
            var t = new egret.gui.Label();
            this.member_post = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 33, 28, "center", "middle", 78, 404, 18]);
            return t;
        };
        __egretProto__.select_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_btn = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 65, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 630, 0, 0]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "visible", "width", "x", "y"], [68, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", false, 630, 0, -1]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [55, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 255, 5, 5]);
            return t;
        };
        UIJobMemberListItemSkin._skinParts = ["select_frame", "member_name", "member_job_type", "member_post", "member_level", "select_btn"];
        return UIJobMemberListItemSkin;
    })(egret.gui.Skin);
    skins.UIJobMemberListItemSkin = UIJobMemberListItemSkin;
    UIJobMemberListItemSkin.prototype.__class__ = "skins.UIJobMemberListItemSkin";
})(skins || (skins = {}));
