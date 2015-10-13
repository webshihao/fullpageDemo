;$(function(){
	$('#fullpage').fullpage({
		verticalCentered: false,
		anchors: ['page1','page2','page3','page4'],
		// navigation: true,
		// navigationPosition: 'right',
		scrollOverflow: true,
		afterLoad: function(link,index){
			switch(index){
				case 1:
					move('.section1 h1').scale(1.5).end();
					move('.section1 p').set('margin-top','5%').duration('2s').end();
					move('.section1 a').rotate(360).delay(3000).end();
					break;
				case 2:
					break;
				case 3:
					move('.section3 img.primarys').rotate(360).set('opacity',1).end(function(){
						move('.section3 img.sports').rotate(360).set('opacity',1).end(function(){
							move('.section3 img.edition').rotate(360).set('opacity',1).end(function(){
								move('.section3 button.primarys').scale(1.3).end(function(){
									move('.section3 button.sports').scale(1.3).end(function(){
										move('.section3 button.edition').scale(1.3).end();
									})
								})
							})
						})
					})
					break;
				case 4:
					break;
				default:
					break;
			}
		}
	});
});