class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    create() {
		this.title = this.add.sprite(0, 0, "title").setOrigin(0.5, 0.5)
        this.title.setDisplaySize(window.innerWidth*(2089/1067)/10, window.innerHeight*(2089/1067)/10)
        this.title.setPosition(window.innerWidth / 2, window.innerHeight / 8)
       
        this.title = this.add.sprite(0, 0, "credits").setOrigin(0.5, 0.5)
        this.title.setDisplaySize(window.innerWidth*(2129/2098)/1.3, window.innerHeight*(2129/2098)/1.3)
        this.title.setPosition(window.innerWidth / 2, window.innerHeight / 8*5)

		
        this.backKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.backKey)) {      
          this.scene.start('menuScene')    
        }
    }
}