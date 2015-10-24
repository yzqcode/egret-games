//removeEventListener
class UIGuildDonateItem extends egret.gui.Panel {
    public label_name:egret.gui.Label;
    public label_donate_value:egret.gui.Label;

    public guild_home_view:UIGuildHomeView;
    public index:number;
    public donate_info:Guild_Donate_Info;

    public constructor() {
        super();
        this.skinName = "skins.UIGuildDonateItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.y = this.height * this.index;

        this.refreshInfo();
    }

    public setIndex(view:UIGuildHomeView, index:number) {
        this.guild_home_view = view;
        this.index = index;
    }
    public resetMemberInfo(donate_info:Guild_Donate_Info) {
        this.donate_info = donate_info;
    }

    public refreshInfo() {
        if (this.label_name == null) {
            return;
        }

        this.label_name.text = this.donate_info.name;
        this.label_donate_value.text = "" + this.donate_info.donate_value;

    }

}

