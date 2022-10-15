import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import "./styles/css/bootstrap.min.css";
import "./styles/css/main.min.css";
import App from "./App";
import './i18next';

ReactDOM.render(
  <Provider store={store}>
      <Suspense fallback="loading">
        <ToastContainer />
        <App />
      </Suspense>
  </Provider>,
  document.getElementById("root")
);
