$(function () {
    //独家提供
    $(".Exc").tyslide({
        boxh: 500,//盒子的高度
        w: 1200,//盒子的宽度
        h: 436,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 5,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: false //是否显示数字
    });

    // jq写
    $('#Exclusive .ful li').on('mouseover', function () {
        // alert(1)
        //给当前li加上类名,其它兄弟去掉类名 current
        $(this).addClass('current').siblings().removeClass('current');

        //匹配对应内容  通过索引来匹配
        //获取当前li的索引
        // let index=$(this).index();

        //把对应的内容打开  注意: 先把所有ul上的on删除, 再给指定索引值为index的ul 加一个on
        $('#Exclusive .Exc').removeClass('on').eq($(this).index()).addClass('on');
    })

    // 首页轮播效果
    //主轮播图
    $("#bannerInner").tyslide({
        boxh: 400,//盒子的高度
        w: 996,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 24,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });


    // 换一批
    // 设置变量
    let index = 0;
    // 获取ul的高度
    let listH = $('.list').outerHeight();
    console.log(listH);
    // 获取所有liat的长度
    let len = $('.proList .list').length;
    console.log(len);

    // 注册事件
    $('#gusselove .ftitle p').on('click', function () {
        // alert(1)
        index++;
        // 判定
        if (index == len) {
            index = 0;
            $('.proList').css({
                'top': '0px',
            })
        }
        $('.proList').css({
            'top': -index * listH + 'px',
        })
    })

    //新书畅销榜---手风琴效果
    //注册事件
    $('#newbook .ebookR ul li').mouseover(function () {
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

    // 首页轮播效果
    //主轮播图
    $("#banner .bannerfl").tyslide({
        boxh: 425,//盒子的高度
        w: 996,//盒子的宽度
        h: 425,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 24,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    //新书畅销榜---手风琴效果
    //注册事件
    $('#banner .ebookR ul li').mouseover(function () {
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
})