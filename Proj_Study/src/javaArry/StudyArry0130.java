package javaArry;

import java.util.Arrays;
import java.util.Scanner;

public class StudyArry0130 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("���ڸ� �Է��ϼ��� : ");
		int arraySize = scanner.nextInt();
		
		int[] no = new int[arraySize];
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "���ڸ� �Է��ϼ��� : ");
			no[i] = scanner.nextInt();
			
		}
		
		System.out.print(Arrays.toString(no));
		for (int i = 0; i < no.length; i++) {
			for (int j = i+1; j < no.length; j++) {
				int temp = 0;
				if (no[i] > no[j]) {
					temp = no[i];
					no[i] = no[j];
					no[j] = temp;
				}
			}
		}
		System.out.println();
		System.out.println("\n�ּҰ��� : " + no[0]);
		System.out.println("�ִ밪�� : " + no[no.length-1]);
		System.out.println();
		System.out.print(Arrays.toString(no));
		
		
		int[] lotto = new int[6];
		for (int i = 0; i < lotto.length; i++) {
			lotto[i] = (int)(Math.random() * 45+1);
			if (lotto[i] == lotto[j]) {
				
			}
		}
		
		
		
	}

}
