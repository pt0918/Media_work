//这个是控制整个作品的主要流程的文件
//变量命名区-------------------------------
var SceneCanvas = document.getElementById("SceneCanvas"),
    SceneContext = SceneCanvas.getContext('2d');//
var _Width = SceneCanvas.width;//所有canvas的宽度
var _Height = SceneCanvas.height;//所有canvas的高度
console.log(SceneCanvas.display);
var OffCanvas = document.createElement("canvas"),//创建用来保存各种模块的canvas
    OffContext = OffCanvas.getContext("2d");
OffCanvas.width = _Width;
OffCanvas.height = _Height;

var MainCanvas = document.getElementById("MainCanvas"),//创建用来保存主界面的canvas
    MainContext = MainCanvas.getContext("2d");

var Body = document.getElementById("Body");
var LastTime = + new Date(); //用来计算fps
var Animation_Velocity = 100;//动画的移动速度
var Animation_Offset = 0;//动画移动的距离
var Boat_Velocity = 80;
var Boat_Offset = 0;
var AContext;
var reed_Offset = 0;
var start = new Image();
start.src = "images/background.png";

var boat = new Image();
boat.src = "images/boat.png";

var reed = new Image();//芦苇
reed.src = "images/reed1.png";

var cloud = new Image();
cloud.src = "images/cloud.png";

var moon = new Image();
moon.src = "images/moon.png";

var crane = new Image();
crane.src = "images/crane.png";

var MainBackground = new Image();
MainBackground.src = "images/mainbackground.png";

var enter = new Image();
enter.src = "images/enter.png";


main_init();//首先进行主界面的初始化，存在MainCanvas上
animation_init(SceneContext);