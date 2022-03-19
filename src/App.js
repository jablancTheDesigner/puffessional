import React, { useEffect } from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles/globals.css";

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
