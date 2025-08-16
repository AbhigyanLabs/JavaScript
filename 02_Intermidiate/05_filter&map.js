// ------------------------------
// forEach vs filter demonstration
// ------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach -> executes a function for each element 
//            but does NOT return a new array
const values = coding.forEach((item) => {
    console.log(item);   // logs each programming language
    return item;         // return inside forEach is ignored
});

console.log(values); // undefined (because forEach returns nothing)


// ------------------------------
// filter method
// ------------------------------

// Original array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter -> returns a new array with elements that satisfy the condition
const newNums = myNums.filter((num) => {
    return num > 4;   // keep numbers greater than 4
});

console.log(newNums);  // [5, 6, 7, 8, 9]


// ------------------------------
// Doing same using forEach (manual way)
// ------------------------------

// Pushing elements > 4 into newNums again (duplicates will appear)
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);  // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]


// ------------------------------
// Books dataset
// ------------------------------

const books = [
  { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: "1st" },
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: "2nd" },
  { title: "Sapiens: A Brief History of Humankind", genre: "History", publish: 2011, edition: "3rd" },
  { title: "Educated", genre: "Memoir", publish: 2018, edition: "1st" },
  { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: "5th" },
  { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960, edition: "8th" },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: "7th" },
  { title: "The Catcher in the Rye", genre: "Classic", publish: 1951, edition: "4th" },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997, edition: "10th" },
  { title: "The Fellowship of the Ring", genre: "Fantasy", publish: 1954, edition: "6th" },
  { title: "The Lean Startup", genre: "Business", publish: 2011, edition: "2nd" },
  { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: "3rd" },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: "9th" },
  { title: "Becoming", genre: "Biography", publish: 2018, edition: "1st" },
  { title: "The Subtle Art of Not Giving a F*ck", genre: "Self-Help", publish: 2016, edition: "2nd" },
  { title: "Deep Work", genre: "Productivity", publish: 2016, edition: "1st" },
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: "1st" },
  { title: "You Don’t Know JS", genre: "Programming", publish: 2015, edition: "3rd" },
  { title: "Cracking the Coding Interview", genre: "Programming", publish: 2008, edition: "6th" },
  { title: "Design Patterns", genre: "Programming", publish: 1994, edition: "4th" }
];


// ------------------------------
// Filtering books
// ------------------------------

// Example 1: Get only Fantasy books
let userBooks = books.filter((bk) => bk.genre === 'Fantasy');

console.log("Fantasy Books:", userBooks);

// Example 2: Get books published after year 2000
userBooks = books.filter((bk) => bk.publish >= 2000);

console.log("Books published after 2000:", userBooks);

const myNum = [1, 2, 3, 4, 5, 6, 7, 89, 10]

// const newNums = myNum.map( (num) => {return num + 10})
const newNum = myNum
                .map((num) => num * 10)
                .map((num) => num +1)
                .filter((num) => num >= 49)

console.log(newNums);