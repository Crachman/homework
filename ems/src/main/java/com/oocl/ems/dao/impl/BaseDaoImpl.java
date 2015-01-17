package com.oocl.ems.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.oocl.ems.dao.BaseDao;

@Repository("baseDao")
public abstract class BaseDaoImpl<E> implements BaseDao<E> {

	protected abstract Class<E> getType();

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public List<E> getAll() {
		return hibernateTemplate.find("from " + getType().getSimpleName());
	};

	public E get(Map<String, Object> params) {
		List<E> list = getList(params);
		return list != null && list.size() != 0 ? list.get(0) : null;
	}

	public List<E> getList(Map<String, Object> params) {
		StringBuffer hql = new StringBuffer("from " + getType().getSimpleName() + " where 1=1 ");
		List<Object> values = new ArrayList<Object>();
		for (String field : params.keySet()) {
			hql.append(" and " + field + " = ?");
			values.add(params.get(field));
		}
		return hibernateTemplate.find(hql.toString(), values.toArray());
	}

	public boolean saveOrUpdate(E entity) {
		try {
			hibernateTemplate.saveOrUpdate(entity);
		} catch (HibernateException e) {
			return false;
		}
		return true;
	}

	public boolean delete(E entity) {
		try {
			hibernateTemplate.delete(entity);
		} catch (HibernateException e) {
			return false;
		}
		return true;
	}

}
