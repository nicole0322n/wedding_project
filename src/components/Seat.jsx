import { Fragment } from "react";

function Seat() {
  const ownerSeat = ["新娘", "新郎"];
  const guestSeat = [
    "戴麗芬",
    "黃習博",
    "廖經鐘",
    "黃梅玉",
    "黃彩月",
    "戴炳煌",
    "廖經正",
    "廖陳李妹",
    "戴麗慧",
    "黃家成",
    "李棟賢",
    "廖和美",
    "詹平冬",
    "梁曼薇",
    "謝文檳",
    "廖信美",
    "詹瑜維",
    "蘇俐文",
    "廖經祥",
    "張金玉",
    "詹瑜庭",
    "王小力",
    "廖聖武",
    "x",
    "劉雨澄",
    "劉恆旭",
    "楊玫齡",
    "林明露",
    "黃婉慈",
    "劉冠甫",
    "林子喻",
    "林裕棠",
  ];
  return (
    <div className="container px-4 py-5 text-center">
      <h2 className="fw-bold mb-4" data-aos="fade-up">
        座位表
      </h2>
      <div className="container">
        <div className="row justify-content-md-center mb-4">
          {ownerSeat.map((owner, index) => (
            <div key={index} className="col col-lg-3 border py-2">
              {owner}
            </div>
          ))}
        </div>
        <div className="row row-cols-5 justify-content-md-center">
          {guestSeat.map((guest, index) => {
            const isSpacer = (index + 1) % 2 === 0 && (index + 1) % 4 !== 0;
            return !isSpacer ? (
              <div key={index} className="col border py-2">
                {guest}
              </div>
            ) : (
              <Fragment key={index}>
                <div className="col border py-2">{guest}</div>
                <div className="col col-lg-1 py-2"></div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <p className="mb-1">* 我們不收禮哦！希望大家開心來參與婚禮♡</p>
        <p>* 提供迎賓雞尾酒（無酒精）</p>
      </div>
    </div>
  );
}

export default Seat;
