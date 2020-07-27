const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'SceneOne',
};

export class SceneOne extends Phaser.Scene {
    private _text: any;
    constructor() {
        super(sceneConfig);
    }

    public init() {
        console.log('init');
    }

    public preload() {
        console.log('preload');
    }

    public create() {
        console.log('create');
        this._text = this.add.text(20, 20, 'Phaser Template');
    }

    public update() {
        console.log('update');
    }
}