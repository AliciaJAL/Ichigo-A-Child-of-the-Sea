// Name: Parker Lanum & Alicia Landa
// Major Phaser Components: physics systems, cameras, text objects, the animation manager, timer

let config = {
    type: Phaser.AUTO,
	width: window.innerWidth,  // Dynamically set to the window size
    height: window.innerHeight, // Dynamically set to the window size
    scale: {
        mode: Phaser.Scale.RESIZE, // Fit the game to the screen
        autoCenter: Phaser.Scale.CENTER_BOTH // Center the game canvas
    },

	physics: {
        default: 'arcade',
		arcade: {
			gravity: { y: window.innerHeight/2 },  // Gravity applied to all physics objects
			debug: true
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
		},
	},
    scene: [Load, Credits, Win, Menu, Play,GameOver]
	
}

let game = new Phaser.Game(config)