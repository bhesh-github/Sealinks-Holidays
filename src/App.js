import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footers from "./components/main/footers/Footers";
import Home from "./components/pages/home/Home";
import InboundPackages from "./components/pages/InboundPackages";
import OutboundPackages from "./components/pages/OutboundPackages";
import AboutUs from "./components/pages/AboutUs";
import TravelInfo from "./components/pages/TravelInfo";
import OurGallery from "./components/pages/OurGallery";
import FAQ from "./components/pages/FAQ";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import SingleProductPage from "./components/pages/SingleProductPage/SingleProductPage";
import PageNotFound from "./components/pages/PageNotFound";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/inboundPackages" element={<InboundPackages />} />
            <Route path="/outboundPackages" element={<OutboundPackages />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/ourGallery" element={<OurGallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="travelInfo" element={<TravelInfo />} />
            <Route path="singleProductPage" element={<SingleProductPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
