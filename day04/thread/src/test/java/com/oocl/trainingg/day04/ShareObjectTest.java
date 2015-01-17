package com.oocl.trainingg.day04;

import static org.junit.Assert.*;

import org.junit.Test;

public class ShareObjectTest {

	/*@Test
	public void test() {
		fail("Not yet implemented");
	}
*/
	public static void main(String[] args) {
		ShareObject obj = new ShareObject();
		
		ProducerThread pt = new ProducerThread(obj);
		ConsumerThread ct = new ConsumerThread(obj);
		
		pt.start();
		ct.start();
	/*	Thread t1 = new Thread(pt);
		Thread t2 = new Thread(ct);
		
		t1.start();
		t2.start();
		
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println(Thread.currentThread().getName() + " is over");*/
	
	}
}
