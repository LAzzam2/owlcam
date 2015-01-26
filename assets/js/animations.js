$( document ).ready(function() {


  $('#stream iframe, #tlkio').height($('#stream iframe').width()*(.66));
  $('#gallery iframe').height($('#content').height());

window.onscroll = function (event) {
	var topDistance = $("#headerWrap").offset().top;
	
	if($(window).scrollTop() >= 10){
		$("#headerWrap").addClass('fade');
	} else {
		$("#headerWrap").removeClass('fade');
  
	}
}



function goToByScroll(id){
    divs = $('#content>div');
    href = id;

    $.each(divs, function(key, value){
      console.log(value, id);
      if($(this).attr('id') == id){
        $('#stream').css({
          opacity: 0,
          pointerEvents: 'none'
        });
        $(this).parent().toggleClass('show');
        $(this).toggleClass('showContent');
        $('#headerWrap').addClass('hide');
        $('.close').attr('href','infoOpen');
      }
    });
}



$("#navRight a").click(function(e) { 
    if($(this).attr('href') == 'mailto:info@owlcam.co'){
      return
    }else{
      e.preventDefault(); 
      goToByScroll($(this).attr("href"));   
    }        
});

$(".close, #background").click(function(e) { 
  if($('#content').hasClass('show')){
    $('#content').removeClass('show');   
    $('#content>div').removeClass('showContent');
    $('#headerWrap').removeClass('hide');
    $('#stream').css({
      opacity: 1,
      pointerEvents: 'inherit'
    });    
    }
});

resizeVideo();
function resizeVideo(){
  $('#stream iframe, #tlkio').height($('#stream iframe').width()*(.66));
  $('#gallery iframe').height($('#content').height());
  $('#socialNav').css('bottom','auto');
  if(window.innerWidth <= 959){
    $('#online').css('top',$('#stream iframe').height()+10);
  }else if(window.innerWidth > 959){
    $('#online').css('top','auto');
  }
};

$( window ).resize(function() {
  resizeVideo();
});

});