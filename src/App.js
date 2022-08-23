
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaskManager from "./components/TaskManager";


function App() {
  return (
    
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/task-manager" element={<TaskManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
