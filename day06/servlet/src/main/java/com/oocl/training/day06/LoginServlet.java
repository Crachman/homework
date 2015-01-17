package com.oocl.training.day06;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name="login",urlPatterns={"/html/login"})///login/*
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public LoginServlet() {
    	
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		request.getRequestURI();
//		request.getServletPath();
//		request.getServletContext().getContextPath();//代表
//		response.sendRedirect( getServletContext().getContextPath() + "/login.html");
		response.sendRedirect("/html/login.html");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userName = request.getParameter("username");
		String pwd = request.getParameter("pwd");
		String inputCode = request.getParameter("safecode").toUpperCase();
		String sessionCode = (String) request.getSession().getAttribute("code");
		
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		
		System.out.println("sessionCode:" + sessionCode + ",inputCode:" + inputCode);
		
		if (inputCode.equals(sessionCode)) {
			
			response.getWriter().println("验证码通过");	//中文显示
		} else {
			response.getWriter().println("safeCode is invalid!");
		}
		
		if (userName.equals(pwd)) {
			response.getWriter().println(userName + " OK");
		}else {
			response.getWriter().println(userName + " ERROR");
		}
	}

}
