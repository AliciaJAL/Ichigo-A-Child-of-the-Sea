class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }


    create() {
        this.title = this.add.sprite(0, 0, "title").setOrigin(0.5, 0.5)
        this.title.setDisplaySize(window.innerWidth*(2089/1067)/6, window.innerHeight*(2089/1067)/6)
        this.title.setPosition(window.innerWidth / 2, window.innerHeight / 4)
       
        this.title = this.add.sprite(0, 0, "credits").setOrigin(0.5, 0.5)
        this.title.setDisplaySize(window.innerWidth*(2129/2098)/4, window.innerHeight*(2129/2098)/4)
        this.title.setPosition(window.innerWidth / 4, window.innerHeight / 4)
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(this.backKey)) {      
          this.scene.start('menuScene')    
        }
    }
}
