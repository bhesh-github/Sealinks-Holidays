import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/main/headers/Header";
import Home from "./components/pages/home/Home";
import AboutUs from "./components/pages/AboutUs";
import InboundPackages from "./components/pages/InboundPackages";
// import OurboundPackages from "./components/pages/OutboundPackages";
import TravelInfo from "./components/pages/TravelInfo";
import OurGallery from "./components/pages/OurGallery";
import FAQ from "./components/pages/FAQ";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import OutboundPackages from "./components/pages/OutboundPackages";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/inboundPackages" element={<InboundPackages />} />
            <Route path="/outboundPackages" element={<OutboundPackages />} />
            <Route path="travelInfo" element={<TravelInfo />}></Route>
            <Route path="/ourGallery" element={<OurGallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
