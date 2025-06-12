const myFamily = {
  Chisom: {
    siblingName: "Chisom",
    debt: 30000,
    ShopItem: {
      itemName: "Glasse",
      Price: 15000,
      Date: "2nd May",
      Location: "Accra",
    },
  },
  Chigoziri: {
    siblingName: "Chigoziri",
    debt: 28000,
    ShopItem: {
      itemName: "Hat",
      Price: 6900,
      Date: "18th August",
      Location: "Lagos",
    },
  },
  Ifeoma: {
    siblingName: "Ifeoma",
    debt: 25000,
    ShopItem: {
      itemName: "Phone Case",
      Price: 11500,
      Date: "18th December",
      Location: "Abuja",
    },
  },
  // Chilet: {
  //     "siblingName": "chilet",
  //     "debt": N25
  // },
  Chigbomkpa: {
    siblingName: "Chigbomkpa",
    debt: 22000,
    ShopItem: {
      itemName: "Powerbank",
      Price: 20000,
      Date: "6th May",
      Location: "Enugu",
    },
  },
};

console.log("Total Debt: ", myFamily.Chigbomkpa.debt + myFamily.Chigoziri.debt + myFamily.Chisom.debt + myFamily.Ifeoma.debt, "Naira");
console.log("Total purchase price: ", myFamily.Chigbomkpa.ShopItem.Price + myFamily.Chigoziri.ShopItem.Price + myFamily.Chisom.ShopItem.Price + myFamily.Ifeoma.ShopItem.Price, "Naira");

