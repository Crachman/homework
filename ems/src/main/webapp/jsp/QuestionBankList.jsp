<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Question Bank List</title>
	<link href="../css/authority/main_css.css" rel="stylesheet" type="text/css" />
	<link href="../css/authority/zTreeStyle.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="../js/jquery/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="../js/zTree/jquery.ztree.core-3.2.js"></script>
	<script type="text/javascript" src="../js/authority/commonAll.js"></script>
	<script type="text/javascript" src="../js/pages/mainPage.js"></script>
<script type="text/javascript">
	
		/**退出系统**/
		function logout(){
			if(confirm("您确定要退出本系统吗？")){
				$.post("./user/logoutUser",function(data){
					$("#currentUser").empty().append(data);
				});
				window.location.href = "index.html";
			}
		}
		
		/**获得当前日期**/
		function  getDate01(){
			var time = new Date();
			var myYear = time.getFullYear();
			var myMonth = time.getMonth()+1;
			var myDay = time.getDate();
			if(myMonth < 10){
				myMonth = "0" + myMonth;
			}
			document.getElementById("yue_fen").innerHTML =  myYear + "." + myMonth;
			document.getElementById("day_day").innerHTML =  myYear + "." + myMonth + "." + myDay;
// 			getUserStatus();	// 更新用户状态	
		}
		
// 		/**查询session中用户是否登录**/
// 		function getUserStatus(){
// 			$.post("./user/getSessionStatus",function(data){
// 				$("#currentUser").empty().append(decodeURI(data));
// 			});
// 		}
	</script>
</head>

<body onload="getDate01()">
    <div id="top">
<!-- 		<div id="top_logo"> -->
<!-- 			<img alt="logo" src="../images/common" width="274" height="49" style="vertical-align:middle;"> -->
<!-- 		</div> -->
		<div id="top_links">
			<div id="top_op">
				<ul>
					<li>
						<img alt="当前用户" src="../images/common/user.jpg">：
						<span id="currentUser">guest</span>
					</li>
					<li>
						<img alt="事务月份" src="../images/common/month.jpg">：
						<span id="yue_fen"></span>
					</li>
					<li>
						<img alt="今天是" src="../images/common/date.jpg">：
						<span id="day_day"></span>
					</li>
				</ul> 
			</div>
			<div id="top_close">
				<a href="javascript:void(0);" onclick="logout();" target="_parent">
					<img alt="退出系统" title="退出系统" src="../images/common/close.jpg" style="position: relative; top: 10px; left: 25px;">
				</a>
			</div>
		</div>
	</div>
    <!-- side menu start -->
	<div id="side">
		<div id="left_menu">
		 	<ul id="TabPage2" style="height:200px; margin-top:50px;">
				<li id="left_tab1" class="selected" onClick="javascript:switchTab('TabPage2','left_tab1');" title="业务模块">
					<img alt="业务模块" title="业务模块11" src="../images/common/1_hover.jpg" width="33" height="31">
				</li>
				<li id="left_tab2" onClick="javascript:switchTab('TabPage2','left_tab2');" title="系统管理">
					<img alt="系统管理" title="系统管理22" src="../images/common/2.jpg" width="33" height="31">
				</li>		
				<li id="left_tab3" onClick="javascript:switchTab('TabPage2','left_tab3');" title="其他">
					<img alt="其他" title="其他33" src="../images/common/3.jpg" width="33" height="31">
				</li>
			</ul>
			
			
			<div id="nav_show" style="position:absolute; bottom:0px; padding:10px;">
				<a href="javascript:;" id="show_hide_btn">
					<img alt="显示/隐藏" title="显示/隐藏" src="../images/common/nav_hide.png" width="35" height="35">
				</a>
			</div>
		 </div>
		 <div id="left_menu_cnt">
		 	<div id="nav_module">
		 		<img src="../images/common/module_1.png" width="210" height="58"/>
		 	</div>
		 	<div id="nav_resource">
		 		<ul id="dleft_tab1" class="ztree"></ul>
		 	</div>
		 </div>
	</div>

    <!-- side menu start -->
    <div id="top_nav">
	 	<span id="here_area">当前位置：系统管理&nbsp; &gt; &nbsp;</span>
	</div>
    <div id="main">
      	<iframe name="right" id="rightMain" src="../jsp/exampleList.jsp" frameborder="no" scrolling="auto" width="100%" height="100%" allowtransparency="true" />
    </div>
</body>
</html>