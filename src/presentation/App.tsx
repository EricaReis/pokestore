import Router from "../shared/routes/routes";
import { Provider } from "react-redux";
import store from "../data/store/store";
import GlobalStyles from "../shared/styles/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  );
}

export default App;
