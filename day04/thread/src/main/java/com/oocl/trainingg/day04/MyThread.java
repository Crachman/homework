package com.oocl.trainingg.day04;

public class MyThread extends Thread {

	private boolean stopped = false;

	public void setStopped(boolean stopped) {
		this.stopped = stopped;
	}

	@Override
	public void run() {
		System.out.println("I am in " + getName());
		int i = 1;
		while (!stopped) {
			System.out.println(getName() + ": " + i);
			i++;
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		}
		System.out.println(getName() + ": is stopped!");

	}

}
