package com.oocl.trainingg.day04;

public class ConsumerThread extends Thread {

	private ShareObject obj;

	public ConsumerThread(ShareObject obj) {
		this.obj = obj;
	}

	@Override
	public void run() {
		while (true) {

			synchronized (obj) {

				int result = obj.getPool();
				if (result > 0) {
					System.out.println(Thread.currentThread().getName() + ":" + result);
					obj.setPool(-1);
					obj.notify();
				} else {
					try {
						obj.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}
	}

}
