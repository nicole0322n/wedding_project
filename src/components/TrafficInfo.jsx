import { VectorIcon, DotIcon } from "../icon/index.jsx";

function TrafficInfo() {
  const trafficData = [
    {
      id: 1,
      type: "public",
      traffic: "火車・捷運",
      stations: [
        {
          station: "台北火車站",
          info: "轉乘捷運淡水信義線(紅線/北投方向)，至中山捷運站，2號出口，約步行5分鐘。",
        },
        {
          station: "中山捷運站",
          info: "2號出口，約步行5分鐘。",
        },
      ],
    },
    {
      id: 2,
      type: "taxi",
      traffic: "計程車",
      stations: [
        {
          station: "台北火車站/中山捷運站",
          info: "兩個車站至飯店皆約10分鐘。",
        },
      ],
    },
    {
      id: 3,
      type: "car",
      traffic: "自行開車",
      stations: [
        {
          station: "",
          info: "點擊下方地圖導航至飯店。",
        },
      ],
    },
    {
      id: 4,
      type: "parking",
      traffic: "附近停車場",
      stations: [
        {
          station: "",
          info: "CITY PARKING停車場(希爾頓站) 100$/1hr",
          link: "https://www.google.com/maps/place/CITY+PARKING+%E5%9F%8E%E5%B8%82%E8%BB%8A%E6%97%85%E5%81%9C%E8%BB%8A%E5%A0%B4+%E5%B8%8C%E7%88%BE%E9%A0%93%E7%AB%99/@25.0512901,121.5228587,21z/data=!4m6!3m5!1s0x3442a9989a0e1eed:0xf79ba2d0f96e12a1!8m2!3d25.0512897!4d121.5228629!16s%2Fg%2F11pts6w98s?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
          station: "",
          info: "林森公園地下停車場 40$/1hr",
          link: "https://www.google.com/maps/place/%E6%9E%97%E6%A3%AE%E5%85%AC%E5%9C%92%E5%9C%B0%E4%B8%8B%E5%81%9C%E8%BB%8A%E5%A0%B4(%E5%98%9F%E5%98%9F%E6%88%BF)/@25.0522656,121.5264421,18z/data=!4m6!3m5!1s0x3442a9dbb20bfcb1:0xb1de238fa6e9d7a4!8m2!3d25.0523995!4d121.5264481!16s%2Fg%2F11f6116wbk?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
        },
        {
          station: "",
          info: "禾典停車場(中南站)六條通停車場 100$/1hr",
          link: "https://www.google.com/maps/place/%E7%A6%BE%E5%85%B8%E5%81%9C%E8%BB%8A%E5%A0%B4(%E4%B8%AD%E5%8D%97%E7%AB%99)%E5%85%AD%E6%A2%9D%E9%80%9A%E5%81%9C%E8%BB%8A%E5%A0%B4/@25.050684,121.5225142,18z/data=!3m1!4b1!4m6!3m5!1s0x3442a96f3e81edeb:0x7f3748c20e37001e!8m2!3d25.050684!4d121.5238017!16s%2Fg%2F11c6t8rqgz?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
        },
      ],
    },
  ];
  return (
    <div className="bg-light my-5">
      <div className="container px-4 py-5">
        <h2 className="text-center fw-bold mb-5">
          {/* data-aos="fade-up" */}
          交通資訊
        </h2>
        {trafficData.map((item) => (
          <div key={item.id} className="d-flex mb-4">
            <div className="d-flex me-1" style={{ marginTop: "6px" }}>
              <VectorIcon />
            </div>
            <div className="w-100">
              <h5 className="fw-bold mb-3">{item.traffic}</h5>
              {item.type !== "parking" ? (
                item.stations.map((station, index) => (
                  <div key={index}>
                    <h6 className="fw-bold">{station.station}</h6>
                    <p>{station.info}</p>

                    {/* Google Map */}
                    {item.type === "car" && (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.489646723767!2d121.5228118!3d25.0513881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9835aafbcff%3A0xa0760440d9d36387!2z5Y-w5YyX5Lit5bGx5Lmd5pix5biM54i-6aCT6YC45p6X6YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1771902913109!5m2!1szh-TW!2stw"
                        height="300"
                        className="w-100 rounded-2"
                        style={{ border: 0, marginTop: -10 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )}
                  </div>
                ))
              ) : (
                <div>
                  {/* Parking Data */}
                  {item.stations.map((station, index) => (
                    <div className="d-flex" key={index}>
                      <div>
                        <DotIcon />
                      </div>
                      <a
                        href={station.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex text-decoration-underline"
                      >
                        {station.info}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficInfo;
