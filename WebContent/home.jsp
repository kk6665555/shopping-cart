<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
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
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="NewCss/css/thumbnail-gallery.css">
<link rel="stylesheet" href="NewCss/css/001.css"/>  




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
   
    
    
#w96{
    width:10%;
    margin-left:5%;
    margin-top:3%;
}    

#w97{
    width:10%;
    margin-left:5%;
    margin-top:0px;
}    
    
    #indexh3{
    border-bottom: 2px solid #72c02c;
    
    color: #585f69;
    margin: 0 0 -2px 0;
     
    display: inline-block;
    text-shadow: 0 0 1px #f6f6f6;
    font-size: 24px;
    font-family: inherit;
  
    
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
</style>        
        
<!--=== 橫幅開始 ===-->


<!--=== 蒲公英特校 ===-->
<body class="custom-background">

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>
<script type="text/javascript" src="all.js"></script>
<!--=== 蒲公英特校 ===-->

         <%
	String user=(String)session.getAttribute("user");
%>   
          <div class="container">         
        <ul class="loginbar pull-right">
            <li><i class="icon-globe"></i><a>Languages <i class="icon-sort-up"></i></a>          
            <li class="devider">&nbsp;</li>
            <li><a href="page_login.html" class="login-btn"><%if(user!=null){%> 歡迎~,<%=user%><%}else{%>登入<%} %></a></li>   
              <%if(user!=null){%>
              <li class="devider">&nbsp;</li>
            <li><a href="logOut" class="login-btn">登出</a></li>
            <%} %>  
        </ul>
    </div>      
        
    	<nav id="toparea" role="navigation">
		<div class="container-fluid">
		    <div class="navbar-header">
		        <a href="index.html"><img id="logo-header" src="assets/img/logo1-default.png" alt="Logo" /></a>
		    </div>
		    <div>
		        		       <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="home.html" id="aclor" >首頁</a></li>
		            <li><a href="#">伴手禮專區</a></li>
		            <li class="dropdown">
		                
		             <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		                    景點介紹<b class="caret"></b>
		                </a>
		                <ul class="dropdown-menu" id="dropdownmenu">
		                    <li><a href="nationalpark2.html">國家森林公園</a></li>
		                    <li class="divider"></li>
		                    <li><a href="Sitedetailspage.html">退輔會休閒農場</a></li>
		                    <li class="divider"></li>
		                    <li><a href="taipeitest.jsp">農委會休閒景點</a></li>
		                </ul>
		            </li>
		            
		            
		             <li class="dropdown">
		                
		             <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		                    住宿訂房<b class="caret"></b>
		                </a>
		                <ul class="dropdown-menu" id="dropdownmenu">
		                    <li><a href="#">null</a></li>
		                    <li class="divider"></li>
		                    <li><a href="#">NULL</a></li>
		                    <li class="divider"></li>
		                    <li><a href="#">NULL</a></li>
		                </ul>
		            </li>
		            
		            
		             <li class="dropdown">
		                
		             <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		                    會員專區<b class="caret"></b>
		                </a>
		                <ul class="dropdown-menu" id="dropdownmenu">
		                    <li><a href="logIn.jsp">會員登入</a></li>
		                    <li class="divider"></li>
		                    <li><a href="addMember.jsp">註冊會員</a></li>
		                    <li class="divider"></li>
		                    <li><a href="test.jsp">購物車</a></li>
		                    <li class="divider"></li>
		                    <li><a href="personalmessage.jsp">會員資訊</a></li>
		                    
		                </ul>
		            </li>
		        </ul>
	   	</div>
		</div>
	</nav>
	<hr class="style-one" />
	<!--=== 橫幅結束 ===-->
	
	
	<!--=== 圖片開始 ===-->

<div id="slider-container">

	<div id="slider" class="nivoSlider">
		<img title="#htmlcaption1" alt="" src="images/logo1.png">
		<img title="#htmlcaption4" alt="" src="">
		<img title="#htmlcaption2" alt="" src="images/logo2.png">
		<img title="#htmlcaption4" alt="" src="">
		<img title="#htmlcaption3" alt="" src="images/logo3.png">
		<img title="#htmlcaption4" alt="" src="">
		<img title="#htmlcaption4" alt="" src="images/logo4.png">
	    <img title="#htmlcaption4" alt="" src="">
	</div><!-- #slider -->
	
	
</div>


<body onload="myFunction()">
<!--=== 圖片結束===-->
 

 

<div id="w96">
  <h3 id="indexh3">熱門景點</h3>
  </div>
<div>  

  <div class="tz-gallery">
      
      
      
    <div class="row">
        
          <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/D4.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>Thumbnail label</h3>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		                    </div>
		                </div>
		            </div>

         <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/D1.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>Thumbnail label</h3>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		                    </div>
		                </div>
		            </div>
		            
		             <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/D2.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>Thumbnail label</h3>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		                    </div>
		                </div>
		            </div>
		            
		            
		              <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/D3.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>Thumbnail label</h3>
		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		                    </div>
		                </div>
		            </div>
        
      
       </div>
  </div>
</div>



<div id="w96">
  <h3 id="indexh3">國家公園</h3>
  </div>
<div>  
 
  <div class="tz-gallery">
      
      
      
    <div class="row">
        
          <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/S1.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>玉山國家公園</h3>
		                        <p> 玉山國家公園面積居於臺灣中央，面積103,121公頃，園內高山崢嶸，以東北亞最高峰、海拔3,952公尺的玉山為首，共涵蓋全臺3分之1的名山峻嶺， ...</p>
		                    </div>
		                </div>
		            </div>

         <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/S2.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>太魯閣國家公園</h3>
		                        <p>太魯閣國家公園是台灣第四座成立的國家公園，前身為日治時期成立之次高太魯閣國立公園。第二次世界大戰後為國家級風景區，1986年11月12日公告計畫，1986年11月28日成立管理處</p>
		                    </div>
		                </div>
		            </div>
		            
		             <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/S3.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>雪霸國家公園</h3>
		                        <p>雪霸國家公園是臺灣第五座國家公園，可溯至日治時期成立之次高太魯閣國立公園，1991年3月1日公告計畫、1992年7月1日成立管理處，以雪山和大霸尖山的「雪」、「霸」兩字命名，這兩座山也是該公園主要的保護目標</p>
		                    </div>
		                </div>
		            </div>
		            
		            
		              <div class="col-sm-6 col-md-3">
		                <div class="thumbnail">
		                    <a class="lightbox" href="images/park.jpg">
		                        <img src="images/S4.jpg" alt="Park">
		                    </a>
		                    <div class="caption">
		                        <h3>陽明山國家公園</h3>
		                        <p>陽明山國家公園是中華民國設置的第三個國家公園，前身為臺灣日治時期成立之大屯國立公園。</p>
		                    </div>
		                </div>
		            </div>
        
      
       </div>
  </div>
</div>


<form action="indexhome" name="myForm">  
	<input type=text  id="myField" name="homevalue" value=""/>  
<input type="submit" value="Submit" name="buttonSubmit" id="Button1" onclick="customSubmit()"/>  

</form>  	


</body>
<script>
function myFunction() {

	var arr = [];
	var x=0;
	for(x;x<4;x++){
	var nunber= Math.floor(Math.random() * (125 - 1) + 1);
	arr.push(nunber);	
	
	}
	var a = arr[0];
	var b = arr[1];
	var c= arr[2];
	var d= arr[3];
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	
	document.getElementById("myField").value = b;
	document.getElementById("Button1").click();	
	response.sendRedirect("/home.jsp");
	

}
function customSubmit(someValue){  
	 document.form.homevalue.value = someValue;   
	 document.form.submit(); 


	 }  
</script>




</body>
<!--=== 底下這邊開始是BODY ===-->

<script >
    baguetteBox.run('.tz-gallery');
</script>>	
	


<script type="text/javascript" src="">
    
function createImg()
 {
  var images = ["images/1.jpg","images/2.jpg","images/3.jpg", "images/4.jpg", "images/5.jpg"];
  var oltag = document.getElementById("dian");
  var divtag = document.getElementById("change"); 
  for (var i = 0; i < images.length; i++)
  {
  if (i == 0)
  {
   document.getElementById("one").src = images[i];
  }
  else
  {
   var li = document.createElement("li");
   li.setAttribute("data-target", "#ad-carousel");
   li.setAttribute("data-slide-to",""+(i+1));
   oltag.appendChild(li);


   var div = document.createElement("div");
   div.className = "item";
   var a = document.createElement("a");
   var img = document.createElement("img");
   img.src = images[i];
   a.appendChild(img);
   div.appendChild(a);
   divtag.appendChild(div);
  }
  }
 }
    
</script>
    
</html>