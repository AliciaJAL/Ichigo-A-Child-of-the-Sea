class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar 
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, window.innerWidth/2, window.innerHeight/2 * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // load images/tile sprites
        this.load.image('player', './assets/player.png')
		this.load.image('crate', './assets/Crate.png')
        this.load.image('sand', './assets/SandTile.png')
		this.load.image('greatWave', './assets/GreatWave.png')
        this.load.image('debris', './assets/debris.png')

		// load menu assets
		this.load.image('title', './assets/Title.png')
		this.load.image('controls', './assets/Controls.png')
		this.load.image('warningSigns', './assets/warningSigns.png')
		this.load.image('mechSign', './assets/mechanicSign.png')
	

        // load spritesheet
        this.load.spritesheet('waveBackground', './assets/waveSheet.png', {
            frameHeight: 695,
			frameWidth: 905
        })

		// load audio
		this.load.audio('greatWaveSFX', './assets/oceanSFX.mp3')
		this.load.audio('waveBackgroundSFX', './assets/wavesSFX.mp3')

			

    }

    create() {
        this.scene.start('menuScene');
    }
}