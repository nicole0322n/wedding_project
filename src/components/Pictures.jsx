import { useEffect } from "react";
import * as bootstrap from "bootstrap";

function Pictures() {
  const picData = [
    { id: 1, fileName: "DSC_3738.jpg" },
    { id: 2, fileName: "DSC_3657.jpg" },
    { id: 3, fileName: "DSC_3757.jpg" },
    { id: 4, fileName: "DSC_3827.jpg" },
    { id: 5, fileName: "DSC_3780.jpg" },
  ];
  useEffect(() => {
    // 透過 ID 抓取元素並初始化
    const myCarousel = document.querySelector("#carouselExampleControls");
    new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: "carousel",
    });
  }, []);
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {picData.map((pic, index) => (
            <div
              key={pic.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`./image/${pic.fileName}`}
                className="d-block w-100"
                alt={`wedding-picture-${pic.id}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Pictures;
