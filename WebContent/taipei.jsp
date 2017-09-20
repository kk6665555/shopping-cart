<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if IE 7]> <html lang="en" class="ie7"> <![endif]-->  
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->  
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->  
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->  
<head>
    <title>樂活之旅</title>

    <!-- Meta -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <!-- CSS Global Compulsory-->
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/headers/header1.css" />
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap-responsive.min.css" />
    <link rel="stylesheet" href="assets/css/style_responsive.css" />
    <link rel="shortcut icon" href="favicon.ico" />        
    <!-- CSS Implementing Plugins -->    
    <link rel="stylesheet" href="assets/plugins/font-awesome/css/font-awesome.css" />
    <link rel="stylesheet" href="assets/plugins/flexslider/flexslider.css" type="text/css" media="screen" />    	
    <link rel="stylesheet" href="assets/plugins/parallax-slider/css/parallax-slider.css" type="text/css" />
    <!-- CSS Theme -->    
    <link rel="stylesheet" href="assets/css/themes/default.css" id="style_color" />
    <link rel="stylesheet" href="assets/css/themes/headers/default.css" id="style_color-header-1" />  
     <link rel="stylesheet" href="assets/css/001.css"/>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>	

<body>
<!--=== Style Switcher ===-->    
<i class="style-switcher-btn icon-cogs"></i>
<div class="style-switcher">
    <div class="theme-close"><i class="icon-remove"></i></div>
    <div class="theme-heading">Theme Colors</div>
    <ul class="unstyled">
        <li class="theme-default theme-active" data-style="default" data-header="light"></li>
        <li class="theme-blue" data-style="blue" data-header="light"></li>
        <li class="theme-orange" data-style="orange" data-header="light"></li>
        <li class="theme-red" data-style="red" data-header="light"></li>
        <li class="theme-light" data-style="light" data-header="light"></li>
    </ul>
</div><!--/style-switcher-->
<!--=== End Style Switcher ===-->    
<%
String user=(String)session.getAttribute("user");
%> 
<!--=== Top ===-->    
<div class="top">
    <div class="container">         
        <ul class="loginbar pull-right">
            <li><i class="icon-globe"></i><a>Languages <i class="icon-sort-up"></i></a>
                <ul class="nav-list">
                    <li class="active"><a href="#">English</a> <i class="icon-ok"></i></li>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">Russian</a></li>
                    <li><a href="#">German</a></li>
                </ul>
            </li>   
            <li class="devider">&nbsp;</li>
<li><a href="page_login.html" class="login-btn"><%if(user!=null){%> 歡迎~,<%=user%><%}else{%>登入<%} %></a></li> 
<%if(user!=null){%>
<li class="devider">&nbsp;</li>
<li><a href="logOut" class="login-btn">登出</a></li>
<%} %> 
        </ul>
    </div>      
</div><!--/top-->
<!--=== End Top ===-->    

<!--=== Header ===-->
<div class="header">               
    <div class="container"> 
        <!-- Logo -->       
        <div class="logo">                                             
            <a href="index.html"><img id="logo-header" src="assets/img/logo1-default.png" alt="Logo" /></a>
        </div><!-- /logo -->        
                                    
        <!-- Menu -->       
        <div class="navbar">                                
            <div class="navbar-inner">                                  
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a><!-- /nav-collapse -->                                  
                <div class="nav-collapse collapse">                                     
                    <ul class="nav top-2">
                        <li class="active">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">首頁    </a>
                           
                        </li>
                        <li>
                            <a href="souvenir.html">農家樂伴手禮 </a>
    
                        </li>
                        <li>
                            <a href="" class="dropdown-toggle" data-toggle="dropdown">景點介紹
                                <b class="caret"></b>                            
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="page_services.html">基隆</a></li>
                                <li><a href="page_pricing.html">台北</a></li>
                                <li><a href="page_coming_soon.html">桃園</a></li>
                                <li><a href="page_faq.html">新竹</a></li>
                                <li><a href="page_search.html">苗栗</a></li>
                                <li><a href="page_gallery.html">台中</a></li>
                                <li><a href="page_404.html">彰化</a></li>
                                 <li><a href="page_column_right.html">南投</a></li>
                                <li><a href="page_clients.html">雲林</a></li>
                                <li><a href="page_privacy.html">嘉義</a></li>
                                <li><a href="page_terms.html">台南</a></li>
                                <li><a href="page_column_left.html">高雄</a></li>
                                <li><a href="page_column_right.html">屏東</a></li>
                                 <li><a href="page_column_right.html">台東</a></li>
                                  <li><a href="page_column_right.html">花蓮</a></li>
                                   <li><a href="page_column_right.html">宜蘭</a></li>
                            </ul>
                            <b class="caret-out"></b>                        
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">住宿訂房
                                <b class="caret"></b>                            
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="portfolio.html">特色民宿</a></li>
                                <li><a href="portfolio_item.html">星級旅行</a></li>
                                <li><a href="portfolio_2columns.html">精選推薦</a></li>
                      
                            </ul>
                            <b class="caret-out"></b>                        
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">部落客推薦
                                <b class="caret"></b>                            
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="blog.html">近期推薦</a></li>
                                <li><a href="blog_item.html">搶購活動</a></li>
                                <li><a href="blog_left_sidebar.html">null</a></li>
                                <li><a href="blog_item_left_sidebar.html">null</a></li>
                            </ul>
                            <b class="caret-out"></b>                        
                        </li>
                        <li>
                            
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">會員專區
                                <b class="caret"></b>                            
                            </a>
                            <ul class="dropdown-menu">
                                    <li><a href="page_login.html">會員登入</a></li>
                                <li><a href="page_registration.html">成為會員</a></li>
                                <li><a href="page_contact1.html">公司地址</a></li>
                                 <li><a href="page_about.html">關於我們</a></li>
                               
                            </ul>
                            <b class="caret-out"></b>                        
                        </li>
                        <li><a class="search"><i class="icon-search search-btn"></i></a></li>                               
                    </ul>
                    <div class="search-open">
                        <div class="input-append">
                            <form />
                                <input type="text" class="span3" placeholder="Search" />
                                <button type="submit" class="btn-u">Go</button>
                            </form>
                        </div>
                    </div>
                </div><!-- /nav-collapse -->                                
            </div><!-- /navbar-inner -->
        </div><!-- /navbar -->                          
    </div><!-- /container -->               
</div><!--/header -->      
<!--=== End Header ===-->
<!--=== 底下這邊開始是BODY ===-->
<body>
<!--=== 最外框 ===-->
<html>
<head>
  <title>框中框</title>
  <meta charset="utf-8">
  <style>
  #Themostperipheral {
    overflow: auto;  /* 決定是否顯示框內物件,由於沒有設定 box1 高度,所以 box1 會包圍所有內裡物件 */
    /* height: 150px; */ /* 如有設定高度,而高度小於內裡物件,便會出現 scroll bar */
    width: 90%;
    
    margin: auto; /* 將 box1 左右置中 */
  }

 
  #in_box1 {
    height: 20%;
    width: 44%;
    
    border: 1px solid #d3d3d3;
    border-top-color: rgb(211, 211, 211);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(211, 211, 211);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(211, 211, 211);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(211, 211, 211);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    
    float: left; /* in_box1 及 in_box2 由左至右排列 */
     /* 把 in_box1 左右預留 5px的空白*/
    margin-left:20px;
    margin-top:10px;
    

   
  }

  #in_box2 {
      height: 172px;
    width: 40%;
     border: 1px solid #d3d3d3;
         border-top-color: rgb(211, 211, 211);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgb(211, 211, 211);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgb(211, 211, 211);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(211, 211, 211);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    
    float: right; /* in_box1 及 in_box2 由左至右排列 */
    margin: 30px; /* 把 in_box1 左右預留 5px的空白*/
  }
  #paglft{
      float:left;
      width:40%;
     
      margin-top:5px; 
      margin-left:5px; 
      margin-right:10px; 
      margin-bottom:5px; 
      
     
    
    
  }
  #pagret{   /*這裡是框框內部的文字需要設定*/
      float:right;
      padding-top:0px;
      width:70%;

     margin-left:auto; 
    
  }
  
  #titleg{
      font-size: 20px;
      padding-top:0px;
      padding-left:0px;
        height: 15%;
  }
  
   #titleg2{
      font-size: 8px;
      
      margin-top:10px;
      height: 65%;
    
   
  }
  
   #titleg3{
       float:right;
      margin-top:30px;
      margin-right:30px;
      height: 17%;

  }
#test{
    height:100%;
    width:100%;
}

#logocss{
    margin-left:2%;
     margin-top:30px;
}


#drop-down-top{
    float:left;
    margin-top:30px;
    height:20%;
    padding-left:15%;
    margin-right:100px;
    width:50%;
    
}
#drop-down-top2{
    float:left;
    height:20%;
   
    padding-right:15%;
    width:30%;
    text-shadow: 10px 10px 10px #333; 
}    

#ee{
color: 	#0000FF;

}

  </style>



<script>

function changeLink()
{

 var y=	document.getElementById('myAnchor').innerHTML;
 alert(y);
    
}



</script>

<body>
    
	<input type="button" onclick="changeLink()" value="改变链接">
	
    <div id="drop-down-top" >
          <h2 id="drop-down-top2">農委會休閒農場</h2>
     <ul class="drop-down-menu">
      
        <li><a href="#">北部景點</a>
            <ul	id='drop'>
                <li><a id="myAnchor">基隆</a>
                <li><a href="#">台北</a>
                </li>
                <li><a href="#">新北</a>
                </li>
                <li><a href="#">桃園</a>
                </li>
                <li><a href="#">新竹</a>
                </li>
                
            </ul>
        </li>
       
         <li><a href="#">中部景點</a>
            <ul>
                <li><a href="#">苗栗</a>
                </li>
                <li><a href="#">台中</a>
                </li>
                <li><a href="#">南投</a>
                </li>
                <li><a href="#">彰化</a>
                </li>
                <li><a href="#">雲林</a>
                </li>
            </ul>
        </li>
       
        <li><a href="#">南部景點</a>
            <ul>
                <li><a href="#">嘉義</a>
                </li>
                <li><a href="#">台南</a>
                </li>
                <li><a href="#">高雄</a>
                </li>
                <li><a href="#">屏東</a>
                </li>
            </ul>
        </li>
       
        <li><a href="#">東部景點</a>
            <ul>
                <li><a href="#">宜蘭</a>
                </li>
                <li><a href="#">花蓮</a>
                </li>
                <li><a href="#">台東</a>
                </li>
            
            </ul>
        </li>
       
        
    </ul>
  </div>
    
   <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    
    
    <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    
    
    <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    
    
    <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    
    
    <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    
    
    <div id="in_box1">
       <div id="paglft"><img id="test" src="assets/img/carousel/4.jpg"  /></div>

         <div id="pargret">
                   <div id="titleg"><a >黃金小鎮休閒農業區<a/></div>
                    <div id=titleg2>
                      <p class="JQellipsis">Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。一邊享受網路事業帶來的樂趣，一邊秉持著工作即是玩樂的精神，
                      不斷激發各種靈感為客戶提高收益，Astral Web是一群對網路充滿熱情的團隊，我們相信網路的力量無遠弗屆，
                      人人都有機會開創網路事業。</p>
                       
                      <div id="titleg3">
                        <img id="test" src="assets/img/carousel/readmore.jpg"  />
                        </div>        
                    </div>
         </div>
    </div>
    



<!-- JS Global Compulsory -->           
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="assets/js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="assets/js/modernizr.custom.js"></script>        
<script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script> 
<!-- JS Implementing Plugins -->           
<script type="text/javascript" src="assets/plugins/back-to-top.js"></script>
<!-- JS Page Level -->           
<script type="text/javascript" src="assets/js/app.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function() {
        App.init();
    });
</script>
<!--[if lt IE 9]>
    <script src="assets/js/respond.js"></script>
<![endif]-->
<script>
$(function(){
    var len = 200;
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
</script>

</body>
</html> 