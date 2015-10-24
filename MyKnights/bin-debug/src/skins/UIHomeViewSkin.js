var skins;
(function (skins) {
    var UIHomeViewSkin = (function (_super) {
        __extends(UIHomeViewSkin, _super);
        function UIHomeViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.job_btn_i(), this.__5_i(), this.guild_btn_i(), this.__6_i(), this.arena_btn_i(), this.__7_i(), this.setting_btn_i(), this.__8_i(), this.fight_btn_i(), this.__9_i(), this.shop_btn_i(), this.__10_i(), this.hire_btn_i(), this.bang_ID_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIHomeViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIHomeViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 0, "home_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [200, "job_title_png", -162]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [12.5, "guild_title_png", -95]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [85, "arena_title_png", 22.5]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [312, "setting_title_png", 104]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [423.5, "quest_title_png", 10]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-334, "shop_title_png", 141.5]);
            return t;
        };
        __egretProto__.arena_btn_i = function () {
            var t = new egret.gui.Button();
            this.arena_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 187, -34.5, skins.BtnHomeArenaSkin, 69.5, 225, 30, 30]);
            return t;
        };
        __egretProto__.bang_ID_i = function () {
            var t = new egret.gui.Button();
            this.bang_ID = t;
            this.__s(t, ["label", "left", "skinName", "top"], ["绑定账号", 51, skins.BtnRedLargeSkin, 172]);
            return t;
        };
        __egretProto__.fight_btn_i = function () {
            var t = new egret.gui.Button();
            this.fight_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 169, 296.5, skins.BtnHomeQuestSkin, -45.5, 209, 50, 50]);
            return t;
        };
        __egretProto__.guild_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 187, -116.5, skins.BtnHomeGuildSkin, -129.5, 225, 10, 10]);
            return t;
        };
        __egretProto__.hire_btn_i = function () {
            var t = new egret.gui.Button();
            this.hire_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 187, -356.5, skins.BtnHomeHireSkin, 22.5, 225, 30, 30]);
            return t;
        };
        __egretProto__.job_btn_i = function () {
            var t = new egret.gui.Button();
            this.job_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width"], [true, 119, 131.5, skins.BtnHomeJobSkin, -161.5, 119]);
            return t;
        };
        __egretProto__.setting_btn_i = function () {
            var t = new egret.gui.Button();
            this.setting_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 155, 197.5, skins.BtnHomeSettingSkin, 155.5, 157, 40, 40]);
            return t;
        };
        __egretProto__.shop_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "skinName", "verticalCenter", "width", "x", "y"], [true, 187, -234.5, skins.BtnHomeShopSkin, 138.5, 225, 20, 20]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-421.5, "hire_title_png", 4.5]);
            return t;
        };
        UIHomeViewSkin._skinParts = ["job_btn", "guild_btn", "arena_btn", "setting_btn", "fight_btn", "shop_btn", "hire_btn", "bang_ID"];
        return UIHomeViewSkin;
    })(egret.gui.Skin);
    skins.UIHomeViewSkin = UIHomeViewSkin;
    UIHomeViewSkin.prototype.__class__ = "skins.UIHomeViewSkin";
})(skins || (skins = {}));
