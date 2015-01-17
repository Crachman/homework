package com.oocl.ems.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oocl.ems.dao.UserDao;
import com.oocl.ems.entity.User;
import com.oocl.ems.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	private UserDao userDao;

	public User checkPassword(User user) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", user.getUsername());
		params.put("password", user.getPassword());
		return userDao.get(params);
	}

	public boolean addUser(User user){
		return userDao.saveOrUpdate(user);
	}
	
	public boolean updatePassowrd(User user,String newPassword){
		User newUser = user;
		newUser.setPassword(newPassword);
		return userDao.saveOrUpdate(newUser);
	}
	
	
	@Override
	public boolean checkExist(String username) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		if(userDao.get(params) == null)
			return false;
		return true;
	}
	
	public boolean deleteUser(User user){
		return userDao.delete(user);
	}
	
	public UserDao getUserDao() {
		return userDao;
	}
	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	
	
	

}
