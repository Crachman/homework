<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Teacher Login</title>
<script src="http://files.cnblogs.com/rubylouvre/jquery1.83.js" > </script>
<script src="../js/teacherOP.js"  type="text/javascript"> </script>
<link href="../css/service.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
</script>

</head>
<body>
	 <div class="topBan">
	 
		 <div class="showBan">
		 ${loginStatus}
		 </div>	
		 
	 
	 </div>
	 <hr/>
	 
	 <div class="navigator" >
			 <button  onclick="showTchInfo()" >基本信息</button><br>
			 <button  onclick="studentManage()" >学生信息</button><br>
			 <button  onclick="majorManage()" >专业管理</button><br>
			 <button  onclick="courseManage()">课程管理</button><br>
	 </div>
	 
	 <div class="contentDiv" id="showData" >
	 	<table class="table_test">
	 		<tr>
	 		<td>中岛直言</td>
	 		<td>中岛直言</td>
	 		<td>中岛直言</td>
	 		</tr>
	 		<tr>
	 		<td>中岛直言</td>
	 		<td>中岛直言</td>
	 		<td>中岛直言</td>
	 		</tr>
	 	</table>
	 </div>
</body>
</html>