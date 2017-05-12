define(['jquery'], function($) {
	$('#logout').on('click', function () {
        $.ajax({
            url:'/v6/logout',
            type:'post',
            success: function () {
                location.pathname='/html/home/login.html';
            }
        })
    })
});
