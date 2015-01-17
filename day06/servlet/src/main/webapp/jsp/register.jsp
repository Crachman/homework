<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Register Page</title>
</head>
<body>
	 <div>
	 <p>url  =  http://localhost:8080/MavenApp/jsp/register.jsp</p>
	 <script>document.write(location.href);</script>
        <form action="../user/register" method="post"><!-- 注意路径 -->
            <input required type="text" name="userName" placeholder="userName"><br/>
            <br/>
            <input required type="text" name="passWord" placeholder="passWord"><br/>
            <br/>
            
            <input type="submit" value="Register">
        </form>
    </div>
</body>
</html>