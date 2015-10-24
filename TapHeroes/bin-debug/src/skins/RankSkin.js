var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var RankSkin = (function (_super) {
        __extends(RankSkin, _super);
        function RankSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.tab_bg_1_i(), this.tab_title_1_i(), this.tab_bg_2_i(), this.tab_title_2_i(), this.__5_i(), this.scroller_view_1_i(), this.scroller_view_2_i(), this.waiting_text_i(), this.__10_i(), this.close_area_i(), this.self_rank_bg_i(), this.iconSelfHead_i(), this.labelSelfName_i(), this.labelSelfRank_i(), this.iconSelfKill_i(), this.labelSelfKillNum_i(), this.labelSelfDifficultyNum_i(), this.labelSelfStep_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(RankSkin.prototype, "skinParts", {
            get: function () {
                return RankSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        RankSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 2, 0, 0, egret.Rectangle(2,2,12,12), "black_square", -2, 10, 10]);
            return t;
        };
        RankSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [827, egret.Rectangle(84,20,79,217), "背弹底", 597, 22, 150]);
            return t;
        };
        RankSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [701, "背弹框底", 540, 50, 242]);
            return t;
        };
        RankSkin.prototype.__6_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        RankSkin.prototype.__7_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__6_i();
            t.elementsContent = [this.scroller_back_1_i()];
            return t;
        };
        RankSkin.prototype.__8_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        RankSkin.prototype.__9_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__8_i();
            t.elementsContent = [this.scroller_back_2_i()];
            return t;
        };
        RankSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "source", "x", "y"], [44, "叉", 556, 171]);
            return t;
        };
        RankSkin.prototype.iconSelfHead_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSelfHead = t;
            this.__s(t, ["source", "x", "y"], ["猴子", 470, 769]);
            return t;
        };
        RankSkin.prototype.iconSelfKill_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSelfKill = t;
            this.__s(t, ["height", "source", "touchEnabled", "visible", "width", "x", "y"], [28, "妖怪图标", false, false, 35, 320, 820]);
            return t;
        };
        RankSkin.prototype.labelSelfDifficultyNum_i = function () {
            var t = new egret.gui.Label();
            this.labelSelfDifficultyNum = t;
            this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 1, 20, "第一难", 0xD0CF0A, true, false, 108, 190, 822]);
            return t;
        };
        RankSkin.prototype.labelSelfKillNum_i = function () {
            var t = new egret.gui.Label();
            this.labelSelfKillNum = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 26, 1, 20, "x0", 0xFFFFFF, true, false, 68, 364, 822]);
            return t;
        };
        RankSkin.prototype.labelSelfName_i = function () {
            var t = new egret.gui.Label();
            this.labelSelfName = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 30, 1, 27, "美猴王", 0xFFFFFF, true, 269, 189, 779]);
            return t;
        };
        RankSkin.prototype.labelSelfRank_i = function () {
            var t = new egret.gui.Label();
            this.labelSelfRank = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 62, 1, 40, "?", "center", 0xD0CF0A, true, "middle", 111, 78, 780]);
            return t;
        };
        RankSkin.prototype.labelSelfStep_i = function () {
            var t = new egret.gui.Label();
            this.labelSelfStep = t;
            this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "击杀妖王数：0", 0xD0CF0A, true, 267, 189, 822]);
            return t;
        };
        RankSkin.prototype.scroller_back_1_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back_1 = t;
            this.__s(t, ["alpha", "bottom", "fillColor", "left", "right", "strokeWeight", "top"], [0, 0, 0x000000, 0, 0, 0, 0]);
            return t;
        };
        RankSkin.prototype.scroller_back_2_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back_2 = t;
            this.__s(t, ["alpha", "bottom", "fillColor", "left", "right", "strokeWeight", "top"], [0, 0, 0x000000, 0, 0, 0, 0]);
            return t;
        };
        RankSkin.prototype.scroller_view_1_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_view_1 = t;
            this.__s(t, ["height", "width", "x", "y"], [670, 510, 65, 252]);
            t.viewport = this.__7_i();
            return t;
        };
        RankSkin.prototype.scroller_view_2_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_view_2 = t;
            this.__s(t, ["height", "visible", "width", "x", "y"], [670, false, 510, 65, 252]);
            t.viewport = this.__9_i();
            return t;
        };
        RankSkin.prototype.self_rank_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_rank_bg = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [110, egret.Rectangle(84,20,79,217), "self_rank_bg_png", 510, 65, 760]);
            return t;
        };
        RankSkin.prototype.__10_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["fillColor", "height", "width", "x", "y"], [0x353535, 121, 540, 50, 752]);
            return t;
        };
        RankSkin.prototype.tab_bg_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.tab_bg_1 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [67, "tab_bg_png", 203, 106, 175]);
            return t;
        };
        RankSkin.prototype.tab_bg_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.tab_bg_2 = t;
            this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.3, 67, "tab_bg_png", 203, 338, 185]);
            return t;
        };
        RankSkin.prototype.tab_title_1_i = function () {
            var t = new egret.gui.Label();
            this.tab_title_1 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 48, 35, "除妖榜", "center", 0xFFC700, false, "middle", 130, 142, 186]);
            return t;
        };
        RankSkin.prototype.tab_title_2_i = function () {
            var t = new egret.gui.Label();
            this.tab_title_2 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 48, 30, "渡难榜", "center", 10132122, false, "middle", 130, 374, 196]);
            return t;
        };
        RankSkin.prototype.waiting_text_i = function () {
            var t = new egret.gui.Label();
            this.waiting_text = t;
            this.__s(t, ["fontFamily", "text", "textAlign", "textColor", "width", "x", "y"], ["Arial", "努力加载中，请稍候.", "center", 16777215, 530, 53, 528]);
            return t;
        };
        RankSkin._skinParts = ["tab_bg_1", "tab_title_1", "tab_bg_2", "tab_title_2", "scroller_back_1", "scroller_view_1", "scroller_back_2", "scroller_view_2", "waiting_text", "close_area", "self_rank_bg", "iconSelfHead", "labelSelfName", "labelSelfRank", "iconSelfKill", "labelSelfKillNum", "labelSelfDifficultyNum", "labelSelfStep"];
        return RankSkin;
    })(egret.gui.Skin);
    skins.RankSkin = RankSkin;
    RankSkin.prototype.__class__ = "skins.RankSkin";
})(skins || (skins = {}));
