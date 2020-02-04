package javaArry;

import java.util.Scanner;

public class ArraySort {

	public void inputArr(int[] no,Scanner sc) {
		
		System.out.println("숫자를 " + no.length + " 입력해주세요");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "번째숫자를입력해주세요 : ");
			no[i] = sc.nextInt();
		}
		
	}
	
	
	public int[] inputArr2(int arraySize,Scanner sc) {
		int[] no = new int[arraySize];
		System.out.println("숫자를 " + no.length + " 입력해주세요");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "번째숫자를입력해주세요 : ");
			no[i] = sc.nextInt();
		}
			
			
			return no;
	}
		

}
