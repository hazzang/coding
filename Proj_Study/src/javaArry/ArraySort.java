package javaArry;

import java.util.Scanner;

public class ArraySort {

	public void inputArr(int[] no,Scanner sc) {
		
		System.out.println("���ڸ� " + no.length + " �Է����ּ���");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "��°���ڸ��Է����ּ��� : ");
			no[i] = sc.nextInt();
		}
		
	}
	
	
	public int[] inputArr2(int arraySize,Scanner sc) {
		int[] no = new int[arraySize];
		System.out.println("���ڸ� " + no.length + " �Է����ּ���");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "��°���ڸ��Է����ּ��� : ");
			no[i] = sc.nextInt();
		}
			
			
			return no;
	}
		

}
