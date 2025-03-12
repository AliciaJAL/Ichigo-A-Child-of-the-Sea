class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    create() {
		this.waveGroup = this.physics.add.group()

		this.shadow = this.add.sprite(0, 0, "shadow").setOrigin(0.5, 0.5)
		this.shadow.setScale((window.innerHeight/378)/5)
		this.shadow.setPosition(window.innerWidth / 2, (window.innerHeight / 4)*3)

		this.deathSprite = this.add.physics.sprite(0,0,"playerDeath")
		this.deathSprite.setScale((window.innerHeight/378)/5)
		this.deathSprite.setPosition(this.shadow.x, this.shadow.y)

		this.text = this.add.sprite(0, 0, "gameOver").setOrigin(0.5, 0.5)
	    this.text.setScale((window.innerHeight/271)/5)
		this.text.setPosition(window.innerWidth / 2, window.innerHeight / 4)

		this.wave = new Wave(this, -6000, window.innerHeight,"greatWave", this.waveGroup)

		
        this.backKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

		this.physics.add.collider(this.waveGroup, this.waveGroup,(obj1, obj2) => {
			 
		})
    }

    update(time, dt) {
        if (Phaser.Input.Keyboard.JustDown(this.backKey)) {      
          this.scene.start('menuScene')    
        }

		
		//is.deathSprite.setVelocity(0)
		this.deathSprite.update()
		//is.deathSprite.setVelocity(0)
		this.wave.update()
    }
}