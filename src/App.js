import { Provider } from "react-redux";
import "./App.css";

import appStore from "./utils/redux/appStore";
import Routes from "./routes";

function App() {
  return (
    <Provider store={appStore}>
      <Routes />
      
    </Provider>
  );
}

export default App;
