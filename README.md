# context 참고
https://velog.io/@velopert/react-context-tutorial 참고


# 이슈 리스트


1. react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. 오류   
-  컴포넌트에 key값을 넣어 해결 - 해결!

<br/>

2. textarea에서 엔터키 입력으로 리스트에 추가하기   
- onKeyDown 옵션으로 해결하였며, onKeyPress는 리액트에서 더이상 사용을 권장하지 않는다. - 해결!

<br/>

3. 입력창에 입력시, 불필요한 함수들이 호출됨
- - 미해결

<br/>

4. 삭제기능 구현
- key값으로 고유한값인 Date.now()를 사용하였다. - 해결!