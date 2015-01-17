package com.oocl.ems.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;

public class BaseController {
	protected void writeJson(HttpServletResponse r,Object object) {
		try {
			String json = JSON.toJSONStringWithDateFormat(object, "yyyy-MM-dd HH:mm:ss");
			r.setContentType("text/html;charset=utf-8");
			r.getWriter().write(json);
			r.getWriter().flush();
			r.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	protected void writeString(HttpServletResponse r,String str){
		try {
			r.getWriter().write(str);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
