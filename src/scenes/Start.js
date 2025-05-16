import Phaser from '../lib/phaser.js'

export default class Start extends Phaser.Scene{

    constructor()
	{
		super('start')
        this.playButton = undefined
    }
    
    preload()
    {
        this.load.image('bg', 'assets/background_space.jpg')
        this.load.image('player', 'assets/player_1.png')
        this.load.image('title', 'assets/title.png')
        this.load.image('start', 'assets/start_button1.png')
    }

    create()
    {
        this.add.image(240,320,'bg')
        this.add.image(240,300,'title').setScale(0.5)
        this.add.text(120,350,'Created by Shaquille Nathan')
        this.add.image(240,200,'player')
        this.playButton = this.add.image(240,450,'start').setInteractive()
        this.playButton.on('pointerdown', () => {
            this.scene.start('shooter-space')
           }, this)
    }
    

}
