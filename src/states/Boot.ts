class R {
    public static URL: string = "resource/";
    public static P_PAIHAI: string = "my_awesome_leaderboard.";
    static PREVIDEO_AD: string = "433380667096621_433969653704389";
    static PRELOAD_AD: String = "433380667096621_433969653704389";
    public static dian_start: string = "Tap To Start!";
    public static game_name: string = "兔子钻洞";
}

class Boot extends Phaser.State {
    preload() {
        this.load.json("config_json", R.URL + 'default.res.json');
        let game = this.game;
        if (!game.device.desktop) { //判断是否是pc
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true
        }
    }

    create() {
        this.game.state.start('load', true)
        //game.stage.disableVisibilityChange = true 关闭失去焦点 游戏暂停的功能
    }
}



class Start extends Phaser.State {
    private bg2: Phaser.TileSprite;
    private player: Phaser.Sprite;
    private fruitGroup: Phaser.Group;
    private lemon: LemonSprite;
    private apple_ground: Phaser.Sprite;

    create() {
//		game.state.start('play', true)
//		return false
        let game = this.game;
        var background = game.add.sprite(0, 0, 'background') //背景
        background.scale.set(this.game.width / 512, this.game.height / 1024);
        background.alpha = 1

        var bg = game.add.sprite(0, this.game.height, 'bg');
        bg.tint = 15000000 //Math.random()*0XFFFFFF
        //console.log(bg.tint) //13743738.656000825 15000000
        bg.scale.set(2, 2);
        //bg.blendMode = 0
        bg.alpha = 1

        this.bg2 = game.add.tileSprite(0, 0, this.game.width, this.game.height, bg.generateTexture())

        this.player = game.add.sprite(game.width / 2, this.game.height - 236, 'player')
        // game.physics.arcade.enable(this.player, Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.player)
        this.player.anchor.set(0.5, 0.5)
        this.player.scale.set(0.5, 0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.immovable = true;

        this.fruitGroup = game.add.group()
        this.fruitGroup.enableBody = true;
        //var size = game.cache.getImage('lemon').width
        this.lemon = this.fruitGroup.create(game.width / 2, 200, 'lemon')
        this.lemon.anchor.set(0.5, 0.5)
        this.lemon.scale.set(0.5, 0.5);
        this.lemon.ff = true;

        var applewater_hou = game.add.tileSprite(0, this.game.height - 140, 1024, 128, 'applewater_hou')
        var applewater_qian = game.add.tileSprite(0, this.game.height - 128, 1024, 128, 'applewater_qian')
        applewater_qian.autoScroll(-80, 0)
        applewater_hou.autoScroll(80, 0)
        applewater_qian.scale.set(2, 2);
        applewater_hou.scale.set(2, 2);

        var water1 = game.add.sprite(0, this.game.height - 180, 'water1')
        var water2 = game.add.sprite(0, this.game.height - 150, 'water2')
        water1.scale.set(0.7, 0.7);
        water2.scale.set(0.7, 0.7);
        var tweenwater1 = game.add.tween(water1).to({y: this.game.height - 150}, 2000, "Linear", true, 0, -1);
        tweenwater1.yoyo(true, 0);
        var tweenwater2 = game.add.tween(water2).to({y: this.game.height - 180}, 2000, "Linear", true, 0, -1);
        tweenwater2.yoyo(true, 0);

        this.apple_ground = game.add.sprite(0, this.game.height - 236, 'apple_ground')
        this.apple_ground.scale.set(this.game.width / 1024, 0.5);


        var startbutton = game.add.button(game.width / 2, game.height / 2, 'start');
        startbutton.scale.set(0.5, 0.5);

        startbutton.inputEnabled = true;
        startbutton.anchor.setTo(0.5, 0.5); //设置按钮的中心点
        startbutton.events.onInputUp.add(function () {
            game.state.start('play', true)
        }, this);
    }
}

class LemonSprite extends Phaser.Sprite {
    ff: boolean
}

class Play extends Phaser.State {


    create() {

    }

    downEvents(a, b) {


    }

    update() {


    }

    //	getAngel:function (obj,target){
    //      return Math.atan2(obj.y - target.y, obj.x - target.x)*180/Math.PI;
    // },
    rotationEvents(player, lemon) {

    }

    creatFruit() {

    }

    actionOnClick() {
        this.game.state.start('play', true)
    }

}
