import EnvelopesImage from "../../public/image/EnvelopesImage.jsx";

function Envelopes() {
  return (
    <div className="">
      <div className="d-flex justify-content-center overflow-hidden position-relative">
        <div style={{ width: "1488px" }}>
          <EnvelopesImage />
        </div>

        <h1
          className="position-absolute  start-50 translate-middle text-white text-center italianno-regular"
          style={{ fontSize: 54, top: "40%" }}
          data-aos="fade-up"
        >
          Welcome
          <br />
          To
          <br />
          Our Wedding
        </h1>

        <span
          className="position-absolute start-50 translate-middle text-white text-center"
          style={{ bottom: "3%" }}
          data-aos="fade-up"
        >
          廖慶武＆黃婉暄
          <br />
          2026.03.21
        </span>
      </div>
    </div>
  );
}

export default Envelopes;
