function Seat() {
  return (
    <div className="container px-4 py-5 text-center">
      <h2 className="fw-bold mb-4">座位表</h2>
      <div
        className="m-auto bg-light d-flex align-items-center justify-content-center"
        style={{ width: "240px", height: "240px", borderRadius: "50%" }}
      >
        <div className="d-flex flex-column align-items-center ">
          <h3 className="fw-bold">～施工中～</h3>
          <h6>當日揭曉座位</h6>
          <h6>敬請期待</h6>
        </div>
      </div>
    </div>
  );
}

export default Seat;
