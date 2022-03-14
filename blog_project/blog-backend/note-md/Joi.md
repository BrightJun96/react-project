# [Joi](https://joi.dev/api/?v=17.6.0)

- 여러가지 입력값에 대한 validation을 할 때 유용한 라이브러리
- `npm i joi`

```js
const schema = Joi.object().keys({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.String()).required(),
});

const result = schema.validate(request.body);
```

- required()는 기재해야할 필수항목
