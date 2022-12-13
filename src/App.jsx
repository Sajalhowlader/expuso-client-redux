import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";

function App() {
 

  return (
    <section className="App">
      <RouterProvider router={routes} />
    </section>
  );
}

export default App;
