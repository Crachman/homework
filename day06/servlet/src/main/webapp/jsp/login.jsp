<%@page import="com.sun.xml.internal.bind.v2.schemagen.xmlschema.Import"%>

<%@ page language="java" contentType="text/html; charset=utf-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content='text/html; charset=utf-8'>
	
	<title>Login Page</title>
	<link href="css/layout.css" rel="stylesheet" type="text/css" /> 
	<script src="js/jquery1.83.js" > </script>
	<script src="js/common.js" > </script>
	<!-- css的路径问题，注意要到X-servlet.xml配置对静态资源的访问<mvc：resource > 否则会被Controller拦截 -->

</head>

<body>

	<div class="topBan"></div>
	<div class="middleBan">	
		<div class="midLeft"></div>	
		<div class="middleForm">
		 	
			<form class="formLogin" action="user/login" method="post" >
				
				<input id="u_name" class="textBox" required type="text"  name="userName" placeholder="用户名"  onblur="isUserExist(this.value)"/><!-- autofocus="autofocus" -->
				<br/>
				<input id="u_pwd" class="textBox" required type="password" name="passWord" placeholder="密码" "></input>
				<br>
				
				<input type="radio" name="authority" value="1" checked />student
				<input type="radio" name="authority" value="0" />teacher
				<!-- radio,只要name相同，就只能选中其中的一个 -->
				<br>
				
				<input id="bt_login" class="btLogin" type="submit" value="Login">
				<a href="jsp/register.jsp">Register</a>
				
			</form>
			<div class="formRight">
			<span id="sp_error"></span>
			</div>
		 
		</div>	
		<div class="midRight"></div>		
	</div>
	
</body>
</html>