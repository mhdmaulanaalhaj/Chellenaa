import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Slideyy from "./components/Slideyy";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Banner />
      <Slideyy />
    </div>
  );
}

export default App;
