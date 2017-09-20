<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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


<style type="text/css">
    
    #iloginbar{
        float:left;
        width:5%;
    }
    #devider{
         float:left;
        width:5%;
    }
</style>
<!--=== 蒲公英特校 ===-->
<body class="custom-background">

<div class="snow-container" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100001;"></div>
<script type="text/javascript" src="all.js"></script>
<!--=== 蒲公英特校 ===-->
<%HttpSession sess = request.getSession(false);
  String id =(String) sess.getAttribute("user");
  System.out.println(id);
%>




 <jsp:include page="title2.jsp"></jsp:include>
	<!--=== 橫幅結束 ===-->


<div class="user_style clearfix" id="user">
<!--用户中心布局样式-->
   <div class="left_style">
   <!--栏目名称-->
   <div class="title_username">個人中心</div> 
  
   <div class="user_Head"> 
   <div class="user_time">
       <h4 id="y" class="years"></h4>
      <h1></h1>
      <h4 id="D"></h4>
     </div>
     <div class="user_portrait">
   <a href="#" title="修改头像"></a> <img src="images/a0012.png" />
    <div class="background_img"></div></div>
    
   </div>
<ul class="Section">
         <li><a href="personalmessage.jsp"><em></em><span>個人訊息</span></a></li>
       <li><a href="changePassword.jsp"><em></em><span>修改密碼</span></a></li>
       <li><a href="orserLiset?id=<%=id%>"><em></em><span>我的購物清單</span></a></li>
       <li><a href="black.jsp"><em></em><span>會員修改資料</span></a></li>
      </ul>
 </div>
 <!--右侧样式布局-->
 <div class="right_style r_user_style">
 <div class="Order_form">
       <div class="user_Borders">
       
	       <div class="title_name">
	       	 <span class="name">我的訂單</span>
	       </div>
       
       <div class="Order_form_list">
		         <table>
				         <thead>
						          <tr>
							          <td class="list_name_title0">商品</td>
							          <td class="list_name_title1">價格</td>
							          <td class="list_name_title2">數量</td>
							          <td class="list_name_title4">消費金額</td>
							          <td class="list_name_title5">訂單狀態</td>
							          <td class="list_name_title6">操作</td>
				        		   </tr>
				         </thead> 
			      
			      	
					
				<c:forEach items="${list1}" var="list">
				<c:forEach items="${list.key}" var="listkey">
				<c:choose>
					<c:when test="${listkey.status==2}">
					
								  <tr>
						          	 <td colspan="6" class="Order_form_time">${listkey.date} 訂單號：${listkey.ID}</td>
						           </tr>   
						<c:forEach items="${list.value}" var="listvalue">
						<c:forEach items="${listvalue.key}" var="listvaluekey">
					         <tbody>       	         
							           		<tr>
								           			<td colspan="3">
										          	 <table class="Order_product_style">
												          <tbody>
												         	 <tr>
													          	<td>
														            <div class="product_name clearfix">
														          	   <a href="#" class="product_img"><img src="${listvaluekey.column1 }" width="80px" height="80px"></a>
														         	   <a href="3">${listvaluekey.name}</a>
														        	    <p class="specification">${listvaluekey.specAndPrice}</p>
														            </div>
													            </td>
														        <td>${listvaluekey.price}</td>
														        <td>${listvalue.value}</td>
												             </tr>
												           </tbody>
										            </table> 
										           </td>   
										           
											       <td class="split_line">${listvaluekey.price*listvalue.value}</td>
											       <td class="split_line">已發貨物，已收貨</td>
											       <td class="operating">
									             	<a href="#">刪除</a>
									         	   </td>
							           		</tr>
							         
							        
					           </tbody>
					      </c:forEach>     
					      </c:forEach>    
					   </c:when> 
					   
					   <c:when test="${listkey.status==1}">
					   
					   			  <tr>
							         <td colspan="6" class="Order_form_time">${listkey.date} 訂單號：${listkey.ID}</td>
							      </tr>
					   	<c:forEach items="${list.value}" var="listvalue">
					    <c:forEach items="${listvalue.key}" var="listvaluekey">
					           <tbody>    

							          <tr>
								           <td colspan="3">
									            <table class="Order_product_style">
											           <tbody>
												           <tr>
													           <td>
														            <div class="product_name clearfix">
															            <a href="#" class="product_img"><img src="${listvaluekey.column1}" width="80px" height="80px"></a>
															            <a href="3">${listvaluekey.name}</a>
															            <p class="specification">${listvaluekey.specAndPrice}</p>
														            </div>
													            </td>
													            <td>${listvaluekey.price}</td>
													            <td>${listvalue.value}</td>
												           </tr> 
											            </tbody>
									            </table>          
								           </td>     
								               
								           <td class="split_line">${listvaluekey.price*listvalue.value}</td>
								           <td class="split_line">已發貨，待收貨物</td>
								           <td class="operating"> <a href="#">刪除</a></td>
							                      
							          
							           </tr>
							         
						         
					         	 
				         		</tbody>
				           </c:forEach>	
				           </c:forEach>	
				         </c:when>
	  			  </c:choose>
				  </c:forEach>  
				  </c:forEach>  
				</table>
		</div>
		
		</div>
	</div>
	
	</div>
	
	
	
	
	
	
</div>


</body>
    

    
</html>