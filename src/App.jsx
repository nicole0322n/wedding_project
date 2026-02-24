import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";
import Envelopes from "./components/Envelopes.jsx";
import Letters from "./components/Letters.jsx";
import TrafficInfo from "./components/TrafficInfo.jsx";
import Pictures from "./components/Pictures.jsx";
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
      <Envelopes />
      <Letters />
      <TrafficInfo />
      <Pictures />
      <Footer />
    </>
  );
}

export default App;
