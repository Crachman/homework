package com.oocl.ems.service;

import com.oocl.ems.entity.User;

public interface UserService {
	public abstract User checkPassword(User user);
	
	public abstract boolean checkExist(String username);
	public abstract boolean addUser(User user);
	
	public abstract boolean updatePassowrd(User user,String newPassword);
	
	public abstract boolean deleteUser(User user);
}
