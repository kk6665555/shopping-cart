<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

<link rel="stylesheet" href="path/tobaguetteBox.min.css">
<link rel="stylesheet" href="css/gallery-clean.css">
<link rel="stylesheet" href="css/fluid-gallery.css">
<link rel="stylesheet" href="css/gallery-grid.css">
<link rel="stylesheet" href="css/thumbnail-gallery.css">
<link rel="stylesheet" href="assets/css/001.css"/>  
<script src="path/to/js/baguetteBox.min.js"></script>
    
    </head>
        
<style type="text/css">
    
    #toparea{
        
         background-color: 	#FFFFFF;
         
      

    }
    
    #change{
        background-image: url( 'assets/plugins/parallax-slider/img/bg.jpg' );
    
    width: 100%;
    height: 100%;
 

    }
    
    #imgright{
         float: right;
         padding-right:10%;
    }
   
    
    #indexh3{
     border-bottom: 2px solid #72c02c;
     
         color: #585f69;
    margin: 0 0 -2px 0;
    padding-right: 10px;
    display: inline-block;
    text-shadow: 0 0 1px #f6f6f6;
    font-size: 24px;
    font-family: inherit;
    margin-top:5%;
    
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

input[type=submit] {
    padding:5px 15px; 
    color:#fff;
    background:green; 
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; 
}

.color-red{
	color:red;
}
</style>        
<%
	String number=(String)request.getAttribute("number");
	String user=(String)request.getAttribute("user");
	out.println("<script type=\"text/javascript\">");					
	out.println("alert('親愛的客戶,已為您發送驗證碼至信箱,請至信箱查收');");
	out.println("</script>");
%>        
<body><!--=== 橫幅開始 ===-->
    <jsp:include page="title.jsp"></jsp:include>
	<!--=== 橫幅結束 ===-->
	
	<div class="col-sm-4"></div>
<form class="col-sm-5 form-horizontal" action="emailOK"  method='post' onsubmit="return checkAll();" role="form" style="margin-top:3%;border-radius: 4px;border: 2px solid green;background-color: rgba(87,168,29,0.3);">
	<input type="hidden" name="user" value="<%= request.getParameter("user") %>" />
	<div class="form-group">
	<label for="userName" class="col-sm-5 control-label" style="margin-top:2px;font-size:22px;color:green;">忘記密碼</label>    	  
	</div>
	
	<div class="form-group" style="margin-top:2px">
	<label for="passwd" class="col-sm-3 control-label" style="color:green;">驗證碼:</label>
    	<div class="col-sm-6">
      		<input type="text" id="nmber"  class="form-control"  placeholder="請輸入驗證碼" onblur="checknumber()"/>
    	</div>
    	<span id="numberId" class="col-sm-3" style="padding-top:7px;"></span>
    </div>
    
    <div class="form-group" style="margin-top:2px">
	<label for="passwd" class="col-sm-3 control-label" style="color:green;">新密碼:</label>
    	<div class="col-sm-6">
      		<input type="password" id="passwd"  name="passwd" class="form-control"  placeholder="請輸入新密碼" onblur="checkPass()">
    	</div>
    	<span id="passwdId" class="col-sm-3" style="padding-top:7px;"></span>
    </div>
    
	<div class="form-group" style="margin-top:2px">
	<label for="passwd" class="col-sm-3 control-label" style="color:green;">確認密碼:</label>
    	<div class="col-sm-6">
      		<input type="password" id="ckpasswd" class="form-control" placeholder="請重複輸入新密碼" onblur="doubleCheck()">
    	</div>
    	<span id="ckId" class="col-sm-3" style="padding-top:7px;"></span>
    </div>
    
    <div class="form-group">
		<div class="col-sm-offset-3 col-sm-7">
			<input type="submit" class="btn btn-default" value="送出"/>
		</div>
	</div>
</form>	
</body>
<script type="text/javascript">
function checknumber(){
	var inputNode = document.getElementById("nmber");
	var spanNode = document.getElementById("numberId");	
	var content  = inputNode.value;	
	if(content==<%=number%>){
		//符合规则
		spanNode.innerHTML = "✔ ok".fontcolor("green");
		
		return true;
	}else{
		//不符合规则
		spanNode.innerHTML ="請重新輸入".fontcolor("red");		
		return false;
	}	
}



function checkPass(){
	var inputNode = document.getElementById("passwd");
	var spanNode = document.getElementById("passwdId");	
	var content  = inputNode.value;
	var reg =/^[a-z0-9]{1,20}$/i;	
	if(reg.test(content)){
		//符合规则
		spanNode.innerHTML = "✔ ok".fontcolor("green");
		
		return true;
	}else{
		//不符合规则
		spanNode.innerHTML ="請重新輸入".fontcolor("red");		
		return false;
	}	
}

function doubleCheck(){
	var passwd = document.getElementById("passwd").value;
	var ckpasswd = document.getElementById("ckpasswd").value;
	var spanNode = document.getElementById("ckId");
	if(passwd == ckpasswd){
		//符合规则
		spanNode.innerHTML = "✔ ok".fontcolor("green");
		return true;
	}else{
		//不符合规则
		spanNode.innerHTML = "請重新確認".fontcolor("red");		
		return false;
	}
}


function checkAll(){
	var nmber = checknumber();
	var passwd = checkPass();
	var ck = doubleCheck();
	if(nmber && passwd && ck){
		return true;
	}	
		return false;
}
</script>

</html>