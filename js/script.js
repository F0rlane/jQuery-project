$(window).on("scroll", function(){
    var positionY = $(this).scrollTop();
    // console.log(positionY);
    if(positionY >= 1600){
        $("#scrollToTop").css("opacity", 1);
    }else if(positionY < 1600){
        $("#scrollToTop").css("opacity", 0);   
    }
})
    $("#scrollToTop").click(function(){
        $(window).scrollTop(0);
    })

$(window).on("scroll", function(){
        var positionY = $(this).scrollTop();
    if(positionY > 100){
        $("#navBar").addClass("barScroll");
    }else if(positionY < 99){
        $("#navBar").removeClass("barScroll");
    }
})