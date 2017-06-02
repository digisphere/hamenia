jQuery(document).ready(function($){
	$(".mail-link").prepend('<i class="fa fa-envelope"></i>');
	$(".tel-link").prepend('<i class="fa fa-phone"></i>');
	$("#hp-cube h3").each(function(){
		var html = $(this).html();
		$(this).html(html.replace('משאבות', '<span>משאבות</span>'));
	});
	$("#g1-primary-nav-switch").text('תפריט ניווט');
});