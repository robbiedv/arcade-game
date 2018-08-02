// Enemies our player must avoid
var Enemy = function(x, y, speed) {
		this.x = x;
		this.y = y;
		this.size = 60;
		this.speed = speed;
		this.xOrigin = - 100;
    this.sprite = 'images/enemy-bug.png';
		this.boundary = 500; 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
		
		if (this.x < this.boundary) {
			this.x += this.speed * dt;
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
		this.horiz = 101;
		this.vert = 83;
		this.size = 60;
		this.xOrigin = this.horiz * 2;
		this.yOrigin = this.vert * 5 - 20;
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
			if (this.x < this.horiz * 4) {
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
// checks to see if player has come into contact with enemy
	update() {
	  	for(let enemy of allEnemies) {
				// creates a 'kill box' around enemy and player
			if(this.y === enemy.y && this.x < enemy.x + enemy.size && enemy.x < this.x + this.size) {
				// resets player position if contact is made inside 'kill box'
				this.x = this.xOrigin;
				this.y = this.yOrigin;
				// if player reaches river, show the game won modal and reset player position.
			} else if (this.y < 63) {
			  showModal();
				this.x = this.xOrigin;
				this.y = this.yOrigin;
			}
		}
	}	
} 

// functions for modal buttons
let modal = document.querySelector(".modal");
let yesButton = document.querySelector(".yes-button");
let noButton = document.querySelector(".no-button")
let noMessage = document.querySelector('.no-message');

function showModal() {
	modal.style.display = "block";				
}

function hideModal() {
	modal.style.display = "none";
}

yesButton.onclick = function() {
	hideModal();
	noMessage.style.display = "none";
	}

noButton.onclick = function() {
	noMessage.style.display = "block"
}

// Now instantiate your objects.
	const player = new Hero();
	const enemy1 = new Enemy(-100, 63, 200);
	const enemy2 = new Enemy(-100, 146, 250);
	const enemy3 = new Enemy(-300, 146, 250);
	const enemy4 = new Enemy(-100, 229, 100);
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4);

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
