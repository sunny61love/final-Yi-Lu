$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('.plane').animate({left: "-=20px"},0);
				break;
			// Up Arrow Pressed
			case 38:
			    	$('.plane').animate({top: "-=20px"},0);
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
			    $('.plane').animate({left: "+=20px"},0);
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
			 $('.plane').animate({top: "+=20px"},0);	// Put our code here
				break;
			// attack
			case 65:
			{
				// generate a new bullet
				var newBullet = $('<div>').addClass('bullet').appendTo('.bullets');

				// get the position of plane
				var position = $('.plane').position()

				// set the bullet position to plane's position
				newBullet.css({top:position.top, left:position.left});

				// animate the bullet
				newBullet.animate({top:"-=1000px"}, 600);
			}
			break;

		}
	});
});
$(document).ready(function() {
	$('input').click(function(){
 
 		$('.container').css('display', 'block');
 		$('input').css('display','none');
	});
});


