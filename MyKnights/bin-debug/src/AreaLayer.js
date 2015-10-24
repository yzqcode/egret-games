var AreaLayer = (function (_super) {
    __extends(AreaLayer, _super);
    function AreaLayer() {
        _super.call(this);
        this.background = null;
        this.city_list = [];
        this.city_top_index = 0;
    }
    var __egretProto__ = AreaLayer.prototype;
    __egretProto__.initAreaLayer = function (quest_layer, area_index) {
        this.quest_layer = quest_layer;
        this.area_id = area_index;
        // Load area mb line
        var area_line = Utils.getLine("area_list", this.area_id);
        if (area_line == null) {
            return;
        }
        this.width = G.win_width;
        this.height = G.win_height;
        this.x = (area_index - 1) * this.width;
        this.y = 0;
        this.quest_layer.addChild(this);
        this.area_name = area_line[area_list_name];
        // Load background
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes(this.getBackgroundName(area_line[area_list_background]));
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = (this.height - this.background.height) / 2;
        // Load area title
        var title_bg = new egret.Bitmap();
        title_bg.texture = RES.getRes("chat_title_png");
        title_bg.anchorX = 0.5;
        title_bg.anchorY = 0;
        title_bg.scaleX = 0.72;
        title_bg.scaleY = 0.72;
        title_bg.x = this.width / 2;
        title_bg.y = 65;
        this.addChild(title_bg);
        // Add area name
        var area_name_text = new egret.TextField();
        area_name_text.anchorX = 0.5;
        area_name_text.anchorY = 0;
        area_name_text.size = 35;
        area_name_text.width = 180;
        area_name_text.height = 35;
        area_name_text.text = this.area_name;
        area_name_text.fontFamily = "Arial";
        area_name_text.textAlign = egret.HorizontalAlign.CENTER;
        area_name_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        area_name_text.textColor = 0x1F1913;
        area_name_text.bold = true;
        area_name_text.x = this.width / 2;
        area_name_text.y = 80;
        this.addChild(area_name_text);
        // Load building list
        var building_sum = area_line[area_list_buildings].length;
        for (var i = 0; i < building_sum; i++) {
            var building_id = area_line[area_list_buildings][i];
            var building_line = Utils.getLine("building_list", building_id);
            if (building_line != null) {
                var building_img = new egret.Bitmap();
                building_img.texture = RES.getRes(this.getBuildingName(building_line[building_list_pic]));
                building_img.x = building_line[building_list_pos_x] * this.width;
                building_img.y = building_line[building_list_pos_y] * this.height;
                this.addChild(building_img);
            }
        }
        this.loadAllCityStatus();
        this.loadSpecialCity();
    };
    __egretProto__.loadSpecialCity = function () {
        if (this.area_id >= Logic.area_id) {
            return;
        }
        var area_line = Utils.getLine("area_list", this.area_id);
        if (area_line == null) {
            return;
        }
        var special_city_id = area_line[area_list_special_city];
        var special_city_line = Utils.getLine("city_list", special_city_id);
        if (special_city_line == null) {
            return;
        }
        var special_city_layer = new SpecialCityLayer();
        special_city_layer.initCityLayer(this, this.area_id, special_city_id);
    };
    __egretProto__.loadAllCityStatus = function () {
        Net.getAllCityStatus(this.area_id);
        console.log("222222 loadAllCityStatus: " + this.area_id);
    };
    __egretProto__.finishGetAllCityStatus = function (data) {
        console.log("222222222222222 finishGetAllCityStatus: ", data);
        this.city_list = [];
        var area_line = Utils.getLine("area_list", this.area_id);
        if (area_line == null) {
            return;
        }
        for (var i = 0; i < data.length; i++) {
            var city_status_info = new CityStatusInfo();
            city_status_info.city_status = data[i][1];
            city_status_info.city_collect_money_end_time = data[i][2];
            city_status_info.city_be_attack_end_time = data[i][3];
            var city_id = area_line[area_list_cities][i];
            var city_layer = new CityLayer();
            city_layer.initCityLayer(this, this.area_id, i, city_id, city_status_info);
            this.city_list.push(city_layer);
        }
        this.city_top_index = this.getChildIndex(this.city_list[this.city_list.length - 1]);
    };
    __egretProto__.finishCollectCityMoney = function (city_index, money, next_time) {
        var city_layer = this.city_list[city_index];
        if (city_layer != null) {
            city_layer.finishCollectCityMoney(money, next_time);
        }
    };
    __egretProto__.refreshAllCityStatus = function () {
        var city_len = this.city_list.length;
        for (var i = 0; i < city_len; i++) {
            var city_layer = this.city_list[i];
            if (city_layer != null) {
                city_layer.refreshCityStatus();
            }
        }
    };
    __egretProto__.getBackgroundName = function (name) {
        return "area_" + name + "_jpg";
    };
    __egretProto__.getBuildingName = function (name) {
        return "rand_building_" + name + "_png";
    };
    return AreaLayer;
})(egret.DisplayObjectContainer);
AreaLayer.prototype.__class__ = "AreaLayer";
