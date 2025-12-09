import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./components/navigation/Navigatin";
import HomePage from "./pages/home/HomePage";
import Blog from "./pages/blog/Blog";
import Footer from "./components/footer/Footer";
import Faq from "./pages/faq/Faq";
import About from "./pages/about/About";
import Properties from "./pages/properties/Properties";
import RealEstate from "./pages/land/RealEstate";
import PropertyDetails from "./pages/details/PropertyDetails";
import HowToSave from "./pages/how to save/HowToSave";
import Contact from "./pages/contact/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-to-save" element={<HowToSave />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/resource" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
           <Route path="/contact" element={<Contact />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
