window.init = function(){
    let nav_btn = $("#nav-btn");
    let nav = $("nav>ul:first");
      nav_btn.click(function(){
        nav.toggle(150);
      });

}