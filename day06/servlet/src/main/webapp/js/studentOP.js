/***********************学生用户js代码***************************/

//显示学生信息
function showStuInfo(){
	$.ajax({
		type:'POST',
		url:'../user/infoStuQuery', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			$("#showData").html("username:<input value=\"" + data[0][0] + "\"/><br>" + 
					"majorname:<input value=\"" + data[0][1] + "\"/><br>" + 
					"role:<input value=\"" + data[0][2] + "\"/><br>");
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			/*
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);*/
		}
	});
}

//学生页面——显示所有的可选课程
function showAllCourseForStu(){
	$.ajax({
		type:'POST',
		url:'../course/allCourse', 
		dataType: 'json',
		success : function(data){
			
			$("#showData").html("<table id=\"t_tb\" class=\"table_css\" border=\"1\">" + "</table>");
			$("#t_tb").append("<thead><tr><th class=\"data_table\" >courseID</th><th class=\"data_table\">courseName</th><th class=\"data_table\">操作课程</th></tr></thead>");
			$("#t_tb").append("<tbody>");
			for(var i=0; i < data.length; i++){
				$("#t_tb").append("<tr><td class=\"data_table\">"+data[i][0] + "</td>" +
						              "<td class=\"data_table\">" + data[i][1] +"</td>" +
						              "<td class=\"data_table\">" +
						              	"<button onClick=\"doSelect("+ data[i][0] + ")\">选课</button>" +
						              	"<button onClick=\"doCancleSelect("+ data[i][0] + ")\">退课</button>" +
						              "</td></tr>");
			}
			$("#t_tb").append("</tbody>");
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
//			alert("error:showAllCourseForStu");
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}

//学生页面——选课操作
function doSelect(value){
	alert("进入选课操作");
	$.ajax({
		type:'POST',
		url:'../course/doSelect', //调用后台
		data:"course_id=" + value,
		dataType: 'json',
		success : function(data){
			alert("doSelect : " + data);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}

//学生页面——退课操作
function doCancleSelect(value){	
	$.ajax({
		type:'POST',
		url:'../course/doCancleSelect', //调用后台
		data:"course_id=" + value,
		dataType: 'json',
		success : function(data){
			alert("doCancleSelect : "+ data);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}

//学生页面——显示已选课程
function showSelectedCourse(){
	$.ajax({
		type:'POST',
		url:'../course/showSelectedCourse', //调用后台
		dataType: 'json',
		success : function(data){
			alert("显示课程表");
//			$("#showData").html("<p>"+ data +"</p>");
			$("#showData").html("<table id=\"t_tb\" class=\"table_css\" border=\"1\">" + "</table>");
			$("#t_tb").append("<thead><tr><th class=\"data_table\" >courseID</th><th class=\"data_table\">courseName</th></tr></thead>");//<th class=\"data_table\">操作课程</th>
			$("#t_tb").append("<tbody>");
			for(var i=0; i < data.length; i++){
				$("#t_tb").append("<tr><td class=\"data_table\">"+data[i].id + "</td>" +
						              "<td class=\"data_table\">" + data[i].courseName +"</td>" +
						              "</tr>");
			}
			$("#t_tb").append("</tbody>");
			
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest.readyState);
			alert(textStatus);
		}
	});
}
