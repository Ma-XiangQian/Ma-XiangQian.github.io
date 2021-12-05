let config={
    // 网站相关配置
    site_title:"牛马笔记",  //网站标题 （浏览器标题栏）
    ico:"./img/ico.ico",   //网站图标


    // 首页
    title:"look forward", //网页标题
    sub_title:"山高路远，看世界，也在找自己.", //网页副标题
    backgroud:`./img/bj${Math.floor(Math.random() * 10) + 1}.png`, //封面背景
    wave:true, //水波浪


    //顶部导航栏
    nav_title:"My Site", // 导航栏标题

    //导航栏链接（在[]中添加,{name:"链接名",herf:"链接地址"} 添加链接）
    nav_link:[
        {name:"首页",href:"/"},
        {name:"Docsify",href:"https://docsify.js.org/#/zh-cn/"},
    ],


    // 侧边栏
    
    //侧边栏导航链接
    side_link:[
        {title:"文档分类",
        hrefs:[
            {name:"Git",href:"#"},
            {name:"Htnl",href:"#"},
            {name:"Css",href:"#"},
            {name:"Javascript",href:"#"},
            {name:"Node.js",href:"#"},
            {name:"Express",href:"#"},
        ]},

        {title:"网站导航",
        hrefs:[
            {name:"我的网站",href:"#"},
            {name:"菜鸟教程",href:"https://www.runoob.com/"},
            {name:"W3C",href:"#"},
            {name:"MDN",href:"#"},
            {name:"Docsify",href:"#"},
        ]}
    ],

    //作者信息
    about:{
        img:"./img/me.JPG",
        take:"有一个早晨我扔掉了所有的昨天，从此我的脚步就轻盈了。",
        my_site:"/",
        bz:"#",
        github:"#",
        gitee:"#",
    },

    
    //文章日志
    article:[
        {title:"About Me",
         content:`一个简简单单的人，写的简简单单的网站。
         现还在学校摸鱼，成绩不入流， 
         会一点儿PS、python、c语言、java、数据库MongoDB、Node.js和JavaScript，
         学了几个月 Web 前端，至今不会修电脑。
         孤独患者，懒癌中期，无脑幻想者。 但却人畜无害，无需远离。兴趣众多，然无一精通。
         正努力成为一个有趣的人。`,
         foot:"写点文字凑凑数！ by 2021-12-5"
        },

        {title:"熬了个夜",
        content:"一个半夜3点钟，终于完成了，这个博客框架，不容易....aaa",
        foot:"明天奖励自己一个大鸡腿！"
        },

        {title:"我的自学生涯！",
        content:`2019年11月16日，自学编程的开始，入门的java。
        2019年12月29日，我放弃了java，跑去学python了。
        在疫情期间我把python基础学完了，
        还学习很多语言，比如golang、c++、kotlin、Android、等，精通各种语言的hello word！输出。
        2020年4月19日，我开学习html css了。
        我确定了学习方向，web前端。
        2020年6月3日，我有了我的第一台笔记本电脑。
        2020年7月19日，我开始学习JavaScript了。
        “从此我上了前端的小船....”`,
        foot:"今晚不熬夜！",
        },
    ],
};