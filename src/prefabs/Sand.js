class Sand extends PhysicsObject {

    constructor(scene, x, y, group) {
        super(scene, x, y, "sand", group); // Call Sprite parent class
		
		this.setDisplaySize(window.innerWidth, window.innerHeight / 6)
		this.setOrigin(0, 0)
		//this.setScrollFactor(0)

		// Physics Body (so objects are not exactly on top of the sand)
		let sandHeight = 0.1
		this.body.setSize(this.width , this.height*(1-sandHeight))
		this.body.setOffset(0, this.height*sandHeight)
	}
	update(){
		this.body.x=this.scene.cameras.main.scrollX
	}
}