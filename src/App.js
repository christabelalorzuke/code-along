import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TaskManager from "./pages/TaskManager";
import NotFound from "./pages/NotFound";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-list/:productId" element={<ProductDetail />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
