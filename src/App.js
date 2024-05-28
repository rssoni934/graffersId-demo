import "./App.css";
import NavBar from "./components/navBar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "./components/mainheader/mainheader";
import Dashboard from "./components/dashboard/dashboard";
import GlobalContextProvider from "./common/context/GlobalContextProvider";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <NavBar />
        <MainHeader />
        <Dashboard />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
