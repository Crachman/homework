<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Management System</title>
<script src="http://files.cnblogs.com/rubylouvre/jquery1.83.js" > </script> 

<link href="../css/service.css" rel="stylesheet" type="text/css" />

<script type="text/javascript">
	function addUser()
	{
		var form = document.forms[0];
		form.action=/user/; 
		form.method="get";
		form.submit();
	}
    function selectCourse(){
    	jQuery.ajax({  
            type : 'POST', 
            contentType : 'application/json',  
            url : '../user/courseQuery',  
            data : "{}", 
            dataType : 'json',  
            success : function(data) {  
           	
             alert("cheng");
           
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }  
          });  
    }
</script>

</head>
<body>
	 <div class="topBan">
	 
		 <div class="showBan">
		 ${loginStatus}
		 </div>
		 
	 
	 </div>
	 <hr/>
	 
	 <div class="navigator">
		 <form>
			 <button type="submit" formmethod="POST" formaction="infoQuery" >基本信息</button><br>
			 <button type="button"  OnClick="selectCourse()">选课</button><br>
			 <button type="submit" formmethod="post" formaction="">课程表</button><br>
		 </form>
	 </div>
	 
	 <div class="contentDiv">
	${jsonStr}
	 
	 </div>
</body>
</html>