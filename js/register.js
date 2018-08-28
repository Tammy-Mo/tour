/*
* @Author: Administrator
* @Date:   2018-06-20 19:23:44
* @Last Modified by:   admin
* @Last Modified time: 2018-06-25 14:52:11
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

$('button').mouseenter(function(){
	$(this).css('background','#4dc575');
})
$('button').mouseleave(function(){
	$(this).css('background','#3f9f5f');
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

