<%@ page language="java" contentType="text/html; charset=utf-8"	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="css/layout.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery1.83.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</head>
<body>
	<div class="container">
		<div class="heading"></div> 
		<!-- 登陆框 -->
		<div class="login-box">
			<div class="login-header">
				<a href="#" class="tab" id="a_reg" onClick="registerTabClick(this)">Register</a>
				<a href="#" class="tab active lborder" id="a_log" onClick="loginTabClick(this)">Login</a>
			</div>

			<form action="" id="loginForm" class="form" method="post">
				<div>
					<input type="text" name="name" class="form-input" onkeydown="tab()" placeholder="Please input username" required="required">
<!-- 					<input type="text" name="name" class="login-form-input" onkeydown="tab()"  placeholder="Please input username" required="required"> -->
				</div>
				<div>
					<input type="password" name="pwd" class="form-input" placeholder="Please enter password!" required="required">
				</div>
				<div>
					<input type="radio" name="role" value="1" checked="checked"><label>Examee</label>
					<input type="radio" name="role" value="1"><label>Admin</label>
				</div>
				<button type="submit">Log in</button>
			</form>
			
			<form action="" id="registerForm" class="form hide-form" method="post">
				<div>
					<input type="text" name="email" class="form-input" placeholder="Please input username" onblur="">
				</div>
				<div>
					<input type="password" name="pwd" class="form-input" placeholder="Please enter password!" required="required">
				</div>
				<div>
					<input type="password" name="pwd" class="form-input" placeholder="Please enter the same password!" required="required">
				</div>
				<button type="submit">Register</button>
			</form>
		</div>

	</div>
</body>
</html>