$( document ).ready(function() {




window.onscroll = function (event) {
	var topDistance = $("#headerWrap").offset().top;
	
	if(topDistance >= 75){
		console.log('FadeOut');
		$("#headerWrap").css({
		opacity:'0',
		pointerEvents: 'none'
		});
		$("#backToTop").css('opacity','.7');
	} if(topDistance <= 75){
		console.log('FadeIn');
		$("#headerWrap").css({
		opacity:'1',
		pointerEvents: 'inherit'
		});
		$("#backToTop").css('opacity','0');
	}
}



function goToByScroll(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

$("#navRight>a").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("href"));           
});
$("#backToTop").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("href"));           
});


/* $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('footer').css({
	       height: '135px'
       });
   }
   if($(window).scrollTop() + $(window).height() < $(document).height()) {
       $('footer').css({
	       height: '0px'
       });
   }
}); */

 resizeVideo();
function resizeVideo(){
	var streamHeight = $('#videoStream').width() / (16 / 9) ;
	$('#videoStream').height(streamHeight + 'px')	
};

$( window ).resize(function() {
  resizeVideo();
});

});