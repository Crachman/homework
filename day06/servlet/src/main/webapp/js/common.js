/***********************项目通用js代码***************************/
var EventUtil = {
	    addHandler: function (element, type, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(type, handler, false);
	        } else if (element.attachEvent) {
	            element.attachEvent("on" + type, handler);
	        } else {
	            element["on" + type] = handler;
	        }
	    }
	};
	(function () {
	    var showCount = 0;
	    EventUtil.addHandler(window, "load", function () {});
	    EventUtil.addHandler(window, "pageshow", function (event) {
	        showCount++;
	        var t = new Date().getMilliseconds();
	    	document.getElementById("safe").setAttribute("src", "../safe.jpg?" + t);	        
	    });
	})();

function stringFilter(s)
{
	var pattern = new RegExp("[ `~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——|{}【】‘；：”“'。，、？]");
	var rs = "";
	for (var i = 0; i < s.length; i++) {
	rs = rs+s.substr(i, 1).replace(pattern, '');
	} 
	
	return rs;
} 



//判断用户是否存在
function isUserExist(userName){
	var str = stringFilter(userName);
	if(userName.length != str.length || str.length == 0){
		$("#sp_error").html("<p style=\"color:red\">输入有误<\p>");
		$("#bt_login").attr("disabled",true);
	}
	else{
		$("#bt_login").removeAttr("disabled");
		$.ajax({
			type:'POST',
			url:'user/isUserValid', //调用后台
			data:"name=" + userName,
			dataType: 'json',
			success : function(data){
//				alert("data:" + data);
				if(data){
					$("#sp_error").html("<p style=\"color:red\">用户名存在<\p>");
					$("#bt_login").removeAttr("disabled");
				}
				else{
					$("#sp_error").html("<p style=\"color:red\">用户名不存在<\p>");
					$("#bt_login").attr("disabled",true);
				}
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
//				alert(XMLHttpRequest.readyState);
//				alert(textStatus);
			}
		});
	}
}
