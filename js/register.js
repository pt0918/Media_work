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
    main_init();
    SceneCanvas.removeEventListener("mousedown",OnAnimationMouseDown);
}