console.log("Testing");

let name = "chilet";

// Test objects

const array = {
    Test_array1: {
        "Array 1": "Count 1",
    },
     Test_array2: {
        "Array 2": "Count 2",
    },
      Test_array3: {
        "Array 3": "Count 3",
    }
}

const presidents = () => ({
  BAT: {
    Name: "Bola Ahmed Tinubu",
    Culture: "Yoruba",
    Food: "Agbado",
    Drink: "Champagne",
    Amount: "$20+ billion",
    Religion: "Islam",
  },

  PMB: {
    Name: "Muhammadu Buhari",
    Culture: "Fulani",
    Food: "Eggs",
    Drink: "Kunu",
    Amount: "$50 billion",
    Religion: "Islam",
  },

  GEJ: {
    Name: "Goodluck Ebele Jonathan",
    Culture: "Ijaw",
    Food: "Banga Soup",
    Drink: "Whiskey",
    Amount: "$12+ billion",
    Religion: "Christianity",
  },

  UMY: {
    Name: "Umaru Musa Yar'Adua",
    Culture: "Fulani",
    Food: "Tuwo",
    Drink: "Milk",
    Amount: "$2b+ billion",
    Religion: "Islam",
  },

  OBJ: {
    Name: "Olusegun Obasanjo",
    Culture: "Yoruba",
    Food: "Amala",
    Drink: "Red wine",
    Amount: "$15+ billion",
    Religion: "Christianity",
  },
}
);

console.log(array.Test_array1)

// this object inside the function presidents can't be caalled
// console.log(presidents.BAT);

// since we can't call the object inside the function, it has to be returned as an object
const PresidentData = presidents();

// console.log(PresidentData.BAT)

// convert presidentData     object into an array
const values = Object.values(PresidentData)

console.log(values)

const ThirdPresident = values[2];
const slice = values.slice(1, 4);
console.log(slice)


// Edidiong replication