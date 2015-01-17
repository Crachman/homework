function showLocalTime() {
	// var d = new Date();
	alert("11111");
	// document.write(d.getTimeZoneOffset());
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

	// alert("123456");
	// add a zero in front of numbers<10
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('utc').innerHTML = h + ":" + m + ":" + s;
	t = setTimeout('startTime()', 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function isUserExit(userName){
	//var va = "前端变量";
	var a = '<% GetPass("' + userName + '") %>';
	alert(a);
}

function addUser() {
	var form = document.forms[0];
	form.action = /user/;
	form.method = "get";
	form.submit();
}

function isUserExist(){
	$.ajax({
		type:'POST',
		url:'user/isUserExist',
		dataType: 'json',
		success : function(data){
			if(data){
				alert("用户存在");
			}
			else{
				$("#sp_error").html("<p style=\"color:red\">用户名不存在<\p>");
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}

function testAjax(name) {
	$.ajax({
		type : 'POST',
		//contentType : 'application/json',
		url : 'user/testAjax',
		data :"name="+ name,//测试传递单个变量
		dataType : 'json',
		success :function(data){                  //取id="abc" 用$("#abc")   取class="abc" 用$(".abc")  取标签div 用$("div")，    
			$("#u_name")[0].value = data + "ooo"; //方式二$("#u_name").val("ddddd");
			
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}

function testObject(){
	$.ajax({
		type:'POST',
		url:'user/testAjaxObject',
		dataType: 'json',
		success : function(data){
			alert("后台调用成功："+"data");
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}













