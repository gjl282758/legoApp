$(function () {
    // 种类选择
    // 选项卡
    $('.rightbox b').on('click', function () {
        // alert(1)
        $(this).addClass('active').siblings('b').removeClass('active');
    })


    // 商城加减
    //加
    $('#addnum').on('click', function () {
        // alert(1)
        $('#removenum').css({
            'cursor':'pointer',
            
        })
        // 获取numberbox的值
        let num = $('#numberbox').val();
        // 递加
        num++;
        // 返回给numberbox的值
        $('#numberbox').val(num);
        // console.log(num)
    })
    // /减
    $('#removenum').on('click', function () {
        // alert(1)
        // 获取numberbox的值
        let num = $('#numberbox').val();
        if(num==0){
            $('#removenum').css({
                'cursor':'not-allowed',
                'color':'#ccc'
            })
        }else{
            // 递加
            num--;
        // 返回给numberbox的值
        $('#numberbox').val(num);
        }
        
        
        // console.log(num)
    })

    $('#Popular .pul li').on('mouseover', function () {
        // alert(1)
        $(this).addClass('pon').siblings().removeClass('pon');
    })

    // 商品介绍
    // 看了又看
    $('#look .lookfrp span').on('click', function () {
        // alert(1);
        $(this).addClass('Lon').siblings().removeClass('Lon');
        // 获取commodity下面的子级div
        // let cdiv=$(this).index();
        // console.log(cdiv)
        //把对应的内容打开  注意: 先把所有div上的con删除, 再给指定索引值为index的div 加一个con
        $('#look .commodity>div').removeClass('con').eq($(this).index()).addClass('con');
    })
    // 评价
    $('#look .lookfr .commodity .evaluate span').on('click',function(){
        // alert(1)
        $(this).addClass('evaon').siblings().removeClass('evaon');

        $('#evaluatebox>ul').removeClass('bon').eq($(this).index()).addClass('bon');
    })

   

})