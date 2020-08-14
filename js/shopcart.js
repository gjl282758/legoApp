$(function () {
    //给allSel绑定change事件
    $('.allSel').change(function () {
        // alert(1)
        //获取allSel选中状态
        let checked = $(this).prop('checked');
        //给sigSel添加状态
        $('.sigSel').prop('checked', checked)
        //给另一个allSel设置选中效果
        $('.allSel').prop('checked', checked)

        // console.log(checked)
        allpn()
    })

    // 方式一
    //给sigSel注册change事件
    /* $('.sigSel').change(function(){
        // alert(1)
        // 判定 状态 切标杆
        //定义标杆
        let flag=true;
        //用each循环获取所有sigSel的状态
        $('.sigSel').each(function(){
            let sigs=$(this).prop('checked');
            if(!sigs){
                flag=false;
                return;
            }
            // console.log(sigs)
        })
        
        //用跳出值判定allSel是否有红效果
        $('.allSel').prop('checked',flag);
        
    }) */
    // 方式二
    $('.sigSel').change(function () {
        //获取所有sigsel 的长度
        let LEN = $('.sigSel').length;
        //获取选中的长度
        let len = $('.sigSel:checked').length;
        //判定
        if (LEN == len) {
            $('.allSel').prop('checked', true);
        } else {
            $('.allSel').prop('checked', false);
        }

    })


    //加
    $('.addNum').click(function () {
        // alert(1)
        //获取input里面的值
        let n = $(this).siblings('.num').val();
        //递增
        n++;

        //把n的值返回给input里面
        $(this).siblings('.num').val(n);
        // console.log(n)
        xjprice(this, n)
        allpn()
    })
    // 减
    $('.reNum').click(function () {
        // alert(1)
        //获取input里面的值
        let n = $(this).siblings('.num').val();
        //递增
        n--;
        if (n < 1) {
            $(this).css({
                'cursor': 'not-allowed',
            })
            return;
        }
        //把n的值返回给input里面
        $(this).siblings('.num').val(n);
        // console.log(n)
        xjprice(this, n)
        allpn()
    })

    
    // 封装函数
    // 小计=单价+数量
    function xjprice(obj, n) {
        //获取单价
        let unnitprice = $(obj).closest('tr').find('.sigPrice').text();
        //小计
        let subtotal = (unnitprice * n).toFixed(2);
        // console.log(subtotal)
        //将小计扽总价格追加到小计中
        $(obj).closest('tr').find('.subTotal').text(subtotal);
    }
    //
    function allpn() {
        //1.设置总价和总数量
        let totalpro = 0;
        let totalnum = 0;
        //2.选中商品才进行总价和总数量的计算
        // 遍历 each
        $('.sigSel:checked').each(function () {
            //选中商品总数量
            let comnum = parseInt($(this).closest('tr').find('.num').val());
            // 累加
            totalnum+=comnum;
            //选中商品总价格
            let compro=parseFloat($(this).closest('tr').find('.subTotal').text());
            // 累加
            totalpro+=compro;
        })
        totalpro=totalpro.toFixed(2);
        //3.把总价格和总数量放到指定的位置
        //放总数量
        $('.count').text(totalnum);
        //放总价
        $('.allPrice').text(totalpro);
        // console.log(comnum)

    }


    //删除按钮
    $('#shopCar table tr td a').click(function(){
        $(this).closest('tr').remove();
    })






})