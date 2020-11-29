import CreatePage from "./components/CreatePage";
import "./App.css";
import PageDisplay from "./components/PageDisplay";
import Temp from "./components/Temp";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      {/* <h2>Hey There</h2>
      <CreatePage />
      <PageDisplay /> */}
      <Header />
      <Temp />
    </div>
  );
}

export default App;
