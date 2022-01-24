import React from "react";
import ReactDOM from "react-dom";
import '../src/styles/index.css';
import App from "./App";



ReactDOM.render(
  <React.StrictMode>

        {/* 
    There are two Navigators:
      1. If user is loggedIn
      2. If user is loggedOut
    */}
        <App />
      {/* </QueryClientProvider>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
