package javaArry;

import java.util.Arrays;
import java.util.Scanner;

public class StudyArry {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("숫자를 입력하세요 : ");
		int arraySize = scanner.nextInt();
		System.out.println(arraySize);
			
		
		
		int[] no = new int[arraySize];
		System.out.println("숫자를 " + no.length + " 입력해주세요");
		
		for (int i = 0; i < no.length; i++) {
			System.out.print(i + 1 + "번째숫자를입력해주세요 : ");
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
		System.out.println("최소값은 : " + no[0]);
		System.out.println("최대값은 : " + no[no.length-1]);
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
//		System.out.println("최대값은 : " +  max);
//		
//		for (int i = 0; i < no.length; i++) {
//			no[i] = scanner.nextInt();
//			if (min > no[i]) {
//				min = no[i];
//			}
//		}
//		System.out.println("최소값은 : " +  min);
//		
	}

}
