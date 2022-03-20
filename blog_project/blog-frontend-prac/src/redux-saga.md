##

saga는 generator가 객체를 넘겨주므로써 실행된다.
해당 객체를 effect라고 하며 effect API들은 객체를 만드는 함수이다.

- effect는 middleware가 여러 가지 기능을 실행할 수 있도록 해준다.(비동기 요청/다른 액션을 dispatch해준다던가)
- generator안에서는 직접직인 함수를 실행하게 하는 것은 좋지 않다. 해당 함수를 표현하는 객체를 사용해주는 것이 좋은데 이 객체를 쉽게 사용하게 해주는 것이  
  effect API이다.

### channel

### fork

### eventChanel(emmiter)

외부소스를 chanel로 전달해준다.

#### emmiter

외부 소스를 초기화해준다. 그리고 외부소를 channel로 전달해준다.

### take(pattern)

- pattern과 일치하는 action이 dispatch될 때까지 generator가 실행되지 않게 한다.
- Besides usage with a pattern to take specific actions from the Redux Store, take can also be used with channels
- The take will block the Saga until a message is available on the channel.

## Effect

- Each function below returns a plain JavaScript object and does not perform any execution.
- The execution is performed by the middleware during the Iteration process described above.
- The middleware examines each Effect description and performs the appropriate action.

## Quest

Q1.fetch/axios대신 cala API를 사용하는이유?

- generator를 쉽게 test할 수 있게 해준다?
- call은 plain object를 반환하기 때문에
- middleware는 call이라는 effects를 test하고 다시 generator로 넘겨준다.(fetch는 test하기 어려운가?)
- generator value를 test하기 용이하다.
- call은 직접적으로 실행하지않고 call반환하는 객체가 middleware로 넘어가면서 call 반환하는 객체에 대한 설명과 함께 이를 인식하여
  실행된다.

  > The difference from the preceding example is that now we're not executing the fetch call immediately, instead, call creates a description of the effect.
  > Just as in Redux you use action creators to create a plain object describing the action that will get executed by the Store, call creates a plain object describing the function call. The redux-saga middleware takes care of executing the function call and resuming the generator with the resolved response.

  - 즉 , generator 함수내에서 직접적으로 실행하는 함수들을 쓰기보다는 객체를 만드는 API를 사용해서 middleware로 넘겨줘 middleware가 실행할 수 있도록 해야한다.

- 즉, generator함수 내에선느 effects API를 사용하는 것이 좋다.

- The advantage of those declarative calls is that we can test all the logic inside a Saga by iterating over the Generator and doing a deepEqual test on the values yielded successively.

Q2. call API가 반환하는 값은?

Q3. yield\*?