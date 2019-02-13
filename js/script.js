$(window).on("scroll", function(){
    var positionY = $(this).scrollTop();
    // console.log(positionY);
    if(positionY > 1000){
        $("#scrollToTop").css("opacity", 1);
    }else if(positionY < 1000){
        $("#scrollToTop").css("opacity", 0);
    }
    if(positionY > 100){
        $("#navBar").css("padding", "0");
   }else if(positionY < 99){
       $("#navBar").css("padding", "20");
   }
})

$("#scrollToTop").click(function(){
    $(window).scrollTop(0);
})

// $(window).on("scroll", function(){
//         var positionY = $(this).scrollTop();
//     if(positionY > 100){
//          $("#navBar").css("padding", "0");
//     }else if(positionY < 99){
//         $("#navBar").css("padding", "20");
//     }
// })

// Slider JS 
var slideIndex = 0;
var slides = $(".slides");

showSlide(slideIndex);

function showSlide(numberSlide){
    let idSlide = slides[numberSlide].id;
    $(".slides").removeClass("active");
    $(`#${idSlide}`).addClass("active");
}

$(".arrow").on("click", function(){
    //Si prev
    if($(this).hasClass("prev")){
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    //Si next
    }else if($(this).hasClass("next")){
        slideIndex++;
        if(slideIndex >= slides.length){
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
})
//Slider JS