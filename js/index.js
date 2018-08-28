/*
* @Author: Administrator
* @Date:   2018-06-15 18:04:01
* @Last Modified by:   admin
* @Last Modified time: 2018-06-25 14:47:54
*/
// 鼠标经过头顶的导航栏事件
$('.hander_nav_li').hover(function() {
	$(this).css('border-top','3px solid #ffffff' );
	$(this).children('.hander_nav_li_ul').show();
}, function() {
		$(this).css('border-top','3px solid rgba(0, 0, 0, 0)' );
		$(this).children('.hander_nav_li_ul').hide();
});

$('.hander_nav_li_ul li').hover(function() {
	$(this).css('background','#cceadf');
}, function() {
		$(this).css('background','#ffffff');
});

//图片加阴影
$('.con_1_ul li').hover(function() {
	$(this).addClass('current');
}, function() {
	$(this).removeClass('current');
});
$('.mgs').hover(function() {
	$(this).children('p').css('color', '#28cc7b');
}, function() {
	$(this).children('p').css('color', '#323232');
});

// 商城切换
$('.box_1_ctr span').hover(function() {
	var i=$(this).index();
	$(this).css('background', '#fff');
	$(this).siblings('span').css('background', 'transparent');
	$('.con_2_box1 ul').eq(i).css('display', 'block');
	$('.con_2_box1 ul').eq(i).siblings('ul').css('display', 'none');

});
$('.con_2_box1 .box_1_mr').hover(function() {
	$(this).children('a').addClass('current-shadow')
}, function() {
	$(this).children('a').removeClass('current-shadow')
});

// 热门游记与话题
$('.box_3_ctr span').hover(function() {
	var i=$(this).index();
	$(this).css('background', '#1ab05f');
	$(this).siblings('span').css('background', 'transparent');
	$('.con3_box1 ul').eq(i).css('display', 'block');
	$('.con3_box1 ul').eq(i).siblings('ul').css('display', 'none');

});
$('.con_3 .box_3_mr a').hover(function() {
	$(this).addClass('current-shadow')
}, function() {
	$(this).removeClass('current-shadow')
});



// con4
// 头像滑动
var num1=0;
setInterval(function(){
		num1++;
		if(num1>9){
			num1=0;
			$('.right2 .right2_roll ul').css('left', -num1*60);
			num1=1;
		}
		$('.right2 .right2_roll ul').animate({'left':-num1*60});
	},2000)

// 右侧鼠标切换图片
var mun=0;
$('.wapper .title li').hover(function() {
	mun=$(this).index();
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('.wapper .w_img li').eq(mun).fadeIn();
	$('.wapper .w_img li').eq(mun).siblings().fadeOut();

});
// 右侧图片自动切换
var timer1;
clearInterval(timer1);
function fade(){
	timer1=setInterval(function(){
		mun++;
		if(mun>2){
			mun=0;
		}
		$('.wapper .w_img li').eq(mun).fadeIn();
		$('.wapper .w_img li').eq(mun).siblings().fadeOut();
		$('.wapper .title li').eq(mun).addClass('current');
		$('.wapper .title li').eq(mun).siblings().removeClass('current');
	},2000)
}
fade();

$('.wapper').hover(function() {
	clearInterval(timer1);
}, function() {
	fade();
});

// footer鼠标移入加阴影
$('.con_m_left .l_left').hover(function() {
	$(this).addClass('current-shadow');
}, function() {
	$(this).removeClass('current-shadow');
});

//头顶图片切换
var timer;
var num=0;
var arr=['智利','法国','日本','台湾','香港']
function go(){
	timer=setInterval(function(){
		var w=$('.hander_img_ul li img').width();
		num++;
		if(num>4){
			num=0;
			$('.hander_img_ul').css('left', -num*w);
			num=1;
		}
		$('.hander_img_ul').animate({'left':-num*w});
		if(num==4){
			$('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut();
		}
		$('.txt').attr("placeholder",arr[num]);
		$('.text_paint').eq(num).fadeIn();
		$('.text_paint').eq(num).siblings('.text_paint').fadeOut();
	},3000)
}
go();
$('.hander_img').hover(function() {
	clearInterval(timer);
}, function() {
	go();
});

// 点击左右切换图片
$('.left').click(function(event) {
	var w=$('.hander_img_ul li img').width();
	num--;
	if(num<0){
        num=4;
        $('.hander_img_ul').css('left', -num*w); 
        num=3;
    }
    if(num==4){
			$('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(1000);
		}
	$('.hander_img_ul').animate({'left':-num*w});
	$('.txt').attr("placeholder",arr[num]);
	$('.text_paint').eq(num).fadeIn();
	$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
});
$('.right').click(function(event) {
	var w=$('.hander_img_ul li img').width();
	num++;
	if(num>4){
        num=0;
        $('.hander_img_ul').css('left', -num*w); 
        num=1;
    }
    if(num==4){
			$('.txt').attr("placeholder",arr[0]);
			$('.text_paint').eq(0).fadeIn();
			$('.text_paint').eq(0).siblings('.text_paint').fadeOut(1000);
		}
	$('.hander_img_ul').animate({'left':-num*w});
	$('.txt').attr("placeholder",arr[num]);
	$('.text_paint').eq(num).fadeIn();
	$('.text_paint').eq(num).siblings('.text_paint').fadeOut(1000);
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


//鼠标经过，icon变色

$('.icon span').hover(function() {
	$(this).css('background','#2aaf55');
	var i=$(this).index();
	if(i==0){
		$(this).children('img').attr('src','images/qq1.png');
	}else if(i==1){
		$(this).children('img').attr('src','images/weibo1.png');
	}else{
		$(this).children('img').attr('src','images/wechat1.png');
	}
	
}, function() {
	$(this).css('background','#fff');
	var i=$(this).index();
	if(i==0){
		$(this).children('img').attr('src','images/qq2.png');
	}else if(i==1){
		$(this).children('img').attr('src','images/weibo2.png');
	}else{
		$(this).children('img').attr('src','images/wechat2.png');
	}
});

//点击弹出输入框
var clock=0;
$(document).click(function(){
	$('.r_search').children('input').css({'width':'0','padding':'0 0'});
	$('.r_search').children('img').attr('src','images/r_search01.jpg');
	clock=0;
})
$('.r_search input').click(function(){
	clock=1;
	$(this).css({'width':'180px','padding':'0 5px'});
	$('.r_search').children('img').attr('src','images/r_search03.jpg');
	return false;
})
$('.r_search').hover(function(){
	$(this).children('input').css({'width':'180px','dding':'0 5px'});
	$(this).children('img').attr('src','images/r_search02.jpg');
},function(){
	if(clock==0){
		$(this).children('input').css({'width':'0','padding':'0 0'});
		$(this).children('img').attr('src','images/r_search01.jpg');
	}
	else{
		$(this).children('input').css({'width':'180px','dding':'0 5px'});
		$(this).children('img').attr('src','images/r_search02.jpg');
	}

})