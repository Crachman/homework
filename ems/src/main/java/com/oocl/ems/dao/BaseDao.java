package com.oocl.ems.dao;

import java.util.List;
import java.util.Map;

public interface BaseDao<E> {
	public abstract List<E> getAll();

	public abstract E get(Map<String,Object> params); 
	
	public abstract List<E> getList(Map<String,Object> params); 
	
	public abstract boolean saveOrUpdate(E entity);
	
	public abstract boolean delete(E entity);

}
