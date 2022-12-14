import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/Routes";

function App() {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);

  return (
    <section className="App">
      <RouterProvider router={routes} />
    </section>
  );
}

export default App;
