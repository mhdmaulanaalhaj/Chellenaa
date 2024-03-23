import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Banner />
    </div>
  );
}

export default App;
