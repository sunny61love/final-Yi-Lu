// enemies
var enemies = [];

// bullet
var allBullets = [];

// fire a bullet
var fireBullet = function() {
	// every time we add a new bullet, check the front of allBullets
	if (allBullets && allBullets.length > 0) {
		var firstBullet = allBullets[0];
		if (firstBullet.position().top <= -2000) {
			allBullets.shift();
		}
	}

	// generate a new bullet
	var newBullet = $('<div>').addClass('bullet').appendTo('.bullets');

	// get the position of plane
	var position = $('.plane').position()

	// set the bullet position to plane's position
	newBullet.css({
		top: position.top,
		left: position.left
	});

	// animate the bullet
	newBullet.animate({
		top: "-=2000px"
	}, 2000);

	allBullets.push(newBullet);
};

// enemy
var enemyPlay = function() {

	// check if the bullet collide with the enemy
	for (var iB in allBullets) {
		var bullet = allBullets[iB];
		for (var i = 0; i < enemies.length; ++i) {
			var enemy = enemies[i];

			if (!bullet || !enemy) {
				continue;
			}

			var bulletPosition = bullet.position();
			var enemyPosition = enemy.position();
			var enemyWidth = enemy.width();
			var enemyHeight = enemy.height();

			if (bulletPosition.left >= enemyPosition.left &&
				bulletPosition.left <= enemyPosition.left + enemyWidth &&
				bulletPosition.top <= enemyPosition.top &&
				bulletPosition.top >= enemyPosition.top - enemyHeight) {
				// delete from enemies
				enemy.css({
					display: 'none'
				});
				enemies.splice(i, 1);

				bullet.css({
					display: 'none'
				});
				return;
			}
		}
	}
}

// game loop
var gamePlay = function() {
	enemyPlay();
};

$(document).ready(function() {
	// generate 8 enemies in the array
	var init_x = 10;
	while (!enemies || enemies.length < 8) {
		var newEnemy = $('<div>').addClass('enemy').appendTo('.enemies');
		var randomTop = Math.random() * 200;
		var randomLeft = init_x + Math.random() * 50 + 150;
		init_x = randomLeft;
		newEnemy.css({
			left: randomLeft,
			top: randomTop
		});
		enemies.push(newEnemy);
	}

	$(document).keydown(function(key) {
		switch (parseInt(key.which, 10)) {
			// Left arrow key pressed
			case 37:
				$('.plane').animate({
					left: "-=20px"
				}, 0);
				break;
				// Up Arrow Pressed
			case 38:
				$('.plane').animate({
					top: "-=20px"
				}, 0);
				// Put our code here
				break;
				// Right Arrow Pressed
			case 39:
				$('.plane').animate({
					left: "+=20px"
				}, 0);
				// Put our code here
				break;
				// Down Arrow Pressed
			case 40:
				if ($('.plane').position().top < $(window).height() - $('.plane').height() ) {
					$('.plane').animate({
						top: "+=20px"
					}, 0); // Put our code here
				}
				break;
				// attack
			case 65:
				{

				}
				break;

		}
	});
});
$(document).ready(function() {
	$('input').click(function() {
		setInterval(gamePlay);
		setInterval(fireBullet, 600);
		$('.container').css('display', 'block');
		$('input').css('display', 'none');
	});
});