/***********************教师用户js代码***************************/

//显示教师的基本信息
function showTchInfo(){
	$.ajax({
		type:'POST',
		url:'../user/infoTchQuery', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			$("#showData").html("username:<input value=\"" + data[0][0] + "\"/><br>" + 
					"role:<input value=\"" + data[0][1] + "\"/><br>");
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}

//教师查看学生全部信息
function studentManage(){
	$.ajax({
		type:'POST',
		url:'../user/allStudentForTch', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			$("#showData").html("<table id=\"courseManage\" class=\"table_css\" border=\"1\" > </table>");
//			alert("课程管理");
			$("#courseManage").append("<thead><tr><th class=\"data_table\" >studentID</th><th class=\"data_table\">studentName</th><th class=\"data_table\">操作</th></tr></thead>");
			$("#courseManage").append("<tbody>");
			for(var i=0; i< data.length; i++){
				$("#courseManage").append("<tr><td class=\"data_table\"> <input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].id + "' readonly=\"readonly\"></td>" +
											 "<td class=\"data_table\">  <input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].userName + "' readonly=\"readonly\"> </td>" +
											 "<td class=\"data_table\">" +  "<button onClick=\"updateUser(this)\">编辑</button>" + 
											 /*"<button onClick=\"deleteUserByUid("+ data[i].id + ",'"+ data[i].userName +"')\">删除</button>" + 
											 "<button onClick=\"doCancleSelect("+ data[i].id + ")\"></button>" + */"</td></tr>");
			}
			$("#courseManage").append("</tbody>");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}

function updateUser(btn_edit){
	$(btn_edit).text("保存");
	var txt_name = $(btn_edit).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();
	txt_name.attr("class","input_edit");
	txt_name.attr("readOnly",false);
	txt_name.removeAttr("onfocus");
	$(btn_edit).attr('onclick','saveUser(this)');
//	alert("updateUser()执行完成");
}

function saveUser(btn_save){
	$(btn_save).text("编辑");
	var txt_name = $(btn_save).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();  //获取txt_id的值val
	$(btn_save).attr('onclick','updateUser(this)');
	txt_name.attr('class','input_unedit');
	txt_name.attr("readOnly",true);
	txt_name.attr("onfocus","this.blur()");
	$.ajax({
		type:'POST',
		url:'../user/updateUser', //调用后台 注意这里的加../
		dataType: 'json',
		data:{"u_id": txt_id.val(),"u_name" : txt_name.val()},
		success : function(data){
			if(data){
				alert("id="+txt_id.val()+"用户更新成功！");
				studentManage();
			}
			else{
				alert("id="+txt_id.val()+"该用户更新失败！");
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
		}
	});
}

function deleteUserByUid(id,name){
	if(confirm("确定要删除用户:"+ name)){
		$.ajax({
			type:'POST',
			url:'../user/delUserByUid', //调用后台 注意这里的加../
			dataType: 'json',
			data:"u_id=" + id,
			success : function(data){
				if(data){
					alert("用户删除成功！");
					studentManage();
				}
				else{
					alert("该用户不可删除！");
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert(XMLHttpRequest.status);
	//			alert(XMLHttpRequest.readyState);
	//			alert(textStatus);
			}
		});
	}
}

//显示教师页面的专业管理
function majorManage(){
	$.ajax({
		type:'POST',
		url:'../major/showAllMajor', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
//			var divShow = document.getElementById("showData");
//			divShow
			$("#showData").html("<table id=\"majorManage\" class=\"table_css\"> </table>");
//			alert("专业管理");
			$("#majorManage").append("<thead><tr><th class=\"data_table\" >majorID</th><th class=\"data_table\">majorName</th><th class=\"data_table\">操作</th></tr></thead>");
//			alert("专业管理1");
			$("#majorManage").append("<tbody>");
			for(var i=0; i< data.length; i++){
				$("#majorManage").append("<tr><td class=\"data_table\"><input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].id + "' readonly=\"readonly\"></td>" +
											 "<td class=\"data_table\"><input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].majorName + "' readonly=\"readonly\"></td>" +
											 "<td class=\"data_table\">" +  "<button onClick=\"updateMajor(this)\" >编辑</button>" + 
											 "<button class=\"\"  onClick=\"deleteMajor("+ data[i].id + ",'"+ data[i].majorName +"')\">删除</button>" + 
											 /*"<button onClick=\"doCancleSelect("+ data[i].id + ")\"></button>" + */"</td></tr>");
			}
			$("#majorManage").append("</tbody>");

		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}

function updateMajor(btn_eit){//点击编辑按钮，触发的事件
//	var btn = aThis;
//	alert("测试：");
//	$(aThis).empty();
//	alert("data.id="+data.id);
//	alert("data.name="+data.name);
	$(btn_eit).text("保存");
//	var tr = $(btn_save).parent().parent().children();
	var txt_name = $(btn_eit).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();  //获取txt_id的值val
//	alert("id="+txt_id.val());
//	alert("name="+txt_name.val());
	txt_name.attr("class","input_edit");
	txt_name.attr("readOnly",false);
	$(btn_eit).attr('onclick','saveMajor(this)');
	txt_name.removeAttr("onfocus");
	//txt_name.css("color","red");
}

function saveMajor(btn_save){//点击保存按钮，触发的事件
	$(btn_save).text("编辑");
	var txt_name = $(btn_save).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();  //获取txt_id的值val
//	inp.removeAttribute("readonly","");
//	inp.val("计算机2");
//	inp.style("color:red;");
	$(btn_save).attr('onclick','updateMajor(this)');
	txt_name.attr('class','input_unedit');
	txt_name.attr("readOnly",true);
	txt_name.attr("onfocus","this.blur()");
//	txt_name.css("color","black");
	$.ajax({
		type:'POST',
		url:'../major/updateMajor', //调用后台 注意这里的加../
		dataType: 'json',
		data:{"m_id": txt_id.val(),"m_name" : txt_name.val()},
		success : function(data){
			alert("保存成功");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
	
}

function deleteMajor(m_id, m_name){
	if(confirm("确定要删除专业："+ m_name)){
		$.ajax({
			type:'POST',
			url:'../major/delMajor', //调用后台 注意这里的加../
			dataType: 'json',
			data:"m_id=" + m_id,
			success : function(data){
				if(data){
					alert("专业删除成功！");
					majorManage();
				}
				else{
					
					alert("该专业不可删除！");
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert(XMLHttpRequest.status);
	//			alert(XMLHttpRequest.readyState);
	//			alert(textStatus);
			}
		});
	}
}

function addMajor(){
	$.ajax({
		type:'POST',
		url:'../major/allCourseForTch', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}

//显示教师页面的课程管理
function courseManage(){	
	$.ajax({
		type:'POST',
		url:'../course/allCourseForTch', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			$("#showData").html("<table id=\"courseManage\" class=\"table_css\" border=\"1\" > </table>");
//			alert("课程管理");
			$("#courseManage").append("<thead><tr><th class=\"data_table\" >courseID</th><th class=\"data_table\">courseName</th><th class=\"data_table\">操作</th></tr></thead>");
			$("#courseManage").append("<tbody>");
			for(var i=0; i< data.length; i++){
				$("#courseManage").append("<tr><td class=\"data_table\"> <input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].id + "' readonly=\"readonly\"></td>" +
											 "<td class=\"data_table\">  <input type = \"text\" class=\"input_unedit\" onfocus=\"this.blur()\" value='" + data[i].courseName + "' readonly=\"readonly\"> </td>" +
											 "<td class=\"data_table\">" +  "<button onClick=\"updateCourse(this)\">编辑</button>" + 
											 "<button onClick=\"deleteCourseByCid("+ data[i].id +",'"+ data[i].courseName + "')\">删除</button>" + 
											 /*"<button onClick=\"doCancleSelect("+ data[i].id + ")\"></button>" + */"</td></tr>");
			}
			$("#courseManage").append("</tbody>");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}

function updateCourse(btn_edit){//课程管理——点击编辑按钮，触发事件
	$(btn_edit).text("保存");
	var txt_name = $(btn_edit).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();
	txt_name.attr("class","input_edit");
	txt_name.attr("readOnly",false);
	txt_name.removeAttr("onfocus");
	$(btn_edit).attr('onclick','saveCourse(this)');
//	alert("id=" + txt_id.val());
}

function saveCourse(btn_save){//点击保存按钮，触发的事件
	$(btn_save).text("编辑");
	var txt_name = $(btn_save).parent().prev().children();
	var txt_id = txt_name.parent().prev().children();  //获取txt_id的值val
	$(btn_save).attr('onclick','updateMajor(this)');
	txt_name.attr('class','input_unedit');
	txt_name.attr("readOnly",true);
	txt_name.attr("onfocus","this.blur()");
	$.ajax({
		type:'POST',
		url:'../course/updateCourse', //调用后台 注意这里的加../
		dataType: 'json',
		data:{"c_id": txt_id.val(),"c_name" : txt_name.val()},
		success : function(data){
			if(data){
				alert("id="+txt_id.val()+"课程更新成功！");
				courseManage();
			}
			else{
				alert("id="+txt_id.val()+"该课程更新失败！");
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
		}
	});
	
}

function deleteCourseByCid(c_id, c_name){
	if(confirm("确定要删除课程:"+ c_name)){
		$.ajax({
			type:'POST',
			url:'../course/delCourseByCid', //调用后台 注意这里的加../
			dataType: 'json',
			data:"c_id=" + c_id,
			success : function(data){
				if(data){
					alert("课程删除成功！");
					courseManage();
				}
				else{
					alert("该课程不可删除！");
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert(XMLHttpRequest.status);
	//			alert(XMLHttpRequest.readyState);
	//			alert(textStatus);
			}
		});
	}
}

function addCourse(){
	$.ajax({
		type:'POST',
		url:'../course/allCourseForTch', //调用后台 注意这里的加../
		dataType: 'json',
		success : function(data){
			
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert(XMLHttpRequest.status);
//			alert(XMLHttpRequest.readyState);
//			alert(textStatus);
		}
	});
}


