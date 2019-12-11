//这个文件是一些需要多次用到的函数

function windowToCanvas(canvas,point){
	// 获取canvas元素的所有样式属性
	var canvasStyle=window.getComputedStyle(canvas);
	// point.x-=parseFloat(canvasStyle["margin-left"]);
	// point.y-=parseFloat(canvasStyle["margin-top"]);
	
	// 获取元素的位置属性
	var bbox=canvas.getBoundingClientRect();
	// 除去canvas在文档坐标系的左边和顶部距离
	point.x-=bbox.left;
	point.y-=bbox.top;
	
	// 除去canvas的边框宽度
	point.x-=parseFloat(canvasStyle["border-left-width"]);
	point.y-=parseFloat(canvasStyle["border-top-width"]);
	
	// 除去canvas的内边距宽度
	point.x-=parseFloat(canvasStyle["padding-left"]);
	point.y-=parseFloat(canvasStyle["padding-top"]);

	// 绘图环境和canvas的大小比例调整 
	var xRatio=canvas.width/parseFloat(canvasStyle["width"]);
	var yRatio=canvas.height/parseFloat(canvasStyle["height"]);
	
	// 从文档坐标系调整到canvas坐标系
	point.x*=xRatio;
	point.y*=yRatio;

	// 返回调整后的坐标值
	return point;

}

function fps_cal()//这个函数实现帧频的计算，来控制图片移动速度
{
    if(LastTime == null)
        LastTime = + new Date();
    now = + new Date();
    fps = 1000/(now - LastTime);
    LastTime = now;
    return fps
}

function enter_fadein(){
    AContext.clearRect(0,0,_Width,_Height);
    AContext.save();
    AContext.globalAlpha = 1;
    AContext.drawImage(OffCanvas,0,0);
    AContext.restore();
    if(AContext.globalAlpha < 1)
    {
        AContext.drawImage(enter,450,455);
        AContext.globalAlpha += 0.02;
        requestNextAnimationFrame(enter_fadein);
    }
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
        AContext.globalAlpha = 0;
        OffContext.clearRect(0,0,_Width,_Height);
        OffContext.drawImage(SceneCanvas,0,0);
        enter_fadein();
        SceneCanvas.addEventListener("mousedown",OnAnimationMouseDown);
}

