import "./App.css";

import HomePage from "./components/HomePage";
import PageDisplay from "./components/PageDisplay";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:username" component={PageDisplay} />
      </div>
    </BrowserRouter>
  );
}

export default App;
