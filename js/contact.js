jQuery(function() {
  jQuery('.error').hide();
  jQuery(".button").click(function() {
		// validate and process form
		// first hide any error messages
    jQuery('.error').hide();
		
	  var name = jQuery("input#name").val();
		if (name == "") {
      jQuery("span#name_error").show();
      jQuery("input#name").focus();
      return false;
    }
	  var email = jQuery("input#email").val();
	  if (email == "") {
      jQuery("span#email_error").show();
      jQuery("input#email").focus();
      return false;
    }
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email)) {
	jQuery("span#email_error2").show();
    jQuery("input#email").focus();
      return false;
	}
	
	  var msg = jQuery("textarea#msg").val();
	  if (msg == "") {
	  jQuery("span#msg_error").show();
	  jQuery("textarea#msg").focus();
	  return false;
    }
	var dataString = 'name='+ name + '&email=' + email + '&msg=' + msg;
		//alert (dataString);return false;
		
	  jQuery.ajax({
      type: "POST",
      url: "process.php",
      data: dataString,
      success: function() {
        jQuery('#contact_form').html("<div id='message'></div>");
        jQuery('#message').html("<strong>Contact Form Submitted!</strong>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          jQuery('#message');
        });
      }
     });
    return false;
	});
});


/*
     FILE ARCHIVED ON 18:19:34 Jul 31, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:03:47 Jun 27, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 129.307 (3)
  esindex: 0.014
  captures_list: 155.215
  CDXLines.iter: 14.696 (3)
  PetaboxLoader3.datanode: 925.081 (4)
  exclusion.robots: 0.284
  exclusion.robots.policy: 0.262
  RedisCDXSource: 7.113
  PetaboxLoader3.resolve: 874.791
  load_resource: 1740.621
*/	
