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

<!--=== 以下蒲公英特校 ===-->
<style type="text/css">
body.custom-background {  background-size: 100% 100%; background-repeat: no-repeat; background-position: top left; background-attachment: fixed; }
</style>

<!--=== 蒲公英特校 ===-->

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
#logo{
	float:left;
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


<!--=== 蒲公英特校 ===-->
<body class="custom-background">

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>

<!--=== 蒲公英特校 ===-->

<%
	String user=(String)session.getAttribute("user");
%>   

		
		<a href="index.html" id="logo"><img id="logo-header" src="assets/img/logo1-default.png" alt="Logo" /></a>
		
        <div id="ac86">
         <div id="DIV_CHILD">         
            <a class="aq56">Languages</a>
           <a href="logIn.jsp" class="aq58">&nbsp;&nbsp;<%if(user!=null){%><%=user%><%}else{%>登入<%} %></a>
            <a href="logOut" class="aq57">&nbsp;&nbsp;│登出</a>
    	</div>      
      </div>  
            
        
    	<nav id="toparea" role="navigation">
    	
		<div class="container-fluid">
		    <!--  <div class="navebar-header">
		    <a href="index.html" id="logo"><img id="logo-header" src="assets/img/logo1-default.png" alt="Logo" /></a>
		    </div>-->
		    <div>
		        <ul class="nav navbar-nav navbar-right">
		            <li class="active"><a href="home.html" id="aclor" >首頁</a></li>
		            <li><a href="Screen.jsp">伴手禮專區</a></li>
		            <li class="dropdown">
		                
		             <a href="#" class="dropdown-toggle" data-toggle="dropdown">
		                    景點介紹<b class="caret"></b>
		                </a>
		                <ul class="dropdown-menu" id="dropdownmenu">
		                    <li><a href="nationalpark2.html">國家森林公園</a></li>
		                    <li class="divider"></li>
		                    <li><a href="Sitedetailspage.html">國家風景區</a></li>
		                    <li class="divider"></li>
		                    <li><a href="taipeitest.jsp">農委會休閒景點</a></li>
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
	
	<body>
	    
	    
	    </html>
