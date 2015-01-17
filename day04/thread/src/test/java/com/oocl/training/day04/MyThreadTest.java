package com.oocl.training.day04;

import com.oocl.trainingg.day04.MyRunnable;
import com.oocl.trainingg.day04.MyThread;

public class MyThreadTest {

	/*@Test
	public void test() {
		MyThread myThread = new MyThread();
		Thread thread = new Thread(myThread);
		
		thread.start();//为什么不会无限执行,跟JUnit的框架设置有关，用main方法执行有关
		//myThread.start()这样执行会怎么样？
		
	}*/

	public static void main(String[] args) {
		MyThread mt = new MyThread();
		Thread t1 = new Thread(mt);
		
		MyRunnable mr = new MyRunnable(); 
		Thread t2 = new Thread(mr);
		
		t1.start();
		t2.start();
		
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		mt.setStopped(true);
		mr.setStopped(true);
		
		try {
			t1.join();
			t2.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println(Thread.currentThread().getName() + ": is over!");
	}
}
