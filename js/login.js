/*
* @Author: Administrator
* @Date:   2018-06-20 19:23:26
* @Last Modified by:   admin
* @Last Modified time: 2018-06-25 10:21:40
*/
$('.fixed_left').click(function(){
	$('.fixed').toggleClass('fixcurrent');
	$('.fixedshow').toggleClass('fixcurrent');
    return false;
})
$('.fixedshow').click(function(event) {
	return false;
});
$(document).click(function(){
	$('.fixedshow').removeClass('fixcurrent');
	$('fixed').removeClass('fixcurrent');
})

$('#nav li').click(function(){
	$(this).addClass('change');
	$(this).siblings().removeClass('change');
	var num=$(this).index();
	$('.loginbox>div').eq(num).show();
	$('.loginbox>div').eq(num).siblings('.loginbox>div').hide();
})

$('button').hover(function(){
	$(this).css('background','#4dc575');
})
$('button').mouseleave(function(){
	$(this).css('background','#3f9f5f');
})

$('#way1 li:nth-of-type(1)').hover(function(){
	$(this).css('background','#12b6f5');
})
$('#way1 li:nth-of-type(2)').hover(function(){
	$(this).css('background','#de5145');
})
$('#way1 li:nth-of-type(3)').hover(function(){
	$(this).css('background','#ff7a09');
})
$('#way1 li:nth-of-type(4)').hover(function(){
	$(this).css('background','#279f4f');
})
$('#way1 li').mouseleave(function(){
	$(this).css('background','#d7d7d7');
})


$('#way2 li:nth-of-type(1)').hover(function(){
	$(this).css('background','#12b6f5');
})
$('#way2 li:nth-of-type(2)').hover(function(){
	$(this).css('background','#de5145');
})
$('#way2 li:nth-of-type(3)').hover(function(){
	$(this).css('background','#ff7a09');
})
$('#way2 li:nth-of-type(4)').hover(function(){
	$(this).css('background','#279f4f');
})
$('#way2 li').mouseleave(function(){
	$(this).css('background','#d7d7d7');
})

$('.box #number').click(function(){
	$('.shownumber').toggle();
	$(this).children('img').toggleClass('current');
});
$('.shownumber ul li').click(function(){
	$(this).addClass('colorchange');
	$(this).siblings('li').removeClass('colorchange');
	var num=$(this).children('i').html();
	$('.box #number h4').html(num);
})