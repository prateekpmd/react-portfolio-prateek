import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Technologies from "./components/Technologies";
import Exprience from "./components/Exprience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";


function App() {
  return (

      <div className="overflow-x-hidden text-neutral-300 antialiasedantialiased selection:bg-white selection:text-black">
        <div className="fixed top-0 -z-10 h-full w-full text-white">
          <div class="relative h-full w-full bg-black">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Aboutme />
          <Technologies />
          <Exprience />
          <Projects/>
          <Contact />
        </div>
      </div>
  
  );
}

export default App;
