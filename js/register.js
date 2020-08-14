$(function(){
    // 初始化表单验证
    $('#myform').validate({
        //规则
        rules:{
            userName:{
                required:true,
                isUser:true
            },
            pwd:{
                required:true,
                isPwd:true
            },
            surePwd:{
                required:true,
                 equalTo:"#pwd"
            },
            telphone:{
                required:true,
                isMobile:true
            }
        },

        //提示信息
        messages:{
            userName:{
                required:'您的账户名和登录名为必填项'
            },
            pwd:{
                required:'密码为必填项'
            },
            surePwd:{
                required:'再次输入密码必为填项',
                equalTo:"两次密码不一致!请重新输入"
            },
            telphone:{
                required:'手机号码为必填项'
            }
        }
    })


    //自定义规则

    //用户名
    jQuery.validator.addMethod("isUser", function(value, element) { 
        var tel = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "用户名 以字母开头，允许5-16字节，允许字母数字下划线");


    //自定义规则-密码
    jQuery.validator.addMethod("isPwd", function(value, element) { 
    var tel = /^[a-zA-Z]\w{5,17}$/;//正则
    return this.optional(element) || (tel.test(value));
    }, "密码 以字母开头，长度在6~18之间，只能包含字母、数字和下划线");


    //手机号码
    jQuery.validator.addMethod("isMobile", function(value, element) {  
        var length = value.length;  
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;  
        return this.optional(element) || (length == 11 && mobile.test(value));  
        }, "请正确填写手机号码");  


    //用户协议操作
        /* 
            需求:
                如果check没有选中,submit  禁用背景为灰色
                如果check己选中,submit  去掉禁用  背景为cf60

        
        */

        //注册check的点击事件
        $('#check').click(function(){
            //获取check的状态值
            let status=$(this).prop('checked');

            //判定
            if(status){
                //加样式  为 cf60
                $('.btn').addClass('on');

                //设置input标签的不禁用
                $('.btn').prop('disabled',false)

            }else{
               //去掉样式  为 ccc
               $('.btn').removeClass('on');

               //设置input标签的设置禁用
               $('.btn').prop('disabled',true) 
            }

        })



})