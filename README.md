# 배포
https://jcdororo.github.io/react-practice-app/

# context 참고
https://velog.io/@velopert/react-context-tutorial 참고


# 이슈 리스트


1. react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. 오류 - 해결!
-  컴포넌트에 key값을 넣어 해결 

<br/>

2. textarea에서 엔터키 입력으로 리스트에 추가하기 - 해결!
- onKeyDown 옵션으로 해결하였며, onKeyPress는 리액트에서 더이상 사용을 권장하지 않는다. 

<br/>

3. 입력창에 입력시, 불필요한 함수들이 호출됨 - 미해결
- 미해결

<br/>

4. 삭제기능 구현 - 해결!
- key값으로 고유한값인 Date.now()를 사용하였다. 

5. 수정 기능 구현 - 해결!
- event객체와 item객체를 함께 handleChange의 매개변수값으로 내려 수정하고, state를 다시 적용하는것으로 수정하기 구현 


6. 체크박스 기능 구현 - 해결!
- querySelectorAll의 인덱스값으로 요소를 찾아 체크박스 기능 구현하였다. 

7. 로컬 이미지 엑박 문제 - 해결 !
-    "homepage" : https://jcdororo.github.io/react-practice-app 이게 말썽이었다.   
```
   https://velog.io/@goban/%EB%A6%AC%EC%95%A1%ED%8A%B8-gh-pages-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EB%A1%9C%EC%BB%AC%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%91%9C%EC%8B%9C%EA%B0%80-%EC%95%88%EB%90%98%EB%8A%94-%EC%97%90%EB%9F%AC   
```

```
    https://velog.io/@jiyaho/React-github-page-%EB%B9%8C%EB%93%9C-%EC%8B%9C%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%95%88-%EB%9C%A8%EB%8A%94-%EC%98%A4%EB%A5%98   
```
8. 새로고침 하여도 이전의 데이터가 남아있게 구현 - 해결!
- localstorage를 이용하여 구현하였음.