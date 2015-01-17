package com.oocl.ems.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.classic.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.oocl.ems.entity.Json;
import com.oocl.ems.entity.User;
import com.oocl.ems.service.UserService;

@Controller
@RequestMapping("user/*")
public class UserController extends BaseController {

	@Autowired
	private UserService userService;

	@RequestMapping("login")
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response, User user) {
		System.out.println(user.getUsername());
		System.out.println(user.getPassword());

		if (userService.checkPassword(user) != null){
			
			HttpSession session = request.getSession();
			session.setAttribute("username", user.getUsername());
			return new ModelAndView("success");
		}
		else
			return new ModelAndView("index");

	}
	
	@RequestMapping("checkExist")
	public ModelAndView checkExists(HttpServletRequest request, HttpServletResponse response, String username) {
		Json result = new Json();

		if (userService.checkExist(username)) {
			result.setSuccess(false);
			result.setMsg("exist");
		} else {
			result.setMsg("not exist");
		}
		writeJson(response, result);
		return null;
	}
	
	@RequestMapping("register")
	public ModelAndView register(HttpServletRequest request, HttpServletResponse response, User user){

		userService.addUser(user);
		return login(request, response, user);
	}

}
