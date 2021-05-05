		$(function () {
			$('img.preloader').hide();//hide all the images on the page
		});
		
		var i = 0;//initialize
		var int=0;//Internet Explorer Fix
		$(window).bind("load", function() {//The load event will only fire if the entire page or document is fully loaded
			var int = setInterval("doThis(i)",500);//500 is the fade in speed in milliseconds
		});

		function doThis() {
			var imgs = $('img.preloader').length;//count the number of images on the page
			if (i >= imgs) {// Loop the images
				clearInterval(int);//When it reaches the last image the loop ends
			}
			$('img.preloader:hidden').eq(0).fadeIn(500);//fades in the hidden images one by one
			i++;//add 1 to the count
		}

/*
     FILE ARCHIVED ON 12:44:49 Dec 22, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:58:22 Jun 27, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 729.878 (3)
  esindex: 0.012
  captures_list: 788.277
  CDXLines.iter: 27.82 (3)
  PetaboxLoader3.datanode: 451.19 (4)
  exclusion.robots: 0.469
  exclusion.robots.policy: 0.44
  RedisCDXSource: 23.472
  PetaboxLoader3.resolve: 420.089 (3)
  load_resource: 168.512
*/