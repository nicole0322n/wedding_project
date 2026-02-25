function Letters() {
  return (
    <div className="card mx-3 my-5 bg-secondary" style={{ borderRadius: 0 }}>
      <img
        src="./image/LetterImage.svg"
        className="card-img"
        alt="LettersImage"
      />
      <div className="card-img-overlay text-center">
        <img
          src="./image/Letter-title.svg"
          className="my-2"
          style={{ maxWidth: "56%" }}
          alt="LettersTitle"
        />
        <img
          src="./image/Letter-people.svg"
          className="card-words my-2"
          alt="LettersPeople"
        />
        <img
          src="./image/Letter-date.svg"
          className="card-words my-4"
          alt="LettersDate"
        />
        <img
          src="./image/Letter-map.svg"
          className="card-words mt-2"
          alt="LettersMap"
        />
      </div>
    </div>
  );
}

export default Letters;
