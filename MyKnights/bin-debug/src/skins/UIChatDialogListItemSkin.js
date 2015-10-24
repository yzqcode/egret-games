var skins;
(function (skins) {
    var UIChatDialogListItemSkin = (function (_super) {
        __extends(UIChatDialogListItemSkin, _super);
        function UIChatDialogListItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [97, 604]);
            this.elementsContent = [this.say_back_i(), this.name_frame_i(), this.icon_head_frame_i(), this.chat_player_head_i(), this.level_frame_i(), this.chat_player_level_i(), this.chat_player_say_i(), this.chat_player_name_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIChatDialogListItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIChatDialogListItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.chat_player_level_i = function () {
            var t = new egret.gui.Label();
            this.chat_player_level = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], ["Arial", 30, 24, "0", "center", "middle", 31, 39, 60]);
            return t;
        };
        __egretProto__.chat_player_name_i = function () {
            var t = new egret.gui.Label();
            this.chat_player_name = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 31, 24, "center", 0x060505, "middle", 181, 77, 9]);
            return t;
        };
        __egretProto__.chat_player_say_i = function () {
            var t = new egret.gui.Label();
            this.chat_player_say = t;
            this.__s(t, ["fontFamily", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 47, 20, 0x090808, "middle", 495, 86, 47]);
            return t;
        };
        __egretProto__.icon_head_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_frame = t;
            this.__s(t, ["source", "x", "y"], ["head_bg_frame_png", 0, 0]);
            return t;
        };
        __egretProto__.level_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.level_frame = t;
            this.__s(t, ["source", "x", "y"], ["level_bg_png", 9, 51]);
            return t;
        };
        __egretProto__.name_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [43, "chat_title_bg_png", 219, 54, 2]);
            return t;
        };
        __egretProto__.say_back_i = function () {
            var t = new egret.gui.UIAsset();
            this.say_back = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [47, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", 519, 69, 46]);
            return t;
        };
        __egretProto__.chat_player_head_i = function () {
            var t = new egret.gui.UIAsset();
            this.chat_player_head = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "head_nor_1_png", 55, 10, 9]);
            return t;
        };
        UIChatDialogListItemSkin._skinParts = ["say_back", "name_frame", "icon_head_frame", "chat_player_head", "level_frame", "chat_player_level", "chat_player_say", "chat_player_name"];
        return UIChatDialogListItemSkin;
    })(egret.gui.Skin);
    skins.UIChatDialogListItemSkin = UIChatDialogListItemSkin;
    UIChatDialogListItemSkin.prototype.__class__ = "skins.UIChatDialogListItemSkin";
})(skins || (skins = {}));
