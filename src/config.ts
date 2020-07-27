import * as Phaser from 'phaser';
import { SceneOne } from './scene-one';
import { GAME_WIDTH, GAME_HEIGHT } from './consts';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Sample',

    type: Phaser.AUTO,
    scale: {
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },

    scene: [SceneOne],

    parent: 'game',
    backgroundColor: '#000000',
};

export default gameConfig;