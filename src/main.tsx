import ReactDOM from "react-dom/client";
import App from "./App";
import Planet from "./components/component";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/mercury" element={<Planet planet="0" />} />
      <Route path="/venus" element={<Planet planet="1" />} />
      <Route path="/Earth" element={<Planet planet="2" />} />
      <Route path="/mars" element={<Planet planet="3" />} />
      <Route path="/jupiter" element={<Planet planet="4" />} />
      <Route path="/saturn" element={<Planet planet="5" />} />
      <Route path="/uranus" element={<Planet planet="6" />} />
      <Route path="/neptune" element={<Planet planet="7" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
