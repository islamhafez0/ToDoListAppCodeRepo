import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/style.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/allReducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
