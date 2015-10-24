var skins;
(function (skins) {
    var UISelectKnightViewSkin = (function (_super) {
        __extends(UISelectKnightViewSkin, _super);
        function UISelectKnightViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.btn_select_0_i(), this.label_desc_0_i(), this.btn_select_1_i(), this.label_desc_1_i(), this.btn_select_2_i(), this.label_desc_2_i(), this.player_data_0_i(), this.player_data_1_i(), this.player_data_2_i(), this.btn_add_0_i(), this.btn_add_1_i(), this.btn_add_2_i(), this.new_label_0_i(), this.new_label_1_i(), this.new_label_2_i(), this.name_0_i(), this.name_1_i(), this.name_2_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UISelectKnightViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UISelectKnightViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, 48, 0.5, "选择职业", "center", 0x050404, "middle", -267, 211]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 0, "home_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [485, 0, "chat_dialog_panel_2_jpg", 0, 945]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [515, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 975]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, -239.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 58.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 353.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.btn_add_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_add_0 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-301, "新建角色", skins.UICircleButtonSkin, -30]);
            return t;
        };
        __egretProto__.btn_add_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_add_1 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-1, "新建角色", skins.UICircleButtonSkin, -30]);
            return t;
        };
        __egretProto__.btn_add_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_add_2 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [294, "新建角色", skins.UICircleButtonSkin, -29]);
            return t;
        };
        __egretProto__.btn_select_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_0 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-308, "选择", skins.BtnBlueSmallSkin, 198]);
            return t;
        };
        __egretProto__.btn_select_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_1 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-11, "选择", skins.BtnBlueSmallSkin, 198]);
            return t;
        };
        __egretProto__.btn_select_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_2 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [285, "选择", skins.BtnBlueSmallSkin, 198]);
            return t;
        };
        __egretProto__.label_desc_0_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_0 = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 33, -303, 20, "等级", "center", 0x050404, false, "middle", 121.5, 222]);
            return t;
        };
        __egretProto__.label_desc_1_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_1 = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 31, -6, 20, "等级", "center", 0x040303, false, "middle", 120.5, 222]);
            return t;
        };
        __egretProto__.label_desc_2_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_2 = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 30, 292, 20, "等级", "center", 0x060505, false, "middle", 120, 222]);
            return t;
        };
        __egretProto__.name_0_i = function () {
            var t = new egret.gui.Label();
            this.name_0 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", -303, "名字", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.name_1_i = function () {
            var t = new egret.gui.Label();
            this.name_1 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", -5, "名字", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.name_2_i = function () {
            var t = new egret.gui.Label();
            this.name_2 = t;
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 293, "名字", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.new_label_0_i = function () {
            var t = new egret.gui.Label();
            this.new_label_0 = t;
            this.__s(t, ["horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], [-300, "新建角色", "center", 0x050404, "middle", 53]);
            return t;
        };
        __egretProto__.new_label_1_i = function () {
            var t = new egret.gui.Label();
            this.new_label_1 = t;
            this.__s(t, ["horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], [-3, "新建角色", "center", 0x050404, "middle", 53]);
            return t;
        };
        __egretProto__.new_label_2_i = function () {
            var t = new egret.gui.Label();
            this.new_label_2 = t;
            this.__s(t, ["horizontalCenter", "text", "textColor", "verticalCenter"], [293, "新建角色", 0x050404, 53]);
            return t;
        };
        __egretProto__.player_data_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.player_data_0 = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [263, -303, -27.5, 168]);
            return t;
        };
        __egretProto__.player_data_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.player_data_1 = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [263, -3, -27.5, 168]);
            return t;
        };
        __egretProto__.player_data_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.player_data_2 = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [263, 294, -27.5, 168]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -257.5]);
            return t;
        };
        UISelectKnightViewSkin._skinParts = ["btn_select_0", "label_desc_0", "btn_select_1", "label_desc_1", "btn_select_2", "label_desc_2", "player_data_0", "player_data_1", "player_data_2", "btn_add_0", "btn_add_1", "btn_add_2", "new_label_0", "new_label_1", "new_label_2", "name_0", "name_1", "name_2"];
        return UISelectKnightViewSkin;
    })(egret.gui.Skin);
    skins.UISelectKnightViewSkin = UISelectKnightViewSkin;
    UISelectKnightViewSkin.prototype.__class__ = "skins.UISelectKnightViewSkin";
})(skins || (skins = {}));
