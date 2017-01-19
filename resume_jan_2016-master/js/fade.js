$(document).ready(function() { 
   
var fadeStart=100
    ,fadeUntil=555
    ,fading = $('#buscard')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});


});
