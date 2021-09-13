$(window).bind('parallaxScro',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.navigation').css('top',(0-(scrolled*.30))+'px');
   $('.parallax').css('top',(0-(scrolled*.6))+'px');
   $('.content').css('top',(0-(scrolled*.60))+'px');
   $('.foot').css('top',(103-(scrolled*.2))+'px');
   $('.follow').css('top',(20-(scrolled*.1))+'px');
 
}
