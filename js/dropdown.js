
var $ = jQuery.noConflict();
$(document).ready(function() {
		/* for top navigation */
		$(" #topnav ul ").css({display: "none"}); // Opera Fix
		$(" #topnav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
		
});		 
	

/*
     FILE ARCHIVED ON 12:03:35 Dec 22, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:58:21 Jun 27, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 238.95 (3)
  esindex: 0.011
  captures_list: 345.947
  CDXLines.iter: 16.263 (3)
  PetaboxLoader3.datanode: 442.46 (4)
  exclusion.robots: 0.18
  exclusion.robots.policy: 0.169
  RedisCDXSource: 85.932
  PetaboxLoader3.resolve: 529.371
  load_resource: 769.548
*/
