 // 获取用户名对象
 user.oninput=function(){
     // alert(111);
     let len=user.value.length;
//  console.log(delIcon);
     
     if(len>0){
         delIcon.style.display='block';

     }else{
         delIcon.style.display='';
     }
 }
 // 点击删除按钮清除内容
 delIcon.onclick=function(){
    user.value="";

     delIcon.style.display='none';
 }
 
$(function () {
    $('#logon #myform .logonf>div').mouseover(function () {
        // alert(1)
        $(this).addClass('loon').siblings().removeClass('loon');

        $('.yardc>ul').removeClass('yardon').eq($(this).index()).addClass('yardon');
    })

    // 初始化表单验证
    $('.yardt').validate({
        //规则
        rules: {
            userName: {
                required: true,
                isUser: true
            },
            pwd: {
                required: true,
                isPwd: true
            }

        },

        //提示信息
        messages: {
            userName: {
                required: '您的账户名和登录名为必填项'
            },
            pwd: {
                required: '密码为必填项'
            }

        }
    })


    //自定义规则

    //用户名
    jQuery.validator.addMethod("isUser", function (value, element) {
        var tel = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "以字母开头,5-16字节,字母数字下划线");


    //自定义规则-密码
    jQuery.validator.addMethod("isPwd", function (value, element) {
        var tel = /^[a-zA-Z]\w{5,17}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "字母开头,在6~18之间,字母、数字和下划线");



   
   



    // 点击删除按钮清除内容
    $('#delIcon').click(function () {
        $(this).css({
            'display':'none',
        });
        $('#user').val('');
    })






})

