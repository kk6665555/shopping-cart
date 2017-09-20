<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!--Custom-Theme-files-->
<!--theme-style-->
<link href="TEST/css/style1.css" rel="stylesheet" type="text/css" media="all" />


<link rel=stylesheet type="text/css" href="css/Detailed.css">	
<script src=js/Detailed.js></script>
<!--//theme-style-->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--start-menu-->





</head>
<body>
<jsp:include page="title.jsp"></jsp:include>


	<div class="ckeckout">
		<form id ="form" action="Memberorder">
				<div class="container">
				<div class="row">
				<div class="col-sm-12 col-md-offset-3">
					<div id="product"  class="flow_steps clearfix">
						  <ul id="test" class="clearfix steps">
							    <li id="one" class="active done first current"><a data-toggle="tab"  onclick="add()" href="#home">購物清單</a></li>
							    <li id="two" class=""><a data-toggle="tab"  onclick="add1()" href="#menu1">完成</a></li>
							    <li id="three" class="last"><a data-toggle="tab"   onclick="add2()" href="#menu2">確認</a></li>  
						  </ul>
					</div>
				</div>	
				</div>
				
				<div class="tab-content">
					<div id="home" class="tab-pane fade in active">
				
				
						<div class="ckeckout-top">
						<div class="cart-items">
				
						<div class="in-check" >		
							<ul class="unit">
								<li><span>圖片</span></li>
								<li><span>產品名稱</span></li>		
								<li><span>價格</span></li>
								<li><span>小計</span></li>
								<li> </li>
								<div class="clearfix"> </div>
							</ul>
							
							<c:forEach items="${membershopping}" var="idNumber">
							<c:forEach items="${idNumber.key}" var="list">
							
								<ul class="cart-header">
									<a href="shopping?id2=${list.ID}"><div class="close1"></div></a>
										<li class="ring-in"><a href="single.html" ><img src="${list.column1}" class="img-responsive" alt=""></a>
										</li>
										<li><span class="name">${list.name}</span></li>
										<li><span class="cost">$${list.price}*${idNumber.value}</span></li>
										<li><span>${list.price * idNumber.value}</span>
										<p></p></li>
									<div class="clearfix"> </div>
								</ul>
								<c:set var="sum" value="${sum+list.price * idNumber.value}"></c:set>
							</c:forEach>
							</c:forEach>
							
						</div>
						
							<font size="4"><u><c:out value="${sum}"></c:out></u></font><font>:總計</font>
						  
							<button id="button" class="btn btn-primary" onclick="nextpage()">下一頁</button>
						
						
						</div>  
					    </div>
				 
				 
				 	</div>
				 </div>
				 
				</div>
		</form>		
	</div>
	
	
	
</body>
</html>