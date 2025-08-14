// ======================
// 📅 JavaScript Dates Demo
// ======================

// Current date and time
let myDate = new Date();

// Examples of different date formatting methods
console.log(myDate.toString());          // Full date & time (local time zone)
console.log(myDate.toDateString());      // Date only (weekday, month, day, year)
console.log(myDate.toISOString());       // ISO 8601 format (UTC)
console.log(myDate.toJSON());             // Same as toISOString(), useful for JSON.stringify()
console.log(myDate.toLocaleDateString()); // Localized date only
console.log(myDate.toLocaleString());     // Localized date & time
console.log(myDate.toLocaleTimeString()); // Localized time only

// ======================
// Creating custom dates
// ======================

// Example: Specific date and time
// Year: 2023, Month: 0 (January), Day: 23, Hour: 5, Minute: 34
// ⚠️ Months are ZERO-indexed (0 = January, 11 = December)
let myCreatedDate = new Date(2023, 0, 23, 5, 34);

// Example: Date from string (YYYY-MM-DD is parsed as UTC midnight)
let Date1 = new Date("2033-03-08");

// Example: Date from string (MM-DD-YYYY is parsed as LOCAL midnight)
let Date2 = new Date("01-23-2024");

console.log(myCreatedDate.toLocaleString());
console.log(Date1.toLocaleString());
console.log(Date2.toLocaleString());

// ======================
// Working with timestamps
// ======================

let myTimeStamp = Date.now(); // Current time in milliseconds since Jan 1, 1970 (Unix Epoch)

console.log(myTimeStamp);              // Current timestamp (ms)
console.log(Date1.getTime());          // Timestamp for specific date (ms)
console.log(Date.now());               // Same as myTimeStamp
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

// ======================
// Getting parts of a date
// ======================

let newDate = new Date();

console.log(newDate.getMonth());  // Month index (0 = Jan, 11 = Dec)
console.log(newDate.getFullYear()); // Year (e.g., 2025)
console.log(newDate.getDay());      // Day of week index (0 = Sun, 6 = Sat)

// ======================
// Custom formatted date string
// ======================

console.log(
  newDate.toLocaleString('default', {
    weekday: "long", // Full weekday name (e.g., "Thursday")
    era: "long",     // Era (e.g., "Anno Domini")
    hour: "2-digit", // 2-digit hour format
    minute: "2-digit", // 2-digit minutes
    hour12: true     // Use 12-hour clock (AM/PM)
  })
);
// Example output: "Thursday Anno Domini, 09:45 AM"