window.addEventListener("load",()=>{
    let topnav=$(".top-nav");
    let scroll_top=$(window).scrollTop();
    $(window).scroll(function(){
        if($(window).scrollTop()>=20){
            if($(window).scrollTop()>scroll_top){
                topnav.css({"transform":"translateY(-100px)"});
                scroll_top=$(window).scrollTop();
            }else{
                topnav.css({"transform":"translateY(0px)"});
                topnav.addClass("nav-style");
                scroll_top=$(window).scrollTop();
            }
        }else{
            topnav.removeClass("nav-style");
        }
    });
});