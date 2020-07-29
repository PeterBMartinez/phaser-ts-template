import { Player } from "../Classes/player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    private _text: any;
    private _player: Player;
    private _cursors: any;

    constructor() {
        super(sceneConfig);
    }

    public init() {
        console.log('init');
    }

    public create() {
        this._text = this.add.text(20, 20, 'Phaser Template');
        this._player = new Player(this, 100, 100, 'player', 0);
        this._cursors = this.input.keyboard.createCursorKeys();
    }

    public update() {
        this._player.update(this._cursors);
    }
}