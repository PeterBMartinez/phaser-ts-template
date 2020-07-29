export class Player extends Phaser.Physics.Arcade.Image {
    public scene: Phaser.Scene;
    private _velocity = 160;

    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.scene.physics.world.enable(this);
        this.setImmovable(false);
        this.setScale(2);
        this.setCollideWorldBounds(true);
        this.scene.add.existing(this);
    }

    public update = (cursors) => {
        this.setVelocity(0)

        if (cursors.left.isDown) {
            (this.body as any).setVelocityX(-this._velocity);
        } else if (cursors.right.isDown) {
            (this.body as any).setVelocityX(this._velocity);
        } else {
        }

        if (cursors.up.isDown) {
            (this.body as any).setVelocityY(-this._velocity);
        } else if (cursors.down.isDown) {
            (this.body as any).setVelocityY(this._velocity);
        } else {

        }
    }
}