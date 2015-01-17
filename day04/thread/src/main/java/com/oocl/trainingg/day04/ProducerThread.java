package com.oocl.trainingg.day04;

public class ProducerThread extends Thread {

	private ShareObject obj;

	public ProducerThread(ShareObject obj) {
		this.obj = obj;
	}

	@Override
	public void run() {
		int i = 1;
		while (true) {
			synchronized (obj) {

				if (obj.getPool() > 0) {
					try {
						obj.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				} else {
					System.out.println(Thread.currentThread().getName() + ":" + i);
					obj.setPool(i);
					i++;
					obj.notify();
				}
			}
		}
	}

}
