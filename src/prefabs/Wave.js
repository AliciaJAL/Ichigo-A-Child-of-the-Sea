class Wave extends PhysicsObject {
    constructor(scene, x, y, texture = "greatWave", group) {
        super(scene, x, y, texture, group) // call Sprite parent class

        this.setScale((window.innerHeight/this.height)/2.2)
        this.setOrigin(0, 1)

        // this.scene.physics.world.enable(this)
        // Set Physics Body 
        this.body.setSize(this.width * 0.2, this.height*0.8)
        this.body.setOffset(this.width/1.7, this.height/7)

        // Physics Properties
        this.body.allowGravity = false
        this.setCollideWorldBounds(false) 
    }

    update() {
        this.setVelocityX(1500)
    }
}