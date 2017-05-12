define(['bootstrap','jquery','jquery_form'], function (ud, $, ud) {
    $('#login-form').ajaxForm({
        success: function () {
            location.pathname='/';
        },
        error: function () {
            console.log('登陆失败！！')
        }
    })
})