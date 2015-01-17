package com.oocl.ems.dao.impl;

import org.springframework.stereotype.Repository;

import com.oocl.ems.dao.UserDao;
import com.oocl.ems.entity.User;

@Repository("userDao")
public class UserDaoImpl extends BaseDaoImpl<User> implements UserDao{

	@Override
	protected Class<User> getType() {
		return User.class;
	}

}
