$(document).ready(function() {

	//display hidden mobile links
	$('.icon-menu').on('click', function(){
		$('#hide-mobile-menu').slideToggle().css("display" , "inline-block");
	});


	//calls the lightgallery plugin
    $('#lightgallery-biking').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/biking/1.jpg',
	            'thumb': 'images/biking/1-thumb.jpg',
	            'subHtml': '<h4>Biking 1</h4><p>Wafer candy canes jujubes gingerbread.</p>'
	        }, {
	            'src': 'images/biking/2.jpg',
	            'thumb': 'images/biking/2-thumb.jpg',
	            'subHtml': '<h4>Biking 2</h4><p>Tootsie roll oat cake gingerbread cake.</p>'
	        }, {
	            'src': 'images/biking/3.jpg',
	            'thumb': 'images/biking/3-thumb.jpg',
	            'subHtml': '<h4>Biking 3</h4><p>Chupa chups croissant chocolate bar gummi bears biscuit.</p>'
	        }, {
	        	'src': 'images/biking/4.jpg',
	            'thumb': 'images/biking/4-thumb.jpg',
	            'subHtml': '<h4>Biking 4</h4><p>Dessert gingerbread jelly-o dessert lollipop marshmallow gummi bears.</p>'
	        }, {
	        	'src': 'images/biking/5.jpg',
	            'thumb': 'images/biking/5-thumb.jpg',
	            'subHtml': '<h4>Biking 5</h4><p>Halvah biscuit jelly-o cookie dessert.</p>'
	        }, {
	        	'src': 'images/biking/6.jpg',
	            'thumb': 'images/biking/6-thumb.jpg',
	            'subHtml': '<h4>Biking 6</h4><p>Icing cotton candy donut marzipan cotton candy muffin.</p>'
    		}]
    	});
    });

 	$('#lightgallery-camping').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/camping/1.jpg',
	            'thumb': 'images/camping/1-thumb.jpg',
	            'subHtml': '<h4>Camping 1</h4><p>Dessert gingerbread jelly-o dessert lollipop marshmallow gummi bears.</p>'
	        }, {
	            'src': 'images/camping/2.jpg',
	            'thumb': 'images/camping/2-thumb.jpg',
	            'subHtml': '<h4>Camping 2</h4><p>Tootsie roll oat cake gingerbread cake.</p>'
	        }, {
	            'src': 'images/camping/3.jpg',
	            'thumb': 'images/camping/3-thumb.jpg',
	            'subHtml': '<h4>Camping 3</h4><p>Chupa chups croissant chocolate bar gummi bears biscuit.</p>'
	        }, {
	        	'src': 'images/camping/4.jpg',
	            'thumb': 'images/camping/4-thumb.jpg',
	            'subHtml': '<h4>Camping 4</h4><p>Halvah biscuit jelly-o cookie dessert.</p>'
	        }, {
	        	'src': 'images/camping/5.jpg',
	            'thumb': 'images/camping/5-thumb.jpg',
	            'subHtml': '<h4>Camping 5</h4><p>Icing cotton candy donut marzipan cotton candy muffin.</p>'
	        }, {
	        	'src': 'images/camping/6.jpg',
	            'thumb': 'images/camping/6-thumb.jpg',
	            'subHtml': '<h4>Camping 6</h4><p>Wafer candy canes jujubes gingerbread.</p>'
    		}]
    	});
    });

	$('#lightgallery-fishing').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/fishing/1.jpg',
	            'thumb': 'images/fishing/1-thumb.jpg',
	            'subHtml': '<h4>Fishing 1</h4><p>Brownie biscuit candy canes oat cake pie souffle liquorice.</p>'
	        }, {
	            'src': 'images/fishing/2.jpg',
	            'thumb': 'images/fishing/2-thumb.jpg',
	            'subHtml': '<h4>Fishing 2</h4><p>Muffin jelly-o souffle sesame snaps topping chocolate bar toffee.</p>'
	        }, {
	            'src': 'images/fishing/3.jpg',
	            'thumb': 'images/fishing/3-thumb.jpg',
	            'subHtml': '<h4>Fishing 3</h4><p>Dessert sweet roll bonbon carrot cake ice cream danish.</p>'
	        }, {
	        	'src': 'images/fishing/4.jpg',
	            'thumb': 'images/fishing/4-thumb.jpg',
	            'subHtml': '<h4>Fishing 4</h4><p>Wafer candy canes jujubes gingerbread.</p>'
	        }, {
	        	'src': 'images/fishing/5.jpg',
	            'thumb': 'images/fishing/5-thumb.jpg',
	            'subHtml': '<h4>Fishing 5</h4><p>Pudding danish candy apple pie.</p>'
	        }, {
	        	'src': 'images/fishing/6.jpg',
	            'thumb': 'images/fishing/6-thumb.jpg',
	            'subHtml': '<h4>Fishing 6</h4><p>Halvah biscuit jelly-o cookie dessert.</p>'
    		}]
    	});
    });

$('#lightgallery-hiking').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/hiking/1.jpg',
	            'thumb': 'images/hiking/1-thumb.jpg',
	            'subHtml': '<h4>Hiking 1</h4><p>Chupa chups croissant chocolate bar gummi bears biscuit.</p>'
	        }, {
	            'src': 'images/hiking/2.jpg',
	            'thumb': 'images/hiking/2-thumb.jpg',
	            'subHtml': '<h4>Hiking 2</h4><p>Chocolate bar danish candy canes sugar plum.</p>'
	        }, {
	            'src': 'images/hiking/3.jpg',
	            'thumb': 'images/hiking/3-thumb.jpg',
	            'subHtml': '<h4>Hiking 3</h4><p>Tiramisu macaroon dessert.</p>'
	        }, {
	        	'src': 'images/hiking/4.jpg',
	            'thumb': 'images/hiking/4-thumb.jpg',
	            'subHtml': '<h4>Hiking 4</h4><p>Cake dragée sweet cupcake lemon drops.</p>'
	        }, {
	        	'src': 'images/hiking/5.jpg',
	            'thumb': 'images/hiking/5-thumb.jpg',
	            'subHtml': '<h4>Hiking 5</h4><p>Jelly sweet roll topping chocolate croissant croissant candy canes.</p>'
	        }, {
	        	'src': 'images/hiking/6.jpg',
	            'thumb': 'images/hiking/6-thumb.jpg',
	            'subHtml': '<h4>Hiking 6</h4><p>Chupa chups donut powder cake dragee apple pie cake. Carrot cake wafer sweet pudding gummi bears muffin.</p>'
    		}]
    	});
    });

	$('#lightgallery-kayaking').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/kayaking/1.jpg',
	            'thumb': 'images/kayaking/1-thumb.jpg',
	            'subHtml': '<h4>Kayaking 1</h4><p>Tootsie roll oat cake gingerbread cake.</p>'
	        }, {
	            'src': 'images/kayaking/2.jpg',
	            'thumb': 'images/kayaking/2-thumb.jpg',
	            'subHtml': '<h4>Kayaking 2</h4><p>Dessert bear claw sweet muffin sugar plum jujubes pastry souffle.</p>'
	        }, {
	            'src': 'images/kayaking/3.jpg',
	            'thumb': 'images/kayaking/3-thumb.jpg',
	            'subHtml': '<h4>Kayaking 3</h4><p>Icing cotton candy donut marzipan cotton candy muffin.</p>'
	        }, {
	        	'src': 'images/kayaking/4.jpg',
	            'thumb': 'images/kayaking/4-thumb.jpg',
	            'subHtml': '<h4>Kayaking 4</h4><p>Chocolate bar danish candy canes sugar plum.</p>'
	        }, {
	        	'src': 'images/kayaking/5.jpg',
	            'thumb': 'images/kayaking/5-thumb.jpg',
	            'subHtml': '<h4>Kayaking 5</h4><p>Sesame snaps sweet roll gummi bears oat cake jelly-o chupa chups powder.</p>'
	        }, {
	        	'src': 'images/kayaking/6.jpg',
	            'thumb': 'images/kayaking/6-thumb.jpg',
	            'subHtml': '<h4>Kayaking 6</h4><p>Tootsie roll oat cake gingerbread cake.</p>'
    		}]
    	});
    });

	$('#lightgallery-wildlife').on('click', function(){

    	$(this).lightGallery({
    		dynamic: true,
    		dynamicEl:[{

    			"src": 'images/wildlife/1.jpg',
	            'thumb': 'images/wildlife/1-thumb.jpg',
	            'subHtml': '<h4>Wildlife 1</h4><p>Dessert cookie gingerbread tootsie roll bonbon gummies marzipan muffin. Toffee bonbon marzipan muffin danish.</p>'
	        }, {
	            'src': 'images/wildlife/2.jpg',
	            'thumb': 'images/wildlife/2-thumb.jpg',
	            'subHtml': '<h4>Wildlife 2</h4><p>Halvah cookie marzipan sugar plum chocolate bar.</p>'
	        }, {
	            'src': 'images/wildlife/3.jpg',
	            'thumb': 'images/wildlife/3-thumb.jpg',
	            'subHtml': '<h4>Wildlife 3</h4><p>Pudding cake dessert tootsie roll cheesecake pie cake.</p>'
	        }, {
	        	'src': 'images/wildlife/4.jpg',
	            'thumb': 'images/wildlife/4-thumb.jpg',
	            'subHtml': '<h4>Wildlife 4</h4><p>Icing cotton candy donut marzipan cotton candy muffin.</p>'
	        }, {
	        	'src': 'images/wildlife/5.jpg',
	            'thumb': 'images/wildlife/5-thumb.jpg',
	            'subHtml': '<h4>Wildlife 5</h4><p> Cookie pie pastry danish lollipop wafer.</p>'
	        }, {
	        	'src': 'images/wildlife/6.jpg',
	            'thumb': 'images/wildlife/6-thumb.jpg',
	            'subHtml': '<h4>Wildlife 6</h4><p>Souffle cupcake sesame snaps pastry fruitcake.</p>'
    		}]
    	});
    });

});