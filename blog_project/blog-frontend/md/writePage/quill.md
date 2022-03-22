# Quill

`npm i quill`

> 텍스트 에디터 라이브러리로서 블로그와 게시판같은 프로젝트에서 유용하다.  
> 텍스트를 여러가지로 변환해줄 수 있다.

- Quill이라는 생성자함수의 첫번째 인자로 quill을 사용할 UI를 할당해준다.  
  두번째 인자로는 quill옵션을 설정할 수 있다.

- react와 함께 사용한다면 quill을 사용할 react 요소를 ref로 지정하여 사용하면 된다.

```html
<!-- Include Quill stylesheet -->
<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet" />

<!-- Create the toolbar container -->
<div id="toolbar">
  <button class="ql-bold">Bold</button>
  <button class="ql-italic">Italic</button>
</div>

<!-- Create the editor container -->
<div id="editor">
  <p>Hello World!</p>
</div>

<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>

<!-- Initialize Quill editor -->
<script>
  // editor는 quill contents의 instance이다.
  var editor = new Quill("#editor", {
    modules: { toolbar: "#toolbar" },
    theme: "snow",
  });
</script>
```

**Quill with react**

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
