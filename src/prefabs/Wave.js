class Wave extends PhysicsObject {
    constructor(scene, x, y, texture = "greatWave", group) {
        super(scene, x, y, texture, group) // call Sprite parent class

        this.setScale((window.innerHeight/this.height)/2.2)
        this.setOrigin(0, 1)

        // this.scene.physics.world.enable(this)
        // Set Physics Body 
        this.body.setSize(this.width * 0.6, this.height*0.8)
        this.body.setOffset(this.width/4, this.height/8.8)

        // Physics Properties
        this.body.allowGravity = false
        this.setCollideWorldBounds(false) 
		this.setVelocityX(500)

    }

    update() {
		
    }
}