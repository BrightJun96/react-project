import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { checkThunk, tempSetUser } from "./modules/user";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function loadUser() {
  const user = localStorage.getItem("user");
  if (!user) return;

  store.dispatch(tempSetUser(JSON.parse(user))); // localStroage로 부터 얻어온 값을 user값으로 사용하여 새로고침시에도 상태값을 유지한다.
  store.dispatch(checkThunk());
}

loadUser();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
