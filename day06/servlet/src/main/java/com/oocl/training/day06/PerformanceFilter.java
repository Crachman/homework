package com.oocl.training.day06;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * Servlet Filter implementation class PerformanceFilter
 */
public class PerformanceFilter implements Filter {

    public PerformanceFilter() {
        // TODO Auto-generated constructor stub
    }


	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
//		System.out.println("PerformanceFilter: ");
		long start = System.nanoTime();
		
		chain.doFilter(request, response);
		long end = System.nanoTime();
		
//		System.out.println(((HttpServletRequest)request).getRequestURI());
//		System.out.println(end - start);
	}

	public void destroy() {
	}


	public void init(FilterConfig filterConfig) throws ServletException {
		
	}
}
