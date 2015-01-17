package com.oocl.training.day04;

import static org.junit.Assert.*;

import org.junit.Test;

import com.oocl.trainingg.day04.MyRunnable;

public class MyRunnableTest {

	@Test
	public void testRun() {
		Runnable r = new MyRunnable();
		Thread t = new Thread(r);
		
		t.start();
	}

}
