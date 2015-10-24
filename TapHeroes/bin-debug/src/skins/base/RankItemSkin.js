var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var base;
    (function (base) {
        var RankItemSkin = (function (_super) {
            __extends(RankItemSkin, _super);
            function RankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.iconRankBg_i(), this.labelName_i(), this.labelRank_i(), this.iconHead_i(), this.labelStep_i(), this.labelKillNum_i(), this.iconKill_i(), this.labelDifficultyNum_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(RankItemSkin.prototype, "skinParts", {
                get: function () {
                    return RankItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            RankItemSkin.prototype.iconKill_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconKill = t;
                this.__s(t, ["height", "right", "source", "top", "touchEnabled", "visible", "width"], [28, 209, "妖怪图标", 67, false, false, 35]);
                return t;
            };
            RankItemSkin.prototype.iconRankBg_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconRankBg = t;
                this.__s(t, ["height", "scale9Grid", "source", "touchEnabled", "width", "x", "y"], [110, egret.Rectangle(90,20,120,65), "rank_bg_png", true, 510, 0, 2]);
                return t;
            };
            RankItemSkin.prototype.labelDifficultyNum_i = function () {
                var t = new egret.gui.Label();
                this.labelDifficultyNum = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 1, 20, "第八十一难", 0xD0CF0A, true, false, 108, 134, 69]);
                return t;
            };
            RankItemSkin.prototype.labelKillNum_i = function () {
                var t = new egret.gui.Label();
                this.labelKillNum = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 26, 1, 20, "x??", 0xFFFFFF, true, false, 68, 308, 69]);
                return t;
            };
            RankItemSkin.prototype.labelName_i = function () {
                var t = new egret.gui.Label();
                this.labelName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 30, 1, 27, "美猴王", 0xFFFFFF, true, 269, 133, 26]);
                return t;
            };
            RankItemSkin.prototype.labelRank_i = function () {
                var t = new egret.gui.Label();
                this.labelRank = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 62, 1, 40, "?", "center", 0xD0CF0A, true, "middle", 111, 22, 27]);
                return t;
            };
            RankItemSkin.prototype.labelStep_i = function () {
                var t = new egret.gui.Label();
                this.labelStep = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "击杀妖王数：??", 13684490, true, 267, 134, 69]);
                return t;
            };
            RankItemSkin.prototype.iconHead_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconHead = t;
                this.__s(t, ["source", "x", "y"], ["猴子", 404, 13]);
                return t;
            };
            RankItemSkin._skinParts = ["iconRankBg", "labelName", "labelRank", "iconHead", "labelStep", "labelKillNum", "iconKill", "labelDifficultyNum"];
            return RankItemSkin;
        })(egret.gui.Skin);
        base.RankItemSkin = RankItemSkin;
        RankItemSkin.prototype.__class__ = "skins.base.RankItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
