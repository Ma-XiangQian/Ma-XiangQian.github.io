window.addEventListener("load",function(){

    let site_title=$('title');
    let header=$("#header-top");
    let header_content=$("#header-content");
    let wave = $("#wave-move");
    let article=$("#txt");
    let side=$("#show");
    let ico=$("#ico");
    let backgroud=$("header");

    ico.attr({href:`${config.ico}`});

    backgroud.css({"background-image":`url(${config.backgroud})`});

    if(!config.wave)wave.css({"display":"none"});

    header_content.html(`<h1>${config.title}</h1>
    <h3>${config.sub_title}</h3>`);

    function render(dom){
      let doc=` <h1 title="${config.nav_title}">${config.nav_title}</h1><nav><ul>`;
      let bl3=`</ul><div id="nav-btn"><ul><li></li><li></li><li></li></ul></div></nav> `;
      let bl2=``;
      config.nav_link.forEach(function(val){
        bl2+=`<li><a href="${val.href}" target="_blank">${val.name}</a></li>`
      });
      doc+=bl2;
      doc+=bl3;
      dom.html(doc);
    };
    site_title.html(config.site_title);
    render(header);

    article.html(function(){
      let doc=``;
      config.article.forEach(function(val){
        doc+=`<article><h1>${val.title}</h1><p>${val.content}</p>
          <small>${val.foot}</small>
        </article>`;
      });
      return doc;
    }());

    side.html(function(){
      let doc=``;
      config.side_link.forEach(function(val){
        doc+=`<section class="tag"><h3>${val.title}</h3><ul>`;
        val.hrefs.forEach(function(val){
          doc+=`<li><a href="${val.href}" target="_blank">${val.name}</a></li>`;
        });
        doc+=`</ul></section>`;
      });
      doc+=` <section><h3>作者</h3><div id="about-me">
            <img src="${config.about.img}"><div>
              <p>${config.about.take}</p>
              <ul id="link">
                <li><a href="${config.about.my_site}"><i class="iconfont icon-shouye"></i></a></li>
                <li><a href="${config.about.bz}"><i class="iconfont icon-bilibili-line"></i></a></li>
                <li><a href="${config.about.github}"><i class="iconfont icon-github"></i></a></li>
                <li><a href="${config.about.gitee}"><i class="iconfont icon-gitee2"></i></a></li>
              </ul>
            </div>
          
          </div>
        </section>`;
      return doc;
    }());
    
    this.window.init();

});