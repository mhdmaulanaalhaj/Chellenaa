import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
