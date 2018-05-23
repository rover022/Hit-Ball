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
var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preload.prototype.preload = function () {
        console.log("Preload");
        //this.stage.backgroundColor = "#ff0000";
        var js_o = this.game.cache.getJSON("config_json");
        var arr = js_o.resources;
        console.log(arr.length);
        for (var i = 0; i < arr.length; i++) {
            this.load.image(arr[i]["name"], R.URL + arr[i]["url"]);
        }
        // this.load.progress.a
        // this.load.image('background', R.URL + 'assets/bg_apple.png')
        // this.load.image('bg', R.URL + 'assets/bg_lianxu.png')
        // this.load.image('start', R.URL + 'assets/start.png')
        // this.load.image('apple_ground', R.URL + 'assets/apple_ground.png')
        // this.load.image('applewater_qian', R.URL + 'assets/applewater_qian.png')
        // this.load.image('applewater_hou', R.URL + 'assets/applewater_hou.png')
        // this.load.image('water1', R.URL + 'assets/water1.png')
        // this.load.image('water2', R.URL + 'assets/water2.png')
        // this.load.image('orange', R.URL + 'assets/orange.png')
        // this.load.image('restart', R.URL + 'assets/restart.png')
        // this.load.image('player', R.URL + 'assets/player1.png')
        // this.load.image('lemon', R.URL + 'assets/lemon.png')
        // this.load.image('orange', R.URL + 'assets/orange.png')
        // this.load.image('restart', R.URL + 'assets/restart.png')
    };
    Preload.prototype.create = function () {
        //console.log("create");
        this.game.state.start('start', true);
    };
    return Preload;
}(Phaser.State));
//# sourceMappingURL=Preload.js.map