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


<link title="style3" rel="stylesheet" href="TEST/style3.css" type="text/css" />

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--start-menu-->





</head>
<body>
<jsp:include page="title.jsp"></jsp:include>
<div id="body">

	<div class="ckeckout">
		<form id ="form" action="Memberorder">
			<div class="container">
				<div class="row">
				<div class="col-sm-12 col-md-offset-3">
					<div id="product"  class="flow_steps clearfix">
						  <ul id="test" class="clearfix steps">
							    <li id="one" class="active done first current"><a id="size" data-toggle="tab"  onclick="add()" href="#home">購物清單</a></li>
							    <li id="two" class=""><a id="size" data-toggle="tab"  onclick="add1()" href="#menu1">完成</a></li>
							    <li id="three" class="last"><a id="size" href="test1.jsp">確認</a></li>  
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
								<li><span id="pictur1">圖片</span></li>
								<li><span id="pictur1">產品名稱</span></li>		
								<li><span id="pictur1">價格</span></li>
								<li><span id="pictur1">小計</span></li>
								<li> </li>
								<div class="clearfix"> </div>
							</ul>
							
							<c:forEach items="${membershopping}" var="idNumber">
							<c:forEach items="${idNumber.key}" var="list">
								<label><input type="hidden" value="${list.ID},${idNumber.value}" name="checkbox"></label>	
								<ul class="cart-header">
									<a href="shopping?id2=${list.ID}"><div class="close1"></div></a>
										<li class="ring-in"><a href="single.html" ><img src="${list.column1}" class="img-responsive" alt=""></a>
										</li>
										<li><span class="name">${list.name}</span></li>
										<li><span class="cost">$${idNumber.value}*${list.price}</span></li>
										<li><span class="cost">${list.price * idNumber.value}</span>
										<p></p></li>
									<div class="clearfix"> </div>
								</ul>
								<c:set var="sum" value="${sum+list.price * idNumber.value}"></c:set>
							</c:forEach>
							</c:forEach>
							
						</div>
						
							<font size="4"><u><c:out value="${sum}"></c:out></u></font><font size="4">:總計</font>
						  
							<button id="button" class="btn btn-primary" onclick="nextpage()">下一頁</button>
						
						
						</div>  
					    </div>
				 
				 
				 	</div>
				 	
				 	
				 	<div id="menu1" class="tab-pane fade">
				 			

								<div class="form_content"> 
							    <fieldset>
							        <legend>基本資料</legend>
							        <div class="form-row">
							            <div class="field-label"><label for="field1" style="font-size:15px">姓名</label>:</div>
							            <div class="field-widget"><input name="name" id="field1" class="required" title="Enter your name"required="required"/></div>
							        </div>
							        
							        <div class="form-row">
							            <div class="field-label"><label for="field2" style="font-size:15px">電話</label>:</div>
							            <div class="field-widget"><input name="phone" id="field2" class="required" title="Enter your phone" required="required"/></div>
							        </div>
							        
							        <div class="form-row">
							            <div class="field-label"><label for="field2" style="font-size:15px">市話</label>:</div>
							            <div class="field-widget"><input name="homephone" id="field2" class="required" required="required"/></div>
							        </div>
							        <div class="form-row">
							            <div class="field-label"><label for="field2" style="font-size:15px">郵件</label>:</div>
							            <div class="field-widget"><input type="email" name="email" id="field2" class="required" required="required"/></div>
							        </div>
							        
							        
							    </fieldset>
							    <fieldset>
							        <legend>配送方法</legend>
							        
							        <div class="form-row">
							            <div class="field-label"><label for="field4" style="font-size:15px">服務</label>:</div>
							            <div class="field-widget">
												 
													   <label><input  type="radio" name="optradio" value="郵局" style="font-size:15px" checked>郵局</label><br>
													   <label><input  type="radio" name="optradio" value="黑貓(自宅)" style="font-size:15px">黑貓</label><br>
													   <label><input  type="radio" name="optradio" value="新竹貨運" style="font-size:15px">新竹貨運</label><br>
												 	   
							            </div>
							        </div>
							        <div class="form-row">
							            <div class="field-label"><label for="field6" style="font-size:15px">取貨地點</label>:</div>
							            <div class="field-widget">
							                <select id="field6" name="location" class="validate-selection" title="Choose your department">
							                    <option style="font-size:15px" value="后里郵局(臺中86支)">后里郵局(臺中86支)</option>
							                    <option style="font-size:15px" value="后里義里郵局(臺中88支)">后里義里郵局(臺中88支)</option>
							                    <option style="font-size:15px" value="后里月眉郵局(臺中89支)">后里月眉郵局(臺中89支)</option>            
							                </select>
							            </div>
							        </div>
		      
							    </fieldset>  
							    <fieldset>
							        <legend class="optional">付款方式</legend>
							      
							        
							        <div class="form-row">
							            <div class="field-label"><label for="field9" style="font-size:15px">付款</label>:</div>
							            <div class="field-widget">
							                <select id="field6" name="select" class="validate-selection" title="Choose your department">
							                    <option value="郵局">郵局</option>
							                    <option value="ATM轉帳">ATM轉帳</option>
							                    <option value="信用卡">信用卡</option>            
							                </select>
							            </div>
							        </div>
							
							        
							    </fieldset>
							    <input id ="button" type="submit" class="submit" value="完成" />
							    </div>	
				 	</div>
				 </div>
				 
			</div>
		</form>		
	</div>
	
	
</div>	
</body>
</html>