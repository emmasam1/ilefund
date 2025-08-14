import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navigation from "./components/navigation/Navigatin";
import HomePage from "./pages/home/HomePage";
import Blog from "./pages/blog/Blog";
import Footer from "./components/footer/Footer";
import Faq from "./pages/faq/Faq";
import About from "./pages/about/About";
import Properties from "./pages/properties/Properties";
import Land from "./pages/land/Land";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/lands" element={<Land />} />
          {/* {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
