/*
$(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() >= 300) {
           // $('.arrow').fadeIn();
        } else{
           // $('.arrow').fadeOut();
        }
    });

    $('.arrow').click(function(e){
        screen.preventDefault();
        $('html, body').stop().animate({scrollTop : 0},500);
        return false;
    });
});
*/

window.addEventListener('scroll', scrollFn); // 스크롤이벤트 

let nowScrollPos;
let animationHandler;

let topArrow = document.querySelector('.arrow'); //화살표
topArrow.addEventListener('click', goTop); //화살표이벤트 

function scrollFn()
{
    nowScrollPos = pageYOffset;
    if(nowScrollPos >= 300)
    {
        topArrow.classList.add('on');
    }
    else{
        topArrow.classList.remove('on');
    }
}

function goTop()
{
    animationHandler = requestAnimationFrame(goAnimation);
    
}

function goAnimation()
{
    nowScrollPos += (0-nowScrollPos) * 0.05;
    window.scroll(0, nowScrollPos);
    animationHandler = requestAnimationFrame(goAnimation);
    if(Math.abs(0-nowScrollPos)<1)
    {
        cancelAnimationFrame(animationHandler);
    }

}
