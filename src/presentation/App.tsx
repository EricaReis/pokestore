import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../data/store/store";
import { AppRoutes } from "../shared/routes/AppRoutes";
import GlobalStyles from "../shared/styles/GlobalStyles";
import { defaultTheme } from "../shared/styles/themes/default.theme";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
