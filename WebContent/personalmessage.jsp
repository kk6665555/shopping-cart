<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.Properties"%>
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
<link rel="stylesheet" href="NewCss/css/a001.css"/>  
<link rel="stylesheet" href="NewCss/css/a003.css"/>  
<!--=== 購物車本身 ===-->

<link href="NewCss/css/common.css" rel="stylesheet" tyle="text/css" />
<link href="NewCss/css/style02.css" rel="stylesheet" type="text/css" />
<link href="fonts/iconfont.css" rel="stylesheet" type="text/css" />
<link href="NewCss/css/Orders.css" rel="stylesheet" type="text/css" />

<script src="js1/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="js1/jquery.SuperSlide.2.1.1.js" type="text/javascript"></script>
<script src="js1/common_js.js" type="text/javascript"></script>
<script src="js1/footer.js" type="text/javascript"></script>
<script src="js1/jquery.jumpto.js" type="text/javascript"></script>

<!--=== 購物車本身頁面連結 ===-->





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
</script>

</head>
<script type="text/javascript">
  $(document).ready(function(){

		  setInterval(showTime, 1000);                                
		  function timer(obj,txt){
						  obj.text(txt);
		  }        
		  function showTime(){                                
				  var today = new Date();
				  var weekday=new Array(7)
				  weekday[0]="星期日"
				  weekday[1]="星期一"
				  weekday[2]="星期二"
				  weekday[3]="星期三"
				  weekday[4]="星期四"
				  weekday[5]="星期五"
				  weekday[6]="星期六"                                        
				  var y=today.getFullYear()+"年";
				  var month=today.getMonth()+1+"月";
				  var td=today.getDate();
				  var d=weekday[today.getDay()];
				  var h=today.getHours();
				  var m=today.getMinutes();
				  var s=today.getSeconds();        
				  timer($("#y"),y+month);
				  //timer($("#MH"),month);        
				  timer($("h1"),td);        
				  timer($("#D"),d);
				  timer($("#H"),h);
				  timer($("#M"),m);
				  timer($("#S"),s);
		  }        
  })
</script>        

<%
	String user=(String)session.getAttribute("user");
	if(user==null){
		request.getRequestDispatcher("logIn.jsp").forward(request, response);
	}
	Properties prop = new Properties();
	prop.setProperty("user", "root");
	prop.setProperty("password", "root");

	String sql = "SELECT  sname,user,passwd,tel,email,address FROM member WHERE user= '"+user+"'";
	try {			
		Class.forName("com.mysql.jdbc.Driver");		
	} catch (Exception e) {
		System.out.println(e);
	}		
%>        

<!--=== 蒲公英特校 ===-->
<body class="custom-background">

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>
<script type="text/javascript" src="all.js"></script>
<!--=== 蒲公英特校 ===-->

       <jsp:include page="title2.jsp"></jsp:include>
	<!--=== 橫幅結束 ===-->


<div class="user_style clearfix" id="user">

 <!--用?中心布局?式-->
   <div class="left_style">
   <!--?目名?-->
   <div class="title_username">個人中心</div> 
  
   <div class="user_Head"> 
   <div class="user_time">
       <h4 id="y" class="years"></h4>
      <h1></h1>
      <h4 id="D"></h4>
     </div>
     <div class="user_portrait">
   <a href="#" title="修改?像"></a> <img src="images/a0012.png" />
    <div class="background_img"></div></div>
    
   </div>
<ul class="Section">
         <li><a href="personalmessage.jsp"><em></em><span>個人訊息</span></a></li>
       <li><a href="changePassword.jsp"><em></em><span>修改密碼</span></a></li>
       <li><a href="user_OrdersList.jsp"><em></em><span>我的購物清單</span></a></li>
       <li><a href="black.jsp"><em></em><span>會員修改資料</span></a></li>
      </ul>
 </div>
 <!--右??式布局-->
   <div class="right_style r_user_style">
    <!--地址管理-->
     <div class="user_address">
        <div class="title_name"> <span class="name">個人資料</span></div>
        
        <!--添加地址?式-->
          <script src="Threelinkage/kit.js"></script>
		<!--[if IE]>
		<script src="Threelinkage/ieFix.js"></script>
		<![endif]-->
		<script type="text/javascript">
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-30210234-1']);
			_gaq.push(['_trackPageview']);
			(function() {
				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(ga, s);
			})();

		</script>
		<script src="Threelinkage/dom.js"></script>
		<script src="Threelinkage/event.js"></script>
        <script src="Threelinkage/math.js"></script>
		<script src="Threelinkage/TreeDict.js"></script>
		<script src="Threelinkage/form.js"></script>
		<script src="Threelinkage/combobox.js"></script>
		<script src="Threelinkage/suggestselect.js"></script>
		<script src="Threelinkage/list.js"></script>
		<!--json data-->
		<script src="Threelinkage/json-data.js" charset="utf-8"></script>
        <link href="Threelinkage/linkage.css" rel="stylesheet"  type="text/css"/>
	<%
            try (
            		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/attractions",prop);
            		PreparedStatement pstmt=conn.prepareStatement(sql);				
            		)
            	{					
            		ResultSet rs = pstmt.executeQuery();
			if(rs.next()) { 
            	%> 
        <form >
        <div class="Add_Addresss">
            
             <table>
              <tr>
               <td class="label_name">姓名</td><td><p><%=rs.getString("sname") %></p></td>
               </tr>               
              <tr>
              <td class="label_name">帳號</td><td><p><%=rs.getString("user") %></p></td>
              </tr>
              <tr>
              <td class="label_name">密碼</td><td><p><%=rs.getString("passwd") %></p></td>
              </tr>
              <tr>
              <td class="label_name">E-mail</td><td><%=rs.getString("email") %></td>
              </tr>
              <tr>
              <td class="label_name">地址</td><td><p><%=rs.getString("address") %></p></td>
              </tr>
              <tr>
              <td class="label_name">連絡電話</td><td><%=rs.getString("tel") %></td>
              </tr>             
             </table>
             
             
             
         </div>
       </form>
	<% 
					 
				      }
				   }catch (Exception e){
		           		System.out.println(e);
		           }
			           %>
     </div>
   </div>
</div>





</body>
    

    
</html>