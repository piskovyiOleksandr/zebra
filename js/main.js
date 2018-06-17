$(function(){
  $('#menu_down li').hover(function(){
		$('.dropdown__menu', this).css('opacity', '1');	
	},function(){
		$('.dropdown__menu', this).css('opacity', '0');			   
	});
});