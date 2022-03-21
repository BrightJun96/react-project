# Quill

`npm i quill`

> 텍스트 에디터 라이브러리로서 블로그와 게시판같은 프로젝트에서 유용하다.  
> 텍스트를 여러가지로 변환해줄 수 있다.

Quill이라는 생성자함수의 첫번째 인자로 quill을 사용할 UI를 할당해준다.  
두번째 인자로는 quill옵션을 설정할 수 있다.

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
