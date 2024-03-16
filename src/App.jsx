import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="relative w-full flex">
      <Navbar />
      <div className="w-full">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
