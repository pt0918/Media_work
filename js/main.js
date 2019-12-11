//这个是控制整个作品的主要流程的文件
//变量命名区-------------------------------
var SceneCanvas = document.getElementById("SceneCanvas"),
    SceneContext = SceneCanvas.getContext('2d');//
var _Width = SceneCanvas.width;//所有canvas的宽度
var _Height = SceneCanvas.height;//所有canvas的高度

var OffCanvas = document.createElement("canvas"),//创建用来保存各种模块的canvas
    OffContext = OffCanvas.getContext("2d");
OffCanvas.width = _Width;
OffCanvas.height = _Height;

var MainCanvas = document.createElement("canvas"),//创建用来保存主界面的canvas
    MainContext = MainCanvas.getContext("2d");
MainCanvas.width = _Width;
MainCanvas.height = _Height;

var Body = document.getElementById("Body");
var LastTime = + new Date(); //用来计算fps
var Animation_Velocity = 200;//动画的移动速度
var Animation_Offset = 0;//动画移动的距离
var Boat_Velocity = 180;
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

animation_init(SceneContext);