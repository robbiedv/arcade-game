// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	
		// x position
		// y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
		
		// if enemy pos is within canvas
				// move right
				// change x pos by * dt
		// else 
				// reset enemy pos to original pos
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
		this.x = 200;
		this.y = 420;
		this.sprite = 'images/char-boy.png';
	}
	render() {
		 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
} 

const player = new Hero();

				// METHODS
						// update()
								// check for collision
										// if player position collide with enemy
								// check for game won
										// if hero position on top tile 
						// render()
								// draw hero on current x y coord

						// handleInput() 
								// update hero x y position to match keystrokes
						//resetHero
								// on collision or game won reset hero to original position

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
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
