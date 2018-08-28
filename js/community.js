/*
* @Author: admin
* @Date:   2018-06-12 15:27:55
* @Last Modified by:   admin
* @Last Modified time: 2018-06-25 14:46:07
*/


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



$('.nav>li').hover(function(event) {
	$(this).children('a').children('span').css('color', '#10b041');
	$(this).children('div').show();
	$(this).siblings().children('div').hide();
},function(event) {
	$(this).children('a').children('span').css('color', 'silver');
	$('.nav>li span').eq(3).css('color', '#10b041');
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


$('.cmt_center ol li').eq(0).mouseenter(function(){
	$(this).css('background','#46baff');
})
$('.cmt_center ol li').eq(0).mouseleave(function(){
	$(this).css('background','#1c95dd');
})


$('.cmt_center ol li').eq(1).mouseenter(function(){
	$(this).css({'background':'#3f9f5f','color':'white'});
	$('.listshow').fadeIn(500);
})
var list=1;
var timer1;
$('.cmt_center ol li').eq(1).mouseleave(function(){
	   $(this).css({'background':'white','color':'#71b688'});
		listshow();
})
$('.listshow').hover(function() {
	clearTimeout(timer1);
	$('.cmt_center ol li').eq(1).css({'background':'#3f9f5f','color':'white'});
}, function() {
	$('.listshow').stop().fadeOut(500);
	$('.cmt_center ol li').eq(1).css({'background':'white','color':'#71b688'});
});
function listshow(){
	timer1=setTimeout(function(){
			$('.listshow').fadeOut();
		},1000)
}

// ----------img_box的动画---------------
var timer;
var num=0;
function move(){
	timer=setInterval(function(){
		num++;
		if(num>4){num=0;}
		// var src=$('.img img').eq(num).attr("src");
		// $('.img_box').css('background','url('+src+')');
		// $('.img_box').css('background','url('../images/community_bg+num+.jpg')');
		$('.img img').eq(num).fadeIn();
		$('.img img').eq(num).siblings().fadeOut();
		$('.box_right p').eq(num).fadeIn();
		$('.box_right p').eq(num).siblings('p').fadeOut();
		$('.box_center .imghead img').eq(num).fadeIn();
		$('.box_center .imghead img').eq(num).siblings().fadeOut();
		$('.box_right ul li').eq(num).css('border','2px solid white');
		$('.box_right ul li').eq(num).siblings().css('border','2px solid rgba(0, 0, 0, 0)');
	},2000)
}

$('.box_right ul li').hover(function(){
	$(this).css('border','2px solid white');
	$(this).siblings().css('border','2px solid rgba(0, 0, 0, 0)');
});

move();
$('.box_center').hover(function(){
		clearInterval(timer);
	});
$('.box_center').mouseleave(function(){
	move();
});

$('.box_right ul li').hover(function(){
	$(this).eq(num).css('border','2px solid white');
	$(this).eq(num).siblings().css('border','2px solid rgba(0, 0, 0, 0)');
	num=$(this).index();
	$('.img img').eq(num).show();
	$('.img img').eq(num).siblings().hide();
},2000);

$('#nav li').click(function(){
	num=$(this).index();
	$(this).addClass('border');
	$(this).siblings().removeClass('border');
	$('.center_left>div').eq(num).show();
	$('.center_left>div').eq(num).siblings('div').hide();
	$('.center_left>div').eq(3).show();
})

$('.small div').click(function(){
	$(this);
	var small=$(this).parent();
	small.remove();
});

$('.small span').hover(function(){
	$(this).css('color','#10b041');
})
$('.small span').mouseleave(function(){
	$(this).css('color','black');
})

$('.bottom').hover(function(){
	$(this).addClass('bottomchange');
})
$('.bottom').mouseleave(function() {
	$(this).removeClass('bottomchange');
});

$('.two p').hover(function(){
	$(this).css('color','#10b041');
});
$('.two p').mouseleave(function(){
	$(this).css('color','black');
})

$('.right_top span').hover(function(){
	$('.right_top span').addClass('hover')
})
$('.right_top span').mouseleave(function(){
	$('.right_top span').removeClass('hover')
})









