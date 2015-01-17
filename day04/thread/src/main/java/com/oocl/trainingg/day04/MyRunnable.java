package com.oocl.trainingg.day04;

public class MyRunnable implements Runnable {

	private boolean stopped = false;
	
	public void setStopped(boolean stopped) {
		this.stopped = stopped;
	}

	public void run() {
		System.out.println("I am in " + Thread.currentThread().getName());
		int i = 1;
		while (!stopped) {
			System.out.println(Thread.currentThread().getName() + ": " + i);
			i++;
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println(Thread.currentThread().getName() + ":is stopped!");
	}

}
