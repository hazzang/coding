package javaArry;

import java.util.Arrays;
import java.util.Scanner;

public class ArraySortMain {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("���ڸ� �Է��ϼ��� : ");
		int arraySize = scanner.nextInt();
		
		System.out.println(arraySize);
		
		ArraySort as = new ArraySort();
		
		int[] arr = new int[arraySize]; 
		
		as.inputArr(arr,scanner);
		
		int[] arr2 = as.inputArr2(arraySize, scanner);
		
		System.out.println(Arrays.toString(arr));
		System.out.println(Arrays.toString(arr2));
		
	}

}
