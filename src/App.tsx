import GlobalStyles from "./styles/global.styles";
import Router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./data/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
