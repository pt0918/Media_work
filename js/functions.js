//这个文件是一些需要多次用到的函数

function fps_cal()//这个函数实现帧频的计算，来控制图片移动速度
{
    if(LastTime == null)
        LastTime = + new Date();
    now = + new Date();
    fps = 1000/(now - LastTime);
    LastTime = now;
    return fps
}

function pic_translation()
{
    AContext.clearRect(0,0,_Width,_Height);
    var this_Fps = fps_cal();
    Animation_Offset +=  Animation_Velocity/this_Fps;
    reed_Offset = reed_Offset < reed.width ? reed_Offset + Animation_Velocity/this_Fps:
                                             0;
    Boat_Offset += Boat_Velocity/this_Fps;                                         
    AContext.drawImage(start,-Animation_Offset,0);//移动背景的绘制
    AContext.drawImage(reed,-reed_Offset,_Height-reed.height);//芦苇的绘制
    AContext.drawImage(reed,-reed_Offset+reed.width,_Height-reed.height);
    AContext.drawImage(moon,0,0);//背景梅花和月亮的绘制
    AContext.drawImage(cloud,0,cloud.height);//云的绘制
    AContext.drawImage(boat,Boat_Offset,_Height - boat.height-reed.height/2,1.5*boat.width,1.5*boat.height);//小船的绘制
    AContext.drawImage(crane,0,_Height-crane.height,crane.width/2,crane.height/2);//鹤的绘制
    if(Animation_Offset < start.width-_Width)
        requestNextAnimationFrame(pic_translation);
    else
        SceneCanvas.addEventListener("mousedown",OnAnimationMouseDown);
}