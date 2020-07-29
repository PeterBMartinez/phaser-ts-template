import { Player } from "../Classes/player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};

export class BootScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public init() {
        console.log('init');
    }

    public preload() {
        this.load.image('player', 'assets/player.png');
    }

    public create() {
        this.scene.start("Game");
    }
}