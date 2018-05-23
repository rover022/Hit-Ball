var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var R = /** @class */ (function () {
    function R() {
    }
    R.URL = "resource/";
    R.P_PAIHAI = "my_awesome_leaderboard.";
    R.PREVIDEO_AD = "433380667096621_433969653704389";
    R.PRELOAD_AD = "433380667096621_433969653704389";
    R.dian_start = "Tap To Start!";
    R.game_name = "兔子钻洞";
    return R;
}());
var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.preload = function () {
        this.load.json("config_json", R.URL + 'default.res.json');
        var game = this.game;
        if (!game.device.desktop) { //判断是否是pc
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        }
    };
    Boot.prototype.create = function () {
        this.game.state.start('load', true);
        //game.stage.disableVisibilityChange = true 关闭失去焦点 游戏暂停的功能
    };
    return Boot;
}(Phaser.State));
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Start.prototype.create = function () {
        //		game.state.start('play', true)
        //		return false
        var game = this.game;
        var background = game.add.sprite(0, 0, 'background'); //背景
        background.scale.set(this.game.width / 512, this.game.height / 1024);
        background.alpha = 1;
        var bg = game.add.sprite(0, this.game.height, 'bg');
        bg.tint = 15000000; //Math.random()*0XFFFFFF
        //console.log(bg.tint) //13743738.656000825 15000000
        bg.scale.set(2, 2);
        //bg.blendMode = 0
        bg.alpha = 1;
        this.bg2 = game.add.tileSprite(0, 0, this.game.width, this.game.height, bg.generateTexture());
        this.player = game.add.sprite(game.width / 2, this.game.height - 236, 'player');
        // game.physics.arcade.enable(this.player, Phaser.Physics.ARCADE);
        game.physics.arcade.enable(this.player);
        this.player.anchor.set(0.5, 0.5);
        this.player.scale.set(0.5, 0.5);
        this.player.body.collideWorldBounds = true;
        this.player.body.immovable = true;
        this.fruitGroup = game.add.group();
        this.fruitGroup.enableBody = true;
        //var size = game.cache.getImage('lemon').width
        this.lemon = this.fruitGroup.create(game.width / 2, 200, 'lemon');
        this.lemon.anchor.set(0.5, 0.5);
        this.lemon.scale.set(0.5, 0.5);
        this.lemon.ff = true;
        var applewater_hou = game.add.tileSprite(0, this.game.height - 140, 1024, 128, 'applewater_hou');
        var applewater_qian = game.add.tileSprite(0, this.game.height - 128, 1024, 128, 'applewater_qian');
        applewater_qian.autoScroll(-80, 0);
        applewater_hou.autoScroll(80, 0);
        applewater_qian.scale.set(2, 2);
        applewater_hou.scale.set(2, 2);
        var water1 = game.add.sprite(0, this.game.height - 180, 'water1');
        var water2 = game.add.sprite(0, this.game.height - 150, 'water2');
        water1.scale.set(0.7, 0.7);
        water2.scale.set(0.7, 0.7);
        var tweenwater1 = game.add.tween(water1).to({ y: this.game.height - 150 }, 2000, "Linear", true, 0, -1);
        tweenwater1.yoyo(true, 0);
        var tweenwater2 = game.add.tween(water2).to({ y: this.game.height - 180 }, 2000, "Linear", true, 0, -1);
        tweenwater2.yoyo(true, 0);
        this.apple_ground = game.add.sprite(0, this.game.height - 236, 'apple_ground');
        this.apple_ground.scale.set(this.game.width / 1024, 0.5);
        var startbutton = game.add.button(game.width / 2, game.height / 2, 'start');
        startbutton.scale.set(0.5, 0.5);
        startbutton.inputEnabled = true;
        startbutton.anchor.setTo(0.5, 0.5); //设置按钮的中心点
        startbutton.events.onInputUp.add(function () {
            game.state.start('play', true);
        }, this);
    };
    return Start;
}(Phaser.State));
var LemonSprite = /** @class */ (function (_super) {
    __extends(LemonSprite, _super);
    function LemonSprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LemonSprite;
}(Phaser.Sprite));
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Play.prototype.create = function () {
    };
    Play.prototype.downEvents = function (a, b) {
    };
    Play.prototype.update = function () {
    };
    //	getAngel:function (obj,target){
    //      return Math.atan2(obj.y - target.y, obj.x - target.x)*180/Math.PI;
    // },
    Play.prototype.rotationEvents = function (player, lemon) {
    };
    Play.prototype.creatFruit = function () {
    };
    Play.prototype.actionOnClick = function () {
        this.game.state.start('play', true);
    };
    return Play;
}(Phaser.State));
//# sourceMappingURL=Boot.js.map