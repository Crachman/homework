<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Question Bank List</title>
<!-- 	<link href="../css/authority/main_css.css" rel="stylesheet" type="text/css" /> -->
	<link href="../css/authority/basic_layout.css" rel="stylesheet"	type="text/css">
	<link href="../css/authority/common_style.css" rel="stylesheet"	type="text/css">
	<link href="../css/authority/zTreeStyle.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="../js/jquery/jquery-1.7.1.js"></script>
	<script type="text/javascript" src="../js/zTree/jquery.ztree.core-3.2.js"></script>
	<script type="text/javascript" src="../js/authority/commonAll.js"></script>
	<style>
.alt td {
	background: black !important;
}
</style>
</head>

<body>
   <form id="submitForm" name="submitForm" action="" method="post">
		<input type="hidden" name="allIDCheck" value="" id="allIDCheck" /> 
		<input	type="hidden" name="fangyuanEntity.fyXqName" value="" id="fyXqName" />
		<div id="container">
			<div class="ui_content">
				<div class="ui_text_indent">
					<div id="box_border">
						<div id="box_bottom">
							<input type="button" value="查询" class="ui_input_btn01" 	onclick="onClickAjax();" /> 
							<input type="button" value="新增" class="ui_input_btn01" id="addBtn" /> 
							<input type="button" value="批量删除" class="ui_input_btn01" onclick="batchDel();" /> 
						</div>
					</div>
				</div>
			</div>
			<div class="ui_content">
				<div class="ui_tb">
					<table class="table" cellspacing="0" cellpadding="0" width="100%"
						align="center" border="0" id="getAllStudentResult">
						<tr>
							<th width="30"><input type="checkbox" id="all"	onclick="" /></th>
							<th>题号</th>
							<th>类别</th>
							<th>问题</th>
							<th>备注</th>
						</tr>

						<tr>
							<td><input type='checkbox' name='IDCheck' 	class='acb' /></td>
							<td>test</td>
							<td>test</td>
							<td><a href='http://www.baidu.com' class='edit'>这个问题，带有超链接...</a></td>
							<td>test</td>
						</tr>
						
						<tr>
							<td><input type='checkbox' name='IDCheck' 	class='acb' /></td>
							<td>test</td>
							<td>test</td>
							<td><a href='http://www.baidu.com' class='edit'>这个问题，带有超链接...</a></td>
							<td>test</td>
						</tr>
						
						<tr>
							<td><input type='checkbox' name='IDCheck' 	class='acb' /></td>
							<td>test</td>
							<td>test</td>
							<td><a href='http://www.baidu.com' class='edit'>这个问题，带有超链接...</a></td>
							<td>test</td>
						</tr>
						
						<tr>
							<td><input type='checkbox' name='IDCheck' 	class='acb' /></td>
							<td>test</td>
							<td>test</td>
							<td><a href='http://www.baidu.com' class='edit'>这个问题，带有超链接...</a></td>
							<td>test</td>
						</tr>
					
					</table>
				</div>
				<div class="ui_tb_h30">
					<div class="ui_flt" style="height: 30px; line-height: 30px;">
						共有 <span class="ui_txt_bold04">90</span> 条记录，当前第 <span class="ui_txt_bold04">1 / 9</span> 页
				</div>
				<div class="ui_frt">
						<!--    如果是第一页，则只显示下一页、尾页 -->

						<input type="button" value="首页" class="ui_input_btn01" /> <input
							type="button" value="上一页" class="ui_input_btn01" /> <input
							type="button" value="下一页" class="ui_input_btn01"
							onclick="jumpNormalPage(2);" /> <input type="button" value="尾页"
							class="ui_input_btn01" onclick="jumpNormalPage(9);" />


						<!--     如果是最后一页，则只显示首页、上一页 -->

						转到第<input type="text" id="jumpNumTxt" class="ui_input_txt01" />页
						<input type="button" class="ui_input_btn01" value="跳转"
							onclick="jumpInputPage(9);" />
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
</html>