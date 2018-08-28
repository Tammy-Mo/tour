/*
* @Author: Administrator
* @Date:   2018-06-18 15:19:08
* @Last Modified by:   admin
* @Last Modified time: 2018-06-28 15:45:14
*/
// nav栏鼠标经过
$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(7).css('color', '#10b041');
	$(this).children('div').hide();
});
var inp=0;
$('.nav_search').hover(function(event) {
	inp=0;
	$('.nav_search input').stop().animate({'width': '150px'}, 200)
},function(event){
	if(inp==0){
		$('.nav_search input').stop().animate({'width': '0px'}, 200)
	}else{
		$('.nav_search input').css('width','150px');
	}
});
$('.nav_search input').click(function(event) {
	inp=1;
	return false;
});
$(document).click(function(event) {
	inp=0;
	$('.nav_search input').stop().animate({'width': '0px'}, 200)
});



// 鼠标点击切换酒店，民宿
$('.search .s_search>span').click(function(event) {
	/* Act on the event */
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	var i=$(this).index();
	if(i==0){
		$('.change_color>div').animate({'left':'0'}, 1000)
		$('.ss_btn').val('搜索酒店');
		$('.ss_btn').css('background', 'linear-gradient(to right,#ffb631 0,#ff9f0a 100%)');
		$('.ss_input .data span').css('color', '#1467B6');
		$('.where').css('color',' rgb(20, 103, 182)');
	}
	else{
		$('.change_color>div').animate({'left':'-200%'}, 1000)
		$('.fuwu').css('display', 'none');
		$('.ss_btn').val('搜索民宿');
		$('.ss_btn').css('background', 'linear-gradient(to right,#fe9560 0,#fd7d77 100%)');
		$('.ss_input .data span').css('color', '#ff7656');	
		$('.where').css('color',' rgb(255, 118, 86)');
	}
	
});
$('.ss_input .ss_ipt_choose .list > ul li').click(function(event){
	var txt=$(this).html();
	$('.where').val(txt);
})


// 点击输入，弹出复选
$(document).click(function(){
    $('.ss_input .ss_ipt_choose').css('display', 'none');
});
$('.ss_input .where').click(function() {
	/* Act on the event */
	$('.ss_input .ss_ipt_choose').css('display', 'block');
	return false;
});



//鼠标经过显示服务

$('.ss_more .fuwu span') .hover(function() {
	$('.ss_more .fuwu ul').css('display', 'block');
}, function() {
	$('.ss_more .fuwu ul').css('display', 'none');
});


// 点击切换旅游城市
$('.container .con1>ul li').click(function(event) {
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('.container .con1 .con1_box1').siblings('div').css('display', 'none');
	$('.loading').css('display','block');
	var i=$(this).index();
	setTimeout(function(){
		$('.loading').css('display','none');
		$('.container .con1 .con1_box1').eq(i).fadeIn();
		$('.container .con1 .con1_box1').eq(i).siblings('div').css('display', 'none');
	},600)
});

// 鼠标经过遮罩图片
$('.card_img').hover(function() {
	$(this).children('.card_current').stop().fadeIn();
}, function() {
	$(this).children('.card_current').stop().fadeOut();
});

$('.con4>div .img').hover(function() {
	$(this).children('.card_current').stop().fadeIn();
}, function() {
	$(this).children('.card_current').stop().fadeOut();
});



// 弹出信息框
function appear(){
	$('.appear li:nth-child(1)').fadeIn();
	setTimeout(function(){
		$('.appear li:nth-child(2)').fadeIn();
		setTimeout(function(){
			$('.appear li:nth-child(3)').fadeIn();
		},2000)
	},2000);
}

setTimeout(function(){
	appear();

	setTimeout(function(){
		$('.appear li:nth-child(1)').slideUp();
		setTimeout(function(){
			$('.appear li:nth-child(2)').slideUp();
			setTimeout(function(){
				$('.appear li:nth-child(3)').slideUp();;
			},2000)
		},2000);
	},8000)

},2000)

// 点击关闭信息框
$('.appear span').click(function(event) {
	$(this).parent().css('display', 'none');
});


$('.tour_fixed ul li:nth-of-type(2)').hover(function() {
	$('.tour_app').css('display', 'block');
}, function() {
	$('.tour_app').css('display', 'none');
});
$(window).scroll(function(event) {
	if($(window).scrollTop()>=800){
		$('.tour_fixed').css('display', 'block');
	}else{
		$('.tour_fixed').css('display', 'none');
	}
});
$('.tour_fixed ul li:nth-of-type(1)').click(function(event) {
	$('html,body').animate({'scrollTop':'0'}, 500)
});
$('.tour_fixed li').hover(function() {
	$(this).css({'background': '#07AE72','color':'#fff'});
	$(this).children('i').addClass('tour_shake');
}, function() {
	$(this).css({'background': '#fff','color':'#b2b2b2'});
	$(this).children('i').removeClass('tour_shake');
});
