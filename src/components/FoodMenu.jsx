function FoodMenu() {
  const foodData = [
    {
      id: 1,
      type: "西式冷盤",
      foods: [
        "燻鮭魚酸豆盤",
        "糖蜜無花果燻鴨胸",
        "雞尾酒白灼鮮蝦",
        "香烤鯛魚番茄莎莎",
        "碳烤時蔬佐香料油",
        "綜合起司盤",
        "鳳梨蝦仁洋芋沙拉",
        "德式冷肉盤",
      ],
    },
    { id: 2, type: "湯品", foods: ["銀杏冬瓜雞湯", "海鮮巧達濃湯"] },
    {
      id: 3,
      type: "位上主餐",
      foods: ["燒烤沙朗牛排佐松露野菇醬", "德式芥末豬腳佐蜂蜜芥末醬"],
    },
    {
      id: 4,
      type: "熱食主菜",
      foods: [
        "清蒸綠蔥鮮海鱸魚",
        "蠔油白菜嫩中卷",
        "起司焗烤香料扇貝",
        "蜂蜜香料烤肋排",
        "香炒培根時蔬",
        "番茄肉球義大利麵",
        "美式香料烤雞腿",
        "荷葉櫻花蝦油飯",
      ],
    },
    { id: 5, type: "甜點水果", foods: ["季節鮮水果4種", "甜點6種"] },
    { id: 6, type: "沁涼饮品", foods: ["果汁", "咖啡", "茶"] },
  ];
  return (
    <>
      <div className="container px-4 py-5 text-center">
        <h2 className="fw-bold mb-5">Menu</h2>
        {foodData.map((data) => (
          <div key={data.id} className="mb-4">
            <h5>{data.type}</h5>
            {data.foods.map((item, index) => (
              <p key={index} className="mb-1">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodMenu;
