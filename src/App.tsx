import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Me from "./Me";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="me" element={<Me />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
