<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="cc.openhome2.dataland" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
    <!DOCTYPE html>
<!--[if IE 7]> <html lang="en" class="ie7"> <![endif]-->  
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->  
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->  
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->  
<head>
    <title>樂活之旅</title>
    
    
     <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    
    <link rel=stylesheet type="text/css" href="css/div.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="NewCss/css/a001.css"/>  

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="NewCss/css/thumbnail-gallery.css">



<!--=== 景點選擇滑塊特效 ===-->
 <link type="text/css" href="NewCss/css/menu.css" rel="stylesheet" />
    <script type="text/javascript" src="NewCss/js/jquery.js"></script>
    <script type="textd/javascript" src="NewCss/js/menu.js"></script>
<!--=== 景點選擇 ===-->
<!--=== 以下蒲公英特校 ===-->
<script type="text/javascript" src="NewCss/js/all.js"></script> 
<script type="text/javascript" src="NewCss/js/jquery.min.js"></script>
<style type="text/css">
body.custom-background {  background-size: 100% 100%; background-repeat: no-repeat; background-position: top left; background-attachment: fixed; }
</style>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<!--=== 蒲公英特校 ===-->


<link rel="stylesheet" type="text/css" href="NewCss/css/style.css" media="screen">
<link rel="stylesheet" type="text/css" href="NewCss/css/nivo-slider.css" media="screen">

<script type="text/javascript" src="NewCss/js/jquery-1.6.4.min.js"></script>
<script type="text/javascript" src="NewCss/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="NewCss/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript">
//Slider
jQuery(window).load(function() {
	jQuery('#slider').nivoSlider({
	effect: 'fold',
	slices:15,
	animSpeed:1000, //Slide transition speed
	pauseTime:1000,
	controlNav: false,
	directionNavHide: false,
	prevText: 'prev',
	nextText: 'next',
	startSlide:0, //Set starting Slide (0 index)
	directionNav:true, //Next &amp; Prev
	afterLoad: function(){
		jQuery(".nivo-caption5").animate({top:"60"}, {easing:"easeOutBack", duration: 500})
		},
		beforeChange: function(){
		jQuery(".nivo-caption5").animate({top:"-300"}, {easing:"easeInBack", duration: 500})
		},
		afterChange: function(){
		jQuery(".nivo-caption5").animate({top:"60"}, {easing:"easeOutBack", duration: 500})
		}
	});
	
});

</script>





    
    </head>
        
<style type="text/css">
    
    #toparea{
        
         background-color: 	#FFFFFF;
         
      

    }
    
   
    
    #imgright{
        background-image: url( 'assets/plugins/parallax-slider/img/bg.jpg' );
         float: right;
         padding-right:10%;
         width: 100%;
        height: 100%;
       
    }
   
    
    

    
    #indexh3{
    float:left;
    border-bottom: 2px solid #72c02c;
    color: #585f69;
  	margin-top: 0 0 -2px 0;
    display: inline-block;
    text-shadow: 0 0 1px #f6f6f6;
    font-size: 24px;
    margin-right:80%;
  
    
}

#dropdownmenu{
      
    border-top: solid 2px #72c02c;
    border-bottom: solid 2px #687074;

    top: 100%;
    right: 10px;
    margin: 2px 0 0;
    list-style: none;
    background-color: #fff;
        background-clip: padding-box;
}
   
#navbar-header.a:link
        {
            color: 	#00AA00;
        }
        /* 已連結過 */
        a:visited
        {
            color: 	#444444;
        }
        /* 滑鼠移至連結 */
        a:hover
        {
            color: #00AA00;
        }
        /* 選擇的連結 */
        a:active
        {
            color:#00AA00;
        }   
        
#hr.style-four {
    
    border: 0;
    padding-top:0px;
    box-shadow: inset 0 5px 5px -5px rgba(0,0,0,0.6);
}

.loginbar li.devider {
    top: -1px;
    padding: 0;
    font-size: 8px;
    position: relative;
    margin: 0 6px 0 2px;
    font-family: Tahoma;
    border-right: solid 1px #bbb;
}
.loginbar li {
    display: inline;
    list-style: none;
    padding-bottom: 15px;
}
.li {
    color: #555;
    line-height: 1.6;
}
.loginbar i.icon-globe {
    color: #bbb;
    font-size: 13px;
    margin: 3px 3px 0 0;
    display: inline-block;
    width: 1.25em;
    text-align: center;
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
}

#slider-container{
    background:url("images/bg.jpg")
}

#w96{
	margin-left:5%;
}


#thumbnail{

	width: auto !important;
	height: 30% !important;
}

#re{
    
    width: auto !important;
    height: 40% !important;
 
 }

</style>        
        
<!--=== 橫幅開始 ===-->
<% 
	 List<dataland> list =(List<dataland>)request.getAttribute("list");  
%>

<!--=== 蒲公英特校 body開始頁面===-->
<body class="custom-background">

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>
<script type="text/javascript" src="all.js"></script>
<!--=== 蒲公英特校 ===-->
 <jsp:include page="title.jsp"></jsp:include>
<!--=== 選則景點的按鍵 ===-->


<script type="text/javascript">

$(function(){
$("li").click(function(){
var x = $(this).attr("value");




if(x==55){
var x55= "基隆"

document.getElementById('myField').value = "基隆";
document.getElementById("Button1").click();

}
if(x==1){
var x2="台北"

 document.getElementById('myField').value = "臺北";
document.getElementById("Button1").click();

}

 if(x==2){
 var x2="新北"
 
 document.getElementById('myField').value = "新北";
 document.getElementById("Button1").click();

}
if(x==3){
var x3="桃園"

document.getElementById('myField').value = "桃園";
document.getElementById("Button1").click();
}

if(x==4){
var x4="新竹"

document.getElementById('myField').value = "新竹";
document.getElementById("Button1").click();
}

if(x==5){
var x5="苗栗"

document.getElementById('myField').value = "苗栗";
document.getElementById("Button1").click();	
}
if(x==6){
var x6="台中"

document.getElementById('myField').value = "臺中";
document.getElementById("Button1").click();	
}
if(x==7){
var x7="彰化"

document.getElementById('myField').value = "彰化";
document.getElementById("Button1").click();	
}
if(x==8){
var x8="南投"

document.getElementById('myField').value = "南投";
document.getElementById("Button1").click();	
}
if(x==9){
var x9="雲林"

document.getElementById('myField').value = "雲林";
document.getElementById("Button1").click();	
}
if(x==10){
var x10="嘉義"

document.getElementById('myField').value = "嘉義";
document.getElementById("Button1").click();	
}
if(x==11){
var x11="台南"

document.getElementById('myField').value = "臺南";
document.getElementById("Button1").click();	
}
if(x==12){
var x12="高雄"

document.getElementById('myField').value = "高雄";
document.getElementById("Button1").click();	

}
if(x==13){
var x13="屏東"

document.getElementById('myField').value = "屏東";
document.getElementById("Button1").click();	
}
if(x==14){
var x14="宜蘭"

document.getElementById('myField').value = "宜蘭";
document.getElementById("Button1").click();	
}
if(x==15){
var x15="花蓮"

document.getElementById('myField').value = "花蓮";
document.getElementById("Button1").click();	
}
if(x==16){
var x16="臺東"

document.getElementById('myField').value = "臺東";
document.getElementById("Button1").click();	
}


});
});

 
 function customSubmit(someValue){  
 document.form1.hiddenValue.value = someValue;   
 document.form1.submit(); 
 console.log();
 }  
 
  
</script>




<div id="menu">
    <ul class="menu" id="tagid">
        <li><a href="#" class="parent"><span>北部地區</span></a>
            <div>
            	<ul id="ul">
                <li value="55" onclick="myFunction()"><a href="#" value="基隆"><span >基隆</span></a></li>
                <li value="1"><a href="#"><span id="taipei">台北</span></a></li>
                <li value="2"><a href="#"><span id="newnorthcity">新北</span></a></li>
                <li value="3"><a href="#"><span>桃園</span></a></li>
                <li value="4"><a href="#"><span>新竹</span></a></li>
            	</ul>
            </div>
        </li>
        
        
        
         <li  ><a href="#" class="parent"><span>中部地區</span></a>
            <div><ul>
                <li value="5"><a href="#"><span>苗栗</span></a></li>
                <li  value="6"><a href="#"><span>台中</span></a></li>
                <li value="7"><a href="#"><span>彰化</span></a></li>
                <li value="8"><a href="#"><span>南投</span></a></li>
                <li value="9"><a href="#"><span>雲林</span></a></li>
            </ul></div>
        </li>
        
        
         <li ><a href="#" class="parent"><span>南部地區</span></a>
            <div><ul>
                <li value="10"><a href="#"><span>嘉義</span></a></li>
                <li value="11"><a href="#"><span>台南</span></a></li>
                <li value="12"><a href="#"><span>高雄</span></a></li>
                <li value="13"><a href="#"><span>屏東</span></a></li>
             
            </ul></div>
        </li>
        
         <li ><a href="#" class="parent"><span>東部地區</span></a>
            <div><ul>
                <li value="14"><a href="#"><span>宜蘭</span></a></li>
                <li value="15"><a href="#"><span>花蓮</span></a></li>
                <li value="16"><a href="#"><span>台東</span></a></li>
         
            </ul></div>
        </li>
       
    </ul>
</div>
<!--=== 選則景點的按鍵 ===-->	
	
	
<div id="w96">
  <h3 id="indexh3">${hiddenValue}熱門景點</h3>
</div>
      
      
      <div class="container-fluid">
      <div class="row">
        <c:forEach items="${list}" var="list">
		<div class="col-xs-6 col-sm-3">
		                <div class="thumbnail2">
		             
		               
		          <a class="re"href="detailsareceive?id=${list.id}" ><img  src="${list.photo}" href="detailsareceive?id=${list.id}" width="100%" height="148px !important"/></a>
		                 
		                    <div class="caption">
		                        <h3>${list.name}</h3>
		                        <p class="multi_ellipsis">${list.introduction}</p>
		                    </div>
		                </div>
		 </div>
		 </c:forEach>	
       </div>
       </div>


 


<style>


.multi_ellipsis{
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; 
line-height: 18px;
height: 72px;
}
</style>




<form action="checkok" name="myForm">  
	<input type=hidden  id="myField" name="hiddenValue" value=""/>  
<div style="display:none;">
<input type="submit" value="Submit" name="buttonSubmit" id="Button1" onclick="customSubmit()"/>  
</div>
</form>  
	
	
	


 

	</body>
	


</html>