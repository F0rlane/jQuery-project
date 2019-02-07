$(window).on("scroll", function(){
    var positionY = $(this).scrollTop();
    console.log(positionY);
    if(positionY >= 1600){
        $("#scrollToTop").css("opacity", 1);
    }else if(positionY < 1600){
        $("#scrollToTop").css("opacity", 0);   
    }
})
$("#scrollToTop").click(function(){
    $(window).scrollTop(0);
})