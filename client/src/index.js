import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";
import App from "./components/App";
import { injectGlobal } from "styled-components";

injectGlobal`
html {
  box-sizing: border-box
}
* {
  margin:0;
  box-sizing: inherit;
}
svg {
  box-sizing: content-box;
}
`;

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
