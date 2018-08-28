
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
	$('.nav>li span').eq(5).css('color', '#10b041');
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


$(document).click(function(){
	$('.q_center input').css({'border':'1px solid lightgray','border-right':'none'});
	$('button').eq(0).css({'background':'#fafafa','border':'1px solid lightgray','border-left':'none'});
});
$('.q_center input').click(function(){
	$(this).css('border','1px solid #41c074');
	$('button').eq(0).css({'background':'#41c074','border':'none'});
	return false;
});

$(window).scroll(function(event) {
	var h=$('.content').offset().top;
	if($(window).scrollTop()>h){
		$('.questions').addClass('fix');
	}else{
		$('.questions').removeClass('fix');
	}
});

var timer;
var num=0;
var n;
function move(){
			timer=setInterval(function(){
				num++;
				if(num==5){
					n=0;					
					$('.box>ul li').eq(n).css('color','red');
					$('.box>ul li').eq(n).siblings().css('color','white');
				}
				if(num>5){
					num=0;
					$('.img ul').css('left',-num*1920);
					num=1;
				}
				$('.box>ul li').eq(num).css('color','red');
				$('.box>ul li').eq(num).siblings().css('color','white');
				$('.img ul').animate({'left':-num*1920});				
			},2000)
		}

		move();
		$('.box').hover(function(){
			clearInterval(timer);
		});
		$('.box').mouseleave(function(){
			move();
		});
		
		$('.box>ul li').click(function(){
			$(this).css('color','red');
			$(this).siblings().css('color','white');
			num=$(this).index();
			$('.img ul').css('left',-num*1920);
		})
		
		$('#left').click(function(){
			num=num-1;
			if(num<0){
				num=5;
				n=0;
				$('.box>ul li').eq(n).css('color','red');
				$('.box>ul li').eq(n).siblings().css('color','white');
				$('.img ul').css('left',-num*1920);
				num=4;
			}		
			$('.box>ul li').eq(num).css('color','red');
			$('.box>ul li').eq(num).siblings().css('color','white');
			$('.img ul').animate({'left':-num*1920});		
		});


		$('#right').click(function(){
			num=num+1;
			if(num==5){
				$('.box>ul li').eq(0).css('color','red');
				$('.box>ul li').eq(0).siblings().css('color','white');
			}
			if(num>5){  
				num=0;
				$('.img ul').css('left',-num*1920);
				num=1;
			}
			$('.box>ul li').eq(num).css('color','red');
			$('.box>ul li').eq(num).siblings().css('color','white');
			$('.img ul').animate({'left':-num*1920});		
		});


$('.contain').hover(function(){
	$(this).css('box-shadow', '0 0 8px #ccc');
})

$('.contain').mouseleave(function(){
	$(this).css('box-shadow', '0 0 0');
})

