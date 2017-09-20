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


</script>

 <style>
      #map {
        width: 100%;
        height: 400px;
        background-color: grey;
      }
</style>


    
    </head>
        
<style type="text/css">
    
 
    
   
    
  
   

    
  
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


</style>        
        
<!--=== 橫幅開始 ===-->
<% 
	 List<dataland> list =(List<dataland>)request.getAttribute("list");  
%>

<!--=== 蒲公英特校 ===-->
<body class="custom-background" >

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>
<script type="text/javascript" src="all.js"></script>
<!--=== 蒲公英特校 ===-->
  <jsp:include page="title.jsp"></jsp:include>
	<!--=== 橫幅結束 ===-->
	
	
	<style type="text/css">
@media (min-width: 1200px){
    .container {
    max-width: 1500.33333px;
    margin-left: auto;
    margin-right: auto;
    
}
}



.article{
        padding: 10px 0;
        display: block;
            box-sizing: border-box;
}
.article-contents{
letter-spacing: 1.5px;
    line-height: 2em;
    width: 100%;
    padding: 40px 0;
}

.grid-left-5 {
    width: 30.42553%;
    float: left;
    margin-right: 2.12766%;
}
.arti-pic{
        margin: 10px 0;
    padding: 0;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    display: block;
    position: relative;
}
.jpg55{
    width: 100%;
    height: auto;
       -webkit-border-radius: 20px;
	-moz-border-radius: 20px;
	border-radius: 20px;
}
.grid-right-7{
    
    width: 67.44681%;
    float: left;
    margin-right: 2.12766%;
    float: right;
    margin-right: 0;

}
.destination-info{
    
}
.title-name{
    color: #62a73a;
    font-size: 0.8cm;
    padding: 0;
        margin-top: 20px;
    margin-bottom: 10px;
    margin: .67em 0;
    margin-top: 0.67em;
    margin-right: 0px;
    margin-bottom: 0.67em;
    margin-left: 0px;
    box-sizing: border-box;
    font-weight: normal;
    font-style: normal;
    transition: color .2s ease-in;
    transition-property: color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
    transition-delay: initial;
}
.destination-info ul {
    font-size: 1.25em;
    line-height: 1.4;
    width: 100%;
    margin: 0;
    padding: 10px 0;
    list-style: none;
}
.destination-info ul li{
    word-break: break-all;
    width: 100%;
    padding: 5px 0;
    font-weight: normal;
    font-style: normal;
    transition: color .2s ease-in;

    
}
.ps{
        color: #e7860c;
            line-height: 1.8;
}
.mapcolor{
    color: #62a73a;
    font-size: 2.0em;
    margin-left:2%;
    margin-top:30%;
}

.mapmar{
    margin-right:10px;
}

.blog{
   font-size:0.6cm;
     color: #62a73a;
}

	</style>
		<!--=== 底下開始 ===-->
		
		
	<div class="page-destination"> 
	
	    <div class="container">
	        <article class="article">
	            <div class="article-contents">
	            
	                  <c:forEach items="${list}" var="list" >
	                 	 <div class="grid-left-5">
	                       			<div class="arti-pic">
	                      				<img src="${list.photo}" class="jpg55" ></img>
	                       			</div>
	                  	</div><!--===grid-left-5===-->
	              <div class="grid-right-7">
	                 
	                    <div class="destination-info">
	                        			<h1 class="title-name">${list.name}</h1>
	                     	<ul>
                            	<li><img src="images/S2.png" width="40px" height="40px"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;地址：${list.address}</li>
                            	<li>
                                	<i class="fa fa-phone"><img src="images/S3.png" width="40px" height="40px" ></i>&nbsp;&nbsp;電話：${list.tel }
                                	<a href="tel:04-25233563" class="callme" title="歡迎來電"><img src="images/S1.png" width="40px" height="40px"></a></li>
                           		 <li>
                           		 	<img src="images/S5.png" width="40px" height="40px">&nbsp; 官網：<a href="http://www.glp.com.tw/index.htm" target="_blank" title="官網連結">http://www.glp.com.tw/index.htm</a></li>
                            	<li>
                            		<img src="images/S4.png" width="40px" height="40px">&nbsp; 臉書：<a href="https://www.facebook.com/glp42078/" target="_blank" title="臉書">https://www.facebook.com/glp42078/</a></li>
                           		<li>
                           			<p class="ps">(聯絡時可告知店家您的資訊來自於樂活網！)</p></li>
                        	</ul>
                        </div>
                        			<div  style="visibility:hidden"><p id="lf">${list.coordinate}</p></div>	
                            		<p class="blog">${list.introduction}</p>
                         </c:forEach>
	                 </div> <!--destination-inf--> 
           
	              </div> <!--===grid-right-7==--> 
	      		<!--===article-contents===-->
	       </article>
	   </div><!--===container===-->
	
	
	
	
	
	
	</div>		<!--===page-destination===-->
	

 
    
    <h3 class="mapcolor"><img src="images/0.png" width="40px" height="40px" class=mapmar>地圖導航</h3>
    <div id="mapdiv"></div>
    
    <div id="map"></div>
	
   
    <script>
    function initMap() {
    	
    	var myString =document.getElementById("lf").innerHTML
		var splits = myString.split(",");
		var x = splits[0];
		var y = splits[1];
		console.log(x);
		console.log(y);
    	 map = new google.maps.Map(document.getElementById('map'), {
             zoom: 16,
             center: new google.maps.LatLng(x,y),
        });
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(x,y),
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_t-AFf18s2B5KvO7dDJrRuqjltJpX4QY&callback=initMap">
    </script>


	</body>

	</html>