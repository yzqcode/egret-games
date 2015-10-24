class SpecialCityLayer extends egret.DisplayObjectContainer {
    public area_layer:AreaLayer;
    public area_id:number;

    private special_city_id:number;
    private city_type:number;

    private city_img:egret.Bitmap = null;
    private city_light_img:egret.Bitmap = null;

    public constructor() {
        super();
    }

    public initCityLayer(area_layer:AreaLayer, area_id:number, special_city_id:number) {
        this.area_layer = area_layer;
        this.area_id = area_id;
        this.special_city_id = special_city_id;

        var special_city_line = Utils.getLine("city_list", this.special_city_id);
        if (special_city_line == null) {
            return;
        }

        this.width = 0;
        this.height = 0;
        this.x = special_city_line[city_list_pos_x] * G.win_width;
        this.y = special_city_line[city_list_pos_y] * G.win_height;
        this.area_layer.addChild(this);

        this.city_type = special_city_line[city_list_pic];

        this.city_light_img = new egret.Bitmap();
        this.city_light_img.texture = RES.getRes(this.getCityLightImgName());
        this.city_light_img.anchorX = 0.5;
        this.city_light_img.anchorY = 0;
        this.city_light_img.x = 0;
        this.city_light_img.y = -13;
        this.city_light_img.visible = true;
        this.addChild(this.city_light_img);

        this.city_img = new egret.Bitmap();
        this.city_img.texture = RES.getRes(this.getCityImgName());
        this.city_img.anchorX = 0.5;
        this.city_img.anchorY = 0;
        this.city_img.x = 0;
        this.city_img.y = 0;
        this.city_img.touchEnabled = true;
        this.addChild(this.city_img);
        this.city_img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCity, this);
    }

    private onTouchCity(evt) {
        var quest_layer = G.main_director.current_layer;

        var city_dlg = new UISpecialCityDetailView();
        city_dlg.area_id = this.area_id;
        city_dlg.special_city_id = this.special_city_id;
        city_dlg.guiLayer = quest_layer.guiLayer;
        quest_layer.special_city_detail_view = city_dlg;
        quest_layer.guiLayer.addElement(city_dlg);
    }

    private getCityImgName() {
        return "special_city_png";
    }
    private getCityLightImgName() {
        return "special_city_light_png"
    }
}

