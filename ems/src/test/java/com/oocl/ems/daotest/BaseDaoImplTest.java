package com.oocl.ems.daotest;

import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.oocl.ems.dao.UserDao;

// 指定测试用例的运行器 这里是指定了Junit4
public class BaseDaoImplTest {
	@Autowired
	private UserDao userDao;

	@Before
	public void setUp() throws Exception {
		
	}

	@Test
	public void testGetType() {
		userDao.getAll();
		fail("Not yet implemented");
	}

	@Test
	public void testGetAll() {
		fail("Not yet implemented");
	}

	@Test
	public void testGet() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetList() {
		fail("Not yet implemented");
	}

	@Test
	public void testSaveOrUpdate() {
		fail("Not yet implemented");
	}

	@Test
	public void testDelete() {
		fail("Not yet implemented");
	}

}
