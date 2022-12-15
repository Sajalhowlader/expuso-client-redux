import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./Redux/store";

import routes from "./Routes/Routes";

function App() {
 

  return (
    <section className="App">
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </section>
  );
}

export default App;
