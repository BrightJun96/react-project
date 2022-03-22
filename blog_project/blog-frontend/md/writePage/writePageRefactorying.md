## Refatorying시 생각해봐야할 부분

- UI구성 및 컴포넌트 구성이 적절한가

- 각 기능을 구현할 때 Memozing이 되어있는가?

- 상태관리는 적절하게 상태가 구분이 되어있는가(상태를 일일히 나눌지/객체에 담아 나눌지)

- API 연동은 어떻게 하고 있으며 최선의 방법이 무엇인가?  
  미들웨어를 쓰고 있다면 지금 상황에 redux saga와 redux-thunk를 써야하는지 고려

## TODO

1. UI 점검

2. 기능구현할 때에 memozing 관리

3. redux 상태 관리 refactorying

4. API 연동 코드 refactorying

5. UI점검(컴포넌트별로 생각해보자.)

**Component**

- `<Editor>` : 제목과 내용을 관리하는 컴포넌트

- `<TagBox>` : tag를 관리하는 컴포넌트

- `<WriteActionButton>` : 포스트 등록과 취소 버튼을 관리하는 컴포넌트

## Refactorying Element

1. UI 및 컴포넌트 설계

- **컴포넌트를 적절하게 구분하였는가**  
  각 기능별로 컴포넌트를 적절히 나눴다고 판단  
  제목과 내용을 담는 컴포넌트 , tag를 담은 컴포넌트 , 버튼을 담은 컴포넌트

- **컴포넌트의 각 element들이 적절하게 구성되어있는가?**  
  예를 들어, TagBox 컴포넌트(tag를 관리하는 컴포넌트)를 보았을 때, 각 element들이 과도하게 element로 감싸져있지 않은지, 아니면 부모 element로 감싸줘야하는데 안 감싸줬는지 등을 확인해봐야할 것이다.  
  지금 각 컴포넌트들은 각 element들을 styled-component로 작성하여 Component화가 되있다.

- **styled-component를 구분하는 것이 좋지 않을까**  
  styling이 많은 element들은 대부분 styled-component로 변환되었다.  
  하지만 컴포넌트를 보았을 때, 코드량이 많아보이고 스타일링요소와 react element요소가 구분되어있지않으니 파일이 복잡해보인다고 느꼈다.  
  때문에 각 컴포넌트별로 styled-component도 구분하는것이 좋다고 판단이 든다.

- **quillElement를 EditorContainer에서 정의하고 가져오면 안되는 것인가?**  
  기존 Editor 컴포넌트에서 quill을 다루는 코드가 지저분해보여 EditorContainer(redux 상태관리를 해주는)로 옮겼다.  
  옮긴 이유는 UI를 보여줄 Component는 최대한 깔끔한 것이 좋다고 생각해서이다.

- **UI를 보여주는 component가 깔끔하게 유지되고 있는가?**  
  redux를 사용한다면 UI component와 상태 관리를 해주는 container 컴포넌트로 구분하는데  
  이 때 최대한 UI component는 깔끔해야한다고 생각하기 때문에 UI에서는 최소한 코드로 구성하자.

- **styling으로 styled-component를 쓰는 것이 적절한가?**  
  취향에 따라 다를 수 있지만 개인적으로 element들에 className을 붙여서 sass로 styling을 한다하였을 때  
   지저분해보인다는 생각이 있어 styled-component가 더 좋다.

- **Editor 기능을 구현하기 위해 [Quill](quill.md)을 사용하였는데 React-quill을 사용하는 것은 어떨까?**  
  react와 quill를 사용했을 때는 react-quill을 사용하는 것이 훨씬 편하다.  
  react에서 그냥 quill을 쓰려할 때는 setup해야되는 부분이 많다.  
  하지만 react-quill을 쓰면 React 컴포넌트를 쓰듯이 사용할 수 있다.

### INSIGHT (부분적으로 블로그 포스팅할 내용)

1. UI 설계할 시 고려해야할 점

- 각 기능별로 컴포넌트를 구분하라.  
  예를 들어, WritePage같은 경우 세 가지 컴포넌트로 나누었다.  
  `<Editor>,<TagBox>,<WriteActionButton>`으로 말이다.  
  제목과 내용 기능을 하는 <Editor>,  
  태그를 입력할 수 있는 <TagBox>,  
  포스트 등록과 취소를 할 수 있는 <WriteActionButton>

  **Insight : 이렇게 자신이 구분 짓고자 하는 기능 별로 컴포넌트를 처음에 설계하는 것이 좋다.**

- styling시 사용 도구의 적절성  
  stlying할 때 내가 쓰고 있는 도구가 적절한가?  
  예를 들어, 현 프로젝트에서 각 컴포넌트의 stying을 styledComponent를 사용하였는데 쓰기에 적절한가?

- UI Component를 최대한 깔끔하게 유지하라.  
  redux로 상태관리를 한다면 componentContainer로 컴포넌트 상태유지를 할 것이다.  
  이럴 때 내 생각은 Container에서 할 수 있는 것들은 웬만하면 container에서 하는 것이 좋다고 생각한다.  
  UI component를 구성하는 component는 최대한 깔끔하게 유지하는 것이 좋다고 생각하기 때문에 꼭 필요한 부분만 UI Component에서  
  구현하는 것이 좋다고 생각한다.

2. 프로젝트를 구성할 때 어떤식으로 설계하면 좋은가?

3. 새로고침이 되면 UI들이 초기화되는 이유는?

4. useRef()가 반환하는 값은 무엇일까? 또한 인자로 할당하는 것은 어떤 기능을 할까?

5. quill라이브러리와 react-quill 라이브러리의 사용법
