import "./App.css";
import AboutMe from "./components/AboutMe";
import DrawerAppBar from "./components/DrawerAppBar";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <AboutMe />
      <SideNav />
    </div>
  );
}

export default App;
