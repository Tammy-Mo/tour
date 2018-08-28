/*
* @Author: Administrator
* @Date:   2018-06-19 19:07:38
* @Last Modified by:   admin
* @Last Modified time: 2018-06-28 15:43:44
*/
// nav栏鼠标经过

$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(9).css('color', '#10b041');
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



$(function(){
	 $('.txt_wapper ul li').removeClass('move');
})

var num=0;
var timer;
function go(){
timer=setInterval(function(){
		num++;
		if(num>5){
			num=0;
			$('.img_wapper ul').css('left', -num*229);
			num=1;
		}
		if(num==5){
		$('.txt_wapper ul li').eq(0).animate({'left':0,'opacity':1 });
		$('.txt_wapper ul li').eq(0).siblings('li').css({'left':100,'opacity':0 });

		$('.choose>span').eq(0).css('background', '#07AE72');
		$('.choose>span').eq(0).siblings().css('background', 'rgba(61,61,61,15)');
		}
		$('.img_wapper ul').animate({'left':-num*229});

		$('.txt_wapper ul li').eq(num).animate({'left':0,'opacity':1 });
		$('.txt_wapper ul li').eq(num).siblings('li').css({'left':100,'opacity':0 });

		$('.choose>span').eq(num).css('background', '#07AE72');
		$('.choose>span').eq(num).siblings().css('background', 'rgba(61,61,61,15)');
		console.log(num);

	},2000)
}
go();
$('.choose span').hover(function() {
	clearInterval(timer);
}, function() {
	go();
});
// 点击切换图片
$('.choose span').click(function(event) {
	num=$(this).index();
	$(this).css('background', '#07AE72');
	$(this).siblings().css('background', 'rgba(61,61,61,15)');
	$('.img_wapper ul').animate({'left':-num*229});
	$('.txt_wapper ul li').eq(num).animate({'left':0,'opacity':1 });
	$('.txt_wapper ul li').eq(num).siblings('li').css({'left':100,'opacity':0 });
});




$('.btn1').hover(function() {
	$(this).stop().animate({'bottom':'-10px'}, 300);
}, function() {
	$(this).stop().animate({'bottom':0}, 300);
});

$('.btn2').hover(function() {
	$(this).stop().animate({'bottom':'-10px'}, 300);
}, function() {
	$(this).stop().animate({'bottom':0}, 300);
});

$('.btn3').hover(function() {
	$('.scan').css({'transform':'scale('+1+')'});
	$('.scan').hover(function(){
		$('.scan').css('display', 'block');
	},function(){
		$('.scan').css({'transform':'scale('+0+')'});
	})
});