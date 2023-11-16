import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyles } from "./index.styled";

const root = ReactDOMClient.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  </React.StrictMode>
);
