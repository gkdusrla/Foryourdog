window.addEventListener('scroll', scrollFn);

let nowScrollPos;
let animationHandler;

let topArrow = document.querySelector('.arrow');
topArrow.addEventListener('click', goTop);

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
