var skins;
(function (skins) {
    var UIGuildHomeViewSkin = (function (_super) {
        __extends(UIGuildHomeViewSkin, _super);
        function UIGuildHomeViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.guild_notice_group_i(), this.guild_members_group_i(), this.guild_donation_group_i(), this.guild_manager_group_i(), this.guild_tab_btn_bg_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildHomeViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildHomeViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "名称", "center", 0xFFF4CC, "middle", 84, 104, 10]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "职业", "center", 0xFFF4CC, "middle", 84, 304, 10]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "职位", "center", 0xFFF4CC, "middle", 84, 425, 10]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "等级", "center", 0xFFF4CC, "middle", 84, 552, 10]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "状态", "center", 0xFFF4CC, "middle", 84, 737, 10]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "捐献值", "center", 0xFFF4CC, "middle", 96, 320, 3]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [244, "chat_dialog_panel_png", 580, 494, 16]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "捐献金钱能够提高骑士团成员上限数", "center", 0xF9BC0B, "middle", 531, 520, 34]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "当前成员上限数:", "left", 0xFFF4CC, "middle", 242, 575, 75]);
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "名称", "center", 0xFFF4CC, "middle", 81, 134, 3]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "升级后成员上限:", "left", 0xF9BC0B, "middle", 242, 576, 121]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 42, 30, "/", "center", 0xF9BC0B, "middle", 33, 776, 182]);
            return t;
        };
        __egretProto__.__24_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 39, 25, "捐献", "center", 0x000000, false, "middle", 66, 725, 278]);
            return t;
        };
        __egretProto__.__25_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_icon_png", false, 781, 280]);
            return t;
        };
        __egretProto__.__26_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [25, egret.gui.getScale9Grid("13,11,49,3"), "upgrade_bar_bg_png", 488, 546, 218]);
            return t;
        };
        __egretProto__.__27_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [240, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 270, 803, 22]);
            return t;
        };
        __egretProto__.__28_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [240, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 270, 520, 22]);
            return t;
        };
        __egretProto__.__29_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__30_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "副本首杀数:", "right", 0xF9BC0B, "middle", 158, 524, 72]);
            return t;
        };
        __egretProto__.__31_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "创建时间:", "left", 0xF9BC0B, "middle", 120, 823, 72]);
            return t;
        };
        __egretProto__.__32_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "团员人数:", "left", 0xF9BC0B, "middle", 120, 823, 168]);
            return t;
        };
        __egretProto__.__33_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "创建人:", "left", 0xF9BC0B, "middle", 88, 823, 121]);
            return t;
        };
        __egretProto__.__34_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "??????", "center", 0xF9BC0B, "middle", 98, 683, 72]);
            return t;
        };
        __egretProto__.__35_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "??????", "center", 0xF9BC0B, "middle", 98, 683, 121]);
            return t;
        };
        __egretProto__.__36_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "副本通关数:", "right", 0xF9BC0B, "middle", 158, 524, 121]);
            return t;
        };
        __egretProto__.__37_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "骑士团排名:", "right", 0xF9BC0B, "middle", 158, 524, 168]);
            return t;
        };
        __egretProto__.__38_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "chat_title_png", 550, 3]);
            return t;
        };
        __egretProto__.__39_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 34, 30, "荣誉", "center", 0x000000, "middle", 145, 583, 10]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__40_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "chat_title_png", 837, 3]);
            return t;
        };
        __egretProto__.__41_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 34, 30, "信息", "center", 0x000000, "middle", 145, 873, 10]);
            return t;
        };
        __egretProto__.__42_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "申请者", "center", 0xFFF4CC, "middle", 131, 80, 5]);
            return t;
        };
        __egretProto__.__43_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "职业", "center", 0xFFF4CC, "middle", 131, 254, 5]);
            return t;
        };
        __egretProto__.__44_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 30, "等级", "center", 0xFFF4CC, "middle", 131, 377, 5]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0.2, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [345, 0, "chat_dialog_panel_2_jpg", 0, 1098, 20, 20]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [380, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1136, 20, 20]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [227, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 1027, 41, 33]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scaleX", "scaleY", "source", "x", "y"], [91, 0.7, 0.7, "chat_title_png", 426, -4]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 46, 40, "公告", "center", 0x000000, "middle", 177, 461, 0]);
            return t;
        };
        __egretProto__.apply_list_i = function () {
            var t = new egret.gui.Scroller();
            this.apply_list = t;
            this.__s(t, ["height", "width", "x", "y"], [212, 470, 27, 48]);
            t.viewport = this.__29_i();
            return t;
        };
        __egretProto__.btn_accept_apply_i = function () {
            var t = new egret.gui.Button();
            this.btn_accept_apply = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "同意", skins.BtnBlueSmallSkin, 330, 267]);
            return t;
        };
        __egretProto__.btn_apply_detail_i = function () {
            var t = new egret.gui.Button();
            this.btn_apply_detail = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "详情", skins.BtnYellowSmallSkin, 200, 267]);
            return t;
        };
        __egretProto__.btn_change_chairman_i = function () {
            var t = new egret.gui.Button();
            this.btn_change_chairman = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "任命为团长", skins.BtnGreenLargeSkin, 597, 268]);
            return t;
        };
        __egretProto__.btn_dismiss_guild_i = function () {
            var t = new egret.gui.Button();
            this.btn_dismiss_guild = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "解散骑士团", skins.BtnRedLargeSkin, 696, 267]);
            return t;
        };
        __egretProto__.btn_donate_i = function () {
            var t = new egret.gui.Button();
            this.btn_donate = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 70, skins.BtnGreenLargeSkin, 711, 261]);
            return t;
        };
        __egretProto__.btn_exit_guild_i = function () {
            var t = new egret.gui.Button();
            this.btn_exit_guild = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "退出骑士团", skins.BtnRedLargeSkin, 696, 267]);
            return t;
        };
        __egretProto__.btn_kick_i = function () {
            var t = new egret.gui.Button();
            this.btn_kick = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "开除该骑士", skins.BtnRedLargeSkin, 266, 268]);
            return t;
        };
        __egretProto__.btn_memeber_detail_i = function () {
            var t = new egret.gui.Button();
            this.btn_memeber_detail = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "详情", skins.BtnYellowSmallSkin, 479, 268]);
            return t;
        };
        __egretProto__.btn_reject_apply_i = function () {
            var t = new egret.gui.Button();
            this.btn_reject_apply = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "拒绝", skins.BtnRedSmallSkin, 70, 267]);
            return t;
        };
        __egretProto__.donate_list_i = function () {
            var t = new egret.gui.Scroller();
            this.donate_list = t;
            this.__s(t, ["height", "width", "x", "y"], [280, 380, 60, 42]);
            t.viewport = this.__16_i();
            return t;
        };
        __egretProto__.guild_donate_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_donate_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "捐献", skins.BtnGuildTabSkin, 475, 5]);
            return t;
        };
        __egretProto__.guild_donation_group_i = function () {
            var t = new egret.gui.Group();
            this.guild_donation_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [330, 0.5, -3, false, 1091, 20, 20]);
            t.elementsContent = [this.donate_list_i(), this.__17_i(), this.__18_i(), this.label_current_max_i(), this.label_next_max_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.label_donate_exp_max_i(), this.label_donate_exp_i(), this.btn_donate_i(), this.label_donate_money_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.icon_donate_exp_bar_i()];
            return t;
        };
        __egretProto__.guild_manager_group_i = function () {
            var t = new egret.gui.Group();
            this.guild_manager_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [339, 0.5, 0.5, false, 1097, 30, 30]);
            t.elementsContent = [this.__27_i(), this.__28_i(), this.apply_list_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.__33_i(), this.label_create_time_i(), this.label_creator_i(), this.label_guild_members_i(), this.__34_i(), this.__35_i(), this.label_guild_rank_i(), this.__36_i(), this.__37_i(), this.__38_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.btn_exit_guild_i(), this.btn_dismiss_guild_i(), this.__42_i(), this.__43_i(), this.__44_i(), this.btn_reject_apply_i(), this.btn_apply_detail_i(), this.btn_accept_apply_i()];
            return t;
        };
        __egretProto__.guild_member_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_member_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "成员", skins.BtnGuildTabSkin, 255, 5]);
            return t;
        };
        __egretProto__.guild_members_group_i = function () {
            var t = new egret.gui.Group();
            this.guild_members_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [339, 0, -0.5, false, 1088, 10, 10]);
            t.elementsContent = [this.members_list_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.btn_change_chairman_i(), this.btn_kick_i(), this.btn_memeber_detail_i()];
            return t;
        };
        __egretProto__.guild_notice_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_notice_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "公告", skins.BtnGuildTabSkin, 35, 5]);
            return t;
        };
        __egretProto__.guild_notice_group_i = function () {
            var t = new egret.gui.Group();
            this.guild_notice_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [339, 0.5, -2.5, 1091]);
            t.elementsContent = [this.__7_i(), this.label_guild_notice_i(), this.__8_i(), this.__9_i(), this.set_notice_btn_i()];
            return t;
        };
        __egretProto__.guild_set_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_set_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "管理", skins.BtnGuildTabSkin, 695, 5]);
            return t;
        };
        __egretProto__.guild_tab_btn_bg_i = function () {
            var t = new egret.gui.Group();
            this.guild_tab_btn_bg = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [64, 0, -199, 1100, 10, 10]);
            t.elementsContent = [this.guild_notice_btn_i(), this.guild_member_btn_i(), this.guild_donate_btn_i(), this.guild_set_btn_i()];
            return t;
        };
        __egretProto__.icon_donate_exp_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_donate_exp_bar = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [25, egret.gui.getScale9Grid("13,11,49,3"), "upgrade_bar_png", 488, 546, 218]);
            return t;
        };
        __egretProto__.label_create_time_i = function () {
            var t = new egret.gui.Label();
            this.label_create_time = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 1, 25, "2015/07/02", "center", 0xF9BC0B, "middle", 134, 930, 72]);
            return t;
        };
        __egretProto__.label_creator_i = function () {
            var t = new egret.gui.Label();
            this.label_creator = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 1, 25, "????", "center", 0xF9BC0B, "middle", 134, 930, 121]);
            return t;
        };
        __egretProto__.label_current_max_i = function () {
            var t = new egret.gui.Label();
            this.label_current_max = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "???", "center", 0xFFF4CC, "middle", 204, 813, 75]);
            return t;
        };
        __egretProto__.label_donate_exp_i = function () {
            var t = new egret.gui.Label();
            this.label_donate_exp = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 42, 30, "?????????", "right", 0xFFF4CC, "middle", 223, 567, 182]);
            return t;
        };
        __egretProto__.label_donate_exp_max_i = function () {
            var t = new egret.gui.Label();
            this.label_donate_exp_max = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 42, 30, "?????????", "left", 0xF9BC0B, "middle", 223, 797, 182]);
            return t;
        };
        __egretProto__.label_donate_money_i = function () {
            var t = new egret.gui.Label();
            this.label_donate_money = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 39, 25, "123456", "center", 0x000000, false, "middle", 97, 809, 278]);
            return t;
        };
        __egretProto__.label_guild_members_i = function () {
            var t = new egret.gui.Label();
            this.label_guild_members = t;
            this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 1, 25, "??/??", "center", 0xF9BC0B, "middle", 134, 930, 168]);
            return t;
        };
        __egretProto__.label_guild_notice_i = function () {
            var t = new egret.gui.Label();
            this.label_guild_notice = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 192, 35, "center", 0xFFF4CC, "middle", 997, 60, 57]);
            return t;
        };
        __egretProto__.label_guild_rank_i = function () {
            var t = new egret.gui.Label();
            this.label_guild_rank = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 25, "??????", "center", 0xF9BC0B, "middle", 98, 683, 168]);
            return t;
        };
        __egretProto__.label_next_max_i = function () {
            var t = new egret.gui.Label();
            this.label_next_max = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "???", "center", 0xF9BC0B, "middle", 204, 813, 121]);
            return t;
        };
        __egretProto__.members_list_i = function () {
            var t = new egret.gui.Scroller();
            this.members_list = t;
            this.__s(t, ["height", "width", "x", "y"], [221, 1021, 32, 44]);
            t.viewport = this.__10_i();
            return t;
        };
        __egretProto__.set_notice_btn_i = function () {
            var t = new egret.gui.Button();
            this.set_notice_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "修改公告", skins.BtnGreenLargeSkin, 442, 264]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        UIGuildHomeViewSkin._skinParts = ["label_guild_notice", "set_notice_btn", "guild_notice_group", "members_list", "btn_change_chairman", "btn_kick", "btn_memeber_detail", "guild_members_group", "donate_list", "label_current_max", "label_next_max", "label_donate_exp_max", "label_donate_exp", "btn_donate", "label_donate_money", "icon_donate_exp_bar", "guild_donation_group", "apply_list", "label_create_time", "label_creator", "label_guild_members", "label_guild_rank", "btn_exit_guild", "btn_dismiss_guild", "btn_reject_apply", "btn_apply_detail", "btn_accept_apply", "guild_manager_group", "guild_notice_btn", "guild_member_btn", "guild_donate_btn", "guild_set_btn", "guild_tab_btn_bg"];
        return UIGuildHomeViewSkin;
    })(egret.gui.Skin);
    skins.UIGuildHomeViewSkin = UIGuildHomeViewSkin;
    UIGuildHomeViewSkin.prototype.__class__ = "skins.UIGuildHomeViewSkin";
})(skins || (skins = {}));
