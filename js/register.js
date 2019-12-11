//这个文件中包含着对于事件的注册（注意标注事件注册的对象）
//如果是同一张canvas上注册的事件，在进行模块之间的跳转后，记得需要将原来的注册的事件进行取消
function animation_register()
{
    //对于动画播放完后，进入按钮的事件注册，
}

function main_register()
{
    //对于主界面中六个按钮的事件注册
}
function OnAnimationMouseDown(e)
{
    var point = {x:0,y:0};//起始点585 480 终止点700 535
    point.x = e.clientX;
    point.y = e.clientY;
    
    point = windowToCanvas(SceneCanvas,point);
    //console.log(point);
    if((point.x < 700 && point.x >585)&&(point.y < 535 && point.y > 480))
    {

        MainCanvas.style.display = "block";
        console.log(MainCanvas.width);
        console.log(MainCanvas.height)
        SceneCanvas.style.display = "none";
    }
    //SceneCanvas.removeEventListener("mousedown",OnAnimationMouseDown);
}