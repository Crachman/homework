<%@ page language="java" contentType="text/html; charset=utf-8"  pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Student Login</title>
<script src="http://files.cnblogs.com/rubylouvre/jquery1.83.js" > </script> 

<link href="../css/service.css" rel="stylesheet" type="text/css" />
<script src="../js/studentOP.js"  type="text/javascript"> </script>

<script type="text/javascript">
	
</script>

</head>
<body >
	 <div class="topBan">
	 
		 <div id="utc" class="showBan">
		 <p> ${loginStatus} </p> 
		 </div>
		 
	 
	 </div>
	 <hr/>
	 
	 <div class="navigator">
		
		 <button OnClick="showStuInfo()" >基本信息</button><br>
		 <button OnClick="showAllCourseForStu()">可选课程</button><br>
		 <button OnClick="showSelectedCourse()">课程表</button><br>
	 </div>
	 
	 <div class="contentDiv" id="showData" >
	 
	 </div>
	<!--
	 <div class="showData2">
	 	<table border="1">
	 		<thead>
		 		<tr>
			 		<th>标题1</th>
			 		<th>标题2</th>
			 		<th>按钮</th>
		 		</tr>
	 		</thead>
	 		<tbody>
		 		<tr>
		 			<th>1</th>
			 		<th>string1</th>
			 		<th><button OnClick="fun()"></th>
		 		</tr>
		 		<tr>
		 			<th>2</th>
			 		<th>string2</th>
		 		</tr>
	 		</tbody>
	 	</table>
	 </div>
	  --> 
</body>
</html>