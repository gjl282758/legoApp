$(function () {
    $(window).scroll(function(){
        //获取滚动条到顶部的距离
        let sTop=$('html,body').scrollTop();

        //判定 大于等于300  显示  否则隐藏
        if(sTop >= 300){
            //显示固定头部
         $('#fixedHeader').stop(true).slideDown(500,function(){ 
             //把头部中的搜索框添加到 指定 searchBox中
             $('#SBox .search').stop(true).appendTo('#searchBox')
         });
        
        
         
         

        }else{
         //隐藏固定头部
         $('#fixedHeader').stop(true).slideUp();
         //把固定头部中的 form 放到 SBox中
         $('#searchBox form').stop(true).appendTo('#SBox')
        }
    })
    // 首页轮播效果
    //主轮播图
    $("#bannerInner").tyslide({
        boxh: 440,//盒子的高度
        w: 1000,//盒子的宽度
        h: 390,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    //电子书
    $("#ebook .picSlider").tyslide({
        boxh: 218,//盒子的高度
        w: 332,//盒子的宽度
        h: 218,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 4,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    //电子书tab切换
    // 原生js写
    /* //1.获取所有元素对象
        let lis=document.querySelectorAll('#ebook .ebookTab li');
        let cons=document.querySelectorAll('#ebook .content>ul');
        // console.log(lis,cons)
    //2.批量注册事件
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover',function(){
                // alert(1)
                //清除所有li标签上的类名 
                    for (let j = 0; j < lis.length; j++) {
                        lis[j].className='';
                        cons[j].classList.remove('on');
                        
                    }

                //3.给当前li加上 current
                this.className='current';

                //4.通过索引值来对应内容
                cons[i].classList.add('on');
            })
            
        } */

    // jq写
    $('#ebook .ebookTab li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名 current
        $(this).addClass('current').siblings().removeClass('current');

        //匹配对应内容  通过索引来匹配
        //获取当前li的索引
        // let index=$(this).index();

        //把对应的内容打开  注意: 先把所有ul上的on删除, 再给指定索引值为index的ul 加一个on
        $('#ebook .content>ul').removeClass('on').eq($(this).index()).addClass('on');
    })
    //服装
    $("#cloth .picSlider").tyslide({
        boxh: 342,//盒子的高度
        w: 429,//盒子的宽度
        h: 341,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 4,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });
    //服装tab切换
    // 原生js写
    /* //1.获取所有元素对象
        let lis=document.querySelectorAll('#cloth .clothTab li');
        let cons=document.querySelectorAll('#cloth .content>ul');
        // console.log(lis,cons)
    //2.批量注册事件
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover',function(){
                // alert(1)
                //清除所有li标签上的类名 
                    for (let j = 0; j < lis.length; j++) {
                        lis[j].className='';
                        cons[j].classList.remove('on');
                        
                    }
    
                //3.给当前li加上 current
                this.className='current';
    
                //4.通过索引值来对应内容
                cons[i].classList.add('on');
            })
            
        } */

    // jq写
    $('#cloth .clothTab li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名 current
        $(this).addClass('current').siblings().removeClass('current');

        //匹配对应内容  通过索引来匹配
        //获取当前li的索引
        // let index=$(this).index();

        //把对应的内容打开  注意: 先把所有ul上的on删除, 再给指定索引值为index的ul 加一个on
        $('#cloth .content>ul').removeClass('on').eq($(this).index()).addClass('on');
    })

    //运动
    $("#sports .picSlider").tyslide({
        boxh: 342,//盒子的高度
        w: 429,//盒子的宽度
        h: 341,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 4,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    //户外运动tab切换
    // 原生js写
    /* //1.获取所有元素对象
        let lis=document.querySelectorAll('#sports .sportsTab li');
        let cons=document.querySelectorAll('#sports .content>ul');
        // console.log(lis,cons)
    //2.批量注册事件
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover',function(){
                // alert(1)
                //清除所有li标签上的类名 
                    for (let j = 0; j < lis.length; j++) {
                        lis[j].className='';
                        cons[j].classList.remove('on');
                        
                    }
    
                //3.给当前li加上 current
                this.className='current';
    
                //4.通过索引值来对应内容
                cons[i].classList.add('on');
            })
            
        } */

    // jq写
    $('#sports .sportsTab li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名 current
        $(this).addClass('current').siblings().removeClass('current');

        //匹配对应内容  通过索引来匹配
        //获取当前li的索引
        // let index=$(this).index();

        //把对应的内容打开  注意: 先把所有ul上的on删除, 再给指定索引值为index的ul 加一个on
        $('#sports .content>ul').removeClass('on').eq($(this).index()).addClass('on');
    })

    //童装
    $("#children .picSlider").tyslide({
        boxh: 342,//盒子的高度
        w: 429,//盒子的宽度
        h: 341,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 4,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    //户外运动tab切换
    // 原生js写
    /* //1.获取所有元素对象
        let lis=document.querySelectorAll('#children .childrenTab li');
        let cons=document.querySelectorAll('#children .content>ul');
        // console.log(lis,cons)
    //2.批量注册事件
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover',function(){
                // alert(1)
                //清除所有li标签上的类名 
                    for (let j = 0; j < lis.length; j++) {
                        lis[j].className='';
                        cons[j].classList.remove('on');
                        
                    }
    
                //3.给当前li加上 current
                this.className='current';
    
                //4.通过索引值来对应内容
                cons[i].classList.add('on');
            })
            
        } */

    // jq写
    $('#children .childrenTab li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名 current
        $(this).addClass('current').siblings().removeClass('current');

        //匹配对应内容  通过索引来匹配
        //获取当前li的索引
        // let index=$(this).index();

        //把对应的内容打开  注意: 先把所有ul上的on删除, 再给指定索引值为index的ul 加一个on
        $('#children .content>ul').removeClass('on').eq($(this).index()).addClass('on');
    })

    // 商品推荐
    // 选项卡
    $('#extend .extendtop .extendu li').on('mouseover', function () {
        // alert(111)
        // $(this).css({ backgroundColor: "#f60" });
        //给当前li加上类名,其它兄弟去掉类名 products
        $(this).addClass('products').siblings().removeClass('products');
        //把对应的内容打开  注意: 先把所有ul上的extendout删除, 再给指定索引值为index的ul 加一个extendout
        $('#extend .flag ul').removeClass('extendout').eq($(this).index()).addClass('extendout');
    })

    // 产品选择
    $('#extend .flag .extendshow li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名eon
        $(this).addClass('eon').siblings().removeClass('eon');

    })

    //新书畅销榜---手风琴效果
    //注册事件
    $('#ebook .ebookR ul li').mouseover(function () {
        // alert(1)

        //当前li中显示内容
        // $(this).find('div').show();
        $('div', this).show();//选中当前li里面的div

        //让li同级兄弟中div 隐藏
        $(this).siblings('li').find('div').hide();


        //当前li不显示标题  兄弟显示标题
        //  $(this).find('h4').hide();
        $('h4', this).hide();

        //让li同级兄弟中标题 显示
        $(this).siblings('li').find('h4').show()


    })

    // 楼梯
    // 摸上去变颜色
    let bgcolor = ['#93d46f', '#f4a364', '#c095ef', '#fc97a9', '#d8ebf9']
    $('#floorbox ul li').hover(function () {
        // let bgcolor=$(this).attr('bgcolor');
        $(this).css({
            'width': '80px',
            'background-position-x': '-40px',
            // 'background-color':'pink',
            // 'background-color':bgcolor,
            'background-color': bgcolor[$(this).index()],
        })
    }, function () {
        $(this).css({
            'width': '',
            'background': '',
            'background-position-x': '',
        })
    }).click(function () {
        // alert(1)
        //获取索引值
         let index=$(this).index();
         //通过li索引匹配到当前指定楼层 floors
         let floors=$('.floors').eq(index);
         //获取当前楼层距离网页最上边的距离
         let sTop=$('.floors').eq(index).offset().top;
         console.log(sTop)
        //整合上面三步
        // let sTop = $('.floors').eq($(this).index()).offset().top;

        //把楼层距离最上边的距离 设置到 滚动条上(html,body)
      $('html,body').animate({ 'scrollTop': sTop })
       /*    console.log(sTop) */
    })

    //固定头部
        /* 
            需求:　当滚动条滚动到大于等于300距离时,显示固定头部, 否则隐藏

        */
      

})