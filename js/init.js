//这个文件是各个模块初始化canvas函数的地方


//这个函数实现对于开通和赏析中动画的绘制 参数为需要绘制的canvas
function animation_init(MyContext)
{
    var timer = setInterval(function(){
        if(start.complete && reed.complete && cloud.complete && boat.complete && enter.complete)
        {
            animation_play(MyContext);
            //MyContext.drawImage(pic, 0, 0);//这里现在只是一个简单的绘制，要做成平移的动画
            clearInterval(timer);
        }
    },50)
}

function main_init()
{   
    var timer = setInterval(function(){
        if(MainBackground.complete)
        {
            MainContext.drawImage(MainBackground,0,0);
            clearInterval(timer);
        }
    },50)
    
    MainCanvas.style.display ="none";

    //还要在这个上面进行事件注册
    //这个函数实现对于主界面的初始化（包含着对于图片上按钮的事件注册）
}

function background_init()
{
    //这个函数实现对于诗歌背景的初始化
}

function poetry_init()
{
    //对于诗歌朗诵的初始化
}

function appreciate_init()
{
    //对于诗歌赏析的初始化
}

function exercise_init()
{
    //对于课堂练习的初始化
}

function expend_init()
{
    //对于知识拓展的初始化
}