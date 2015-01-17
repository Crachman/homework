/**
 * 
 */

function stringFilter(s) {
	var pattern = new RegExp("[ `~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——|{}【】‘；：”“'。，、？]");
	var rs = "";
	for (var i = 0; i < s.length; i++) {
		rs = rs + s.substr(i, 1).replace(pattern, '');
	}
	return rs;
}

function tab() {
	// 最新的浏览器已经实现enter转tab的功能
	if (event.keyCode == 13) {
		alert("tab");
		event.keyCode = 9;
	}
}

function registerTabClick(ths){
	var style = ths.className;
	var nextNode = ths.nextElementSibling||ths.nextSibling;//FF,IE兼容
	if(style.indexOf(" active") < 0){		
		ths.className = "tab active rborder";
		nextNode.className = "tab";
		var rform = document.getElementById("registerForm");
		var lform = document.getElementById("loginForm");
		rform.className="form";
		lform.className="form hide-form";
//		nextNode.setAttribute("class", "tab");
	}
//		nextNode.Attr("class", "tab");這種不可以
//		nextNode.className = "tab";
}

function loginTabClick(ths){
	var style = ths.className;
	var preNode = ths.previousElementSibling||ths.previousSibling;//FF,IE兼容
	if(style.indexOf(" active") < 0){
		ths.className = "tab active lborder";
		preNode.className = "tab";
		var rform = document.getElementById("registerForm");
		var lform = document.getElementById("loginForm");
		rform.className="form hide-form";
		lform.className="form";
	}
//	alert("success!login");
}

// 判断用户是否存在
function isUserExist(userName) {
	var str = stringFilter(userName);
	if (userName.length != str.length || str.length == 0) {
		$("#sp_error").html("<p style=\"color:red\">输入有误<\p>");
		$("#bt_login").attr("disabled", true);
	} else {
		$("#bt_login").removeAttr("disabled");
		$.ajax({
			type : 'POST',
			url : 'user/isUserValid', // 调用后台
			data : "name=" + userName,
			dataType : 'json',
			success : function(data) {
				// alert("data:" + data);
				if (data) {
					$("#sp_error").html("<p style=\"color:red\">用户名存在<\p>");
					$("#bt_login").removeAttr("disabled");
				} else {
					$("#sp_error").html("<p style=\"color:red\">用户名不存在<\p>");
					$("#bt_login").attr("disabled", true);
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
				// alert(XMLHttpRequest.readyState);
				// alert(textStatus);
			}
		});
	}
}

function getCssAttr(id,css,attr){
	
}

//更改某個標簽中的class的某個css的某個屬性的值
function setCssAttr(id,css,attr,value){
	
}
