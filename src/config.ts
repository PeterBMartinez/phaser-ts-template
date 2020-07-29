import * as Phaser from 'phaser';
import { BootScene } from './Scenes/boot';
import { GameScene } from './Scenes/game';
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

    scene: [BootScene, GameScene],

    parent: 'game',
    backgroundColor: '#000000',
};

export default gameConfig;