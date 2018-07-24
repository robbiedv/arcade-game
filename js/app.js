// Enemies our player must avoid
var Enemy = function(x, y) {
		this.x = x;
		this.y = y;
		this.xOrigin = - 100;
    this.sprite = 'images/enemy-bug.png';
		this.boundary = 505; 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
		
		if (this.x < this.boundary) {
			this.x += 200 * dt;
		} else if (this.x > this.boundary) {
			this.x = this.xOrigin
		}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// hero class

class Hero {
	constructor() {
		this.horz = 101;
		this.vert = 83;
		this.xOrigin = this.horz * 2;
		this.yOrigin = this.vert * 5 - 10;
		this.x = this.xOrigin;
		this.y = this.yOrigin;
		this.sprite = 'images/char-horn-girl.png';
	}
	render() {
		 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	handleInput(input) {
		// moves player left and sets left side boundary
		if (input === 'left') {
			if (this.x > 0) {
			this.x -= 101;
			}
			// moves player right and sets right side boundary
		} else if (input === 'right') {
			if (this.x < this.horz * 4) {
			this.x += 101;
		}
			// moves player up and sets top boundaryery
		} else if (input === 'up') {
			if (this.y > 0) {
			this.y -= 83;
			}
			// moves player down and sets bottom boundary
		} else if (input === 'down') {
			if (this.y < this.vert * 4 )
			this.y += 83;
		}
	}
} 



				// METHODS
						// update()
								// check for collision
										// if player position collide with enemy
								// check for game won
										// if hero position on top tile 
						// render()
								// draw hero on current x y coor 
								// update hero x y position to match keystrokes
						//resetHero
								// on collision or game won reset hero to original position

// Now instantiate your objects.
	const player = new Hero();
	const enemy1 = new Enemy(-100, 55);
	const enemy2 = new Enemy(-100, 141);
	const enemy3 = new Enemy(-100, 227);
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);
// Place the player object in a variable called player



// init allEnemies array
// create and push new enemy to allEnemies array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
