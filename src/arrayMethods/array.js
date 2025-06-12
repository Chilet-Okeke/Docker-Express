


const arrayList = [
    
        {
    Name: "Bola Ahmed Tinubu",
    Culture: "Yoruba",
    Food: "Agbado",
    Drink: "Champagne",
    Amount: "$20+ billion",
    Religion: "Islam",
  },
        {
    Name: "Muhammadu Buhari",
    Culture: "Fulani",
    Food: "Eggs",
    Drink: "Kunu",
    Amount: "$50 billion",
    Religion: "Islam",
    },
        {
    Name: "Goodluck Ebele Jonathan",
    Culture: "Ijaw",
    Food: "Banga Soup",
    Drink: "Whiskey",
    Amount: "$12+ billion",
    Religion: "Christianity",
    },
        {
    Name: "Umaru Musa Yar'Adua",
    Culture: "Fulani",
    Food: "Tuwo",
    Drink: "Milk",
    Amount: "$2b+ billion",
    Religion: "Islam",
    },
        {
    Name: "Olusegun Obasanjo",
    Culture: "Yoruba",
    Food: "Amala",
    Drink: "Red wine",
    Amount: "$15+ billion",
    Religion: "Christianity",
  },
    
]

console.log(arrayList)
const slicedList = arrayList.slice(0, 2)
console.log(slicedList)

/**
 * 1. Slice - 
 *  - It returns a new array without modifying the new array
 *  - How is it done? It is carried out using array.slice
 * - The first value represents the position the array should be sliced
 *  while the last value represents the index at which slicng stops.
 * - examples
 * 
 * 2. Splice -
 * - Splice mutates the original array and returns a new array
 * - the first argument represents the position of starting index while last 
 * argument represents the position whre the slicing method will stop.
 * - examples
 */