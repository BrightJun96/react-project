# [quill-react](https://github.com/zenoamaro/react-quill#with-webpack-or-create-react-app)

`npm install react-quill --save`

- react와 함께 사용할 때 사용하면 좋은 quill library

```js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");
  setValue(e); // e.target.value가 아닌 e로 불러와야함.
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
```

- 기존에 그냥 quill을 사용할 때는 여러가지 셋업을 해줬어야했지만 react-quill은 컴포넌트처럼 간편하게 사용할 수 있다.  
  아래의 react-quill을 사용하지 않았을 때 코드를 보자.

**Original Quill**

```js

quillElement =  useRef()

const Editor = ({ onChangeTitle, onChangeBody, title, quillElement }) => {

// 리액트요소에 접근하기 위해서는 ref를 지정해줘야함.
  quillElement =  useRef()
const quill = new Quill(quillElement.current, options);
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {  // source : text를 바꾸는 주체
// user가 text들 변경하기 때문에 source는 user이다.
        dispatch(changeBody(quill.root.innerHTML));  // root.innerHTML : quill의 html
      }
    });
  }, [dispatch]);
  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <QuillWrapper onChange={onChangeBody}>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

```

react-quill과 비교하여 훨씬 복잡한 것을 볼 수 있다.
