$(function() {
var scrollAnimationElm = document.querySelectorAll('.ani');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 500;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


});

$(function(){
	$('.arrow').click(function(){
		if($(this).hasClass('open') == false){
			$(this).attr('src', 'assets/img/index/arrow_up_03.png').addClass('open');
		}else{
			$(this).attr('src', 'assets/img/index/arrow_down_03.png').removeClass('open');
		}
	});
});

$(function () {
	var width = $(window).width();
	if( width < 640 ){
	  $(".toggleImg").each(function(){
		$(this).attr("src", $(this).attr("src").replace("_pc","_sp"));
	  })
	}
});

$(function(){
	$('a[href^="#"]').click(function(){
	  //スクロールのスピード
	  var speed = 800;
	  //リンク元を取得
	  var href= $(this).attr("href");
	  //リンク先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  //リンク先までの距離を取得
	  var position = target.offset().top;
	  //スムーススクロール
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
});