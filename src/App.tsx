import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
