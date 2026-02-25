import { useEffect } from "react";

import AOS from "aos";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "aos/dist/aos.css";
import Envelopes from "./components/Envelopes.jsx";
import Letters from "./components/Letters.jsx";
import TrafficInfo from "./components/TrafficInfo.jsx";
import Pictures from "./components/Pictures.jsx";
import Seat from "./components/Seat.jsx";
import FoodMenu from "./components/FoodMenu.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 動畫時間
      once: true, // 是否只執行一次
    });
  }, []);
  return (
    <>
      <div className="outline-width">
        <Envelopes />
        <Letters />
        <TrafficInfo />
        <Pictures />
        <Seat />
        <FoodMenu />
        <Footer />
      </div>
    </>
  );
}

export default App;
