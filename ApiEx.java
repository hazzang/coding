import java.util.ArrayList;
import java.util.List;

/**
 * ApiEx
 */
public class ApiEx {

    public static void main(String[] args) {
        List<String> phoneNumList = new ArrayList<String>();
        List<String> priceList = new ArrayList<String>();

        // 인터넷 보지않기
        // list는 for문을 이용해서 작업하되 length를 사용하지 못하니 size()를 사용해서 갯수를 가져온다.

        // -를 제거하고 3개를 각 각 출력 split사용
        phoneNumList.add("010-1111-2222");
        phoneNumList.add("010-3333-4444");
        phoneNumList.add("010-5555-6666");

        for (int i = 0; i < phoneNumList.size(); i++) {

            String[] arr = phoneNumList.get(i).split("-");
            String result = "";
            for (int j = 0; j < arr.length; j++) {
                result += arr[j];
            }
            phoneNumList.set(i, result);
        }

        System.out.println(phoneNumList);

        for (String string : phoneNumList) {
            System.out.println(string.substring(0, 3) + "-" + string.substring(3, 7) + "-" + string.substring(7, 11));
        }

        // 가격에서 ,를 제거하라 replace사용
        priceList.add("12,000");
        priceList.add("22,000");
        priceList.add("33,000");

        for (int i = 0; i < priceList.size(); i++) {
            System.out.println(priceList.get(i).replace(",", ""));

        }

        // 이미지 파일을 읽어와 같은 경로에 파일을 생성하되 파일명 앞에 s_붙이기
    }
}