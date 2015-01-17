<%@ page language="java" contentType="text/html; charset=utf-8"    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<meta http-equiv="Content-Type" content='text/html; charset=utf-8'>
	
	<title>Js test Page</title>
	<link href="../css/layout.css" rel="stylesheet" type="text/css" />
	<!--<link href="../js/validate.js" rel="stylesheet" type="text/javascript" />-->
	<script type="text/javascript" src="../js/validate.js"> </script> 
	<script type="text/javascript">
	
	</script>

</head>
	
<body onload="startTime()" >

	<input class="textBox" required type="text" name="userName" placeholder="用户名" autofocus="autofocus"/>
	<br/>
	<input class="textBox" required type="password" name="passWord" placeholder="密码" />
	<br>
	<h2>Hello World!</h2>
	<div id="txt" style="background-color:white; height:100px; width:200px">
	</div>
</body>
</html>

<!--
<html>
<head>
<script type="text/javascript">
function validate_email(field,alerttxt)
{
	with (field)
	{
		apos=value.indexOf("@")
		dotpos=value.lastIndexOf(".")
		if (apos<1||dotpos-apos<2) 
		 {
			alert(alerttxt);
			return false;
		}
		else
		{
			return true;
		}
	}
}

function validate_form(thisform)
{
	with (thisform)
	{
		if (validate_email(email,"Not a valid e-mail address!")==false)
	  	{
			email.focus();
			return false;
		}
	}
}
</script>
</head>

<body>
<form action="submitpage.htm" onsubmit="return validate_form(this);" method="post">
 Email: <input type="text" name="email" size="30">
<input type="submit" value="Submit"> 
</form>
</body>



</html>
-->