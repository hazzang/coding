package javaArry;

import java.util.Arrays;
import java.util.Scanner;

public class StudyArry {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("���ڸ� �Է��ϼ��� : ");
		int arraySize = scanner.nextInt();
		System.out.println(arraySize);
			
		
		
		int[] no = new int[arraySize];
		System.out.println("���ڸ� " + no.length + " �Է����ּ���");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "��°���ڸ��Է����ּ��� : ");
			no[i] = scanner.nextInt();
			
		}
		
		System.out.println(Arrays.toString(no));
		
		int temp = 0;
		for (int i = 0; i < no.length-1; i++) {
			for (int j = i+1; j < no.length; j++) {
				if (no[i] > no[j]) {
					temp = no[i];
					no[i] = no[j];
					no[j] = temp;
				}
			}
			
		}
//		Arrays.sort(no);
		System.out.println("�ּҰ��� : " + no[0]);
		System.out.println("�ִ밪�� : " + no[no.length-1]);
		System.out.println(Arrays.toString(no));
		
		
		for (int i = 0; i < no.length-1; i++) {
			for (int j = i+1; j < no.length; j++) {
				if (no[i] < no[j]) {
					temp = no[i];
					no[i] = no[j];
					no[j] = temp;
				}
			}
			
		}
		System.out.println(Arrays.toString(no));
		
		int[] lotto = new int[6];
		for (int i = 0; i < lotto.length; i++) {
			lotto[i] = (int)(Math.random() * 45+1);
			for (int j = 0; j < i; j++) {
				if (lotto[i] == lotto[j]) {
					i--;
				}
			}
			
		}
		Arrays.sort(lotto);
		
		System.out.println(Arrays.toString(lotto));
		
//		int min = no[0];
//		int max = no[0];
////		
//		for (int i = 0; i < no.length; i++) {
//			no[i] = scanner.nextInt();
//			if (max < no[i]) {
//				max = no[i];
//			}
//		}
//		System.out.println("�ִ밪�� : " +  max);
//		
//		for (int i = 0; i < no.length; i++) {
//			no[i] = scanner.nextInt();
//			if (min > no[i]) {
//				min = no[i];
//			}
//		}
//		System.out.println("�ּҰ��� : " +  min);
//		
	}

}
