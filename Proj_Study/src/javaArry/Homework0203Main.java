package javaArry;

import java.util.Arrays;
import java.util.Scanner;

public class Homework0203Main {

	public static void main(String[] args) {
		
		
		Homework0203Class hk = new Homework0203Class();
		
		Scanner scanner = new Scanner(System.in);
		System.out.print("���ڸ� �Է��ϼ��� : ");
		int arraySize = scanner.nextInt();
		
		int[] no = new int[arraySize];
		for (int i = 0; i < no.length; i++) {
				System.out.print(i+1 + "���ڸ� �Է��ϼ��� : ");
				no[i] = scanner.nextInt();
					
		}
		System.out.print(Arrays.toString(no));
		hk.setNo(no);
		hk.Homework();
	}
}
