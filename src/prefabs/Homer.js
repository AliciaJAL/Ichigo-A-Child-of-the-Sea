class Homer extends PhysicsObject {

    constructor(scene, x, y, group) {
        super(scene, x, y, "home", group); // Call Sprite parent class
		
		this.setDisplaySize(600, window.innerHeight/1.3 )
		this.setOrigin(0, 1)


		// Setting Physics
		this.body.setAllowGravity(false)
		this.body.setImmovable(true)		

		this.body.setSize(this.width/3, this.height/16)
		this.body.setOffset(this.width/1.9, this.height/1.75)
	}
}