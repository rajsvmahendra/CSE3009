// let name = "Rajsv";
// let year = 2026;
// let born = 2005;

// let age = year - born;

// console.log("Name:", name);
// console.log("Age:", age);

// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible");
// }

// for (let i = 1; i <= 3; i++) {
//     console.log("Learning Node.js");
// }

//program to read file
// import fs from "fs";
// import { Performance } from "perf_hooks";

// const start = performance.now();
// fs.readFile("notes.txt", "utf-8", (err, data) => {
//     if (err) { console.log(err); }
//     const end = performance.now();
//     console.log(`Time taken: ${(end - start).toFixed(2)}ms`);
// })

// console.log("Reading file...");

// import fs from "fs";
// //hello node.js student

// const data = fs.readFileSync("notes.txt", "utf-8");
// console.log(data);

// import os from "os";
// console.log(os.cpus());
// console.log("OS TYPE:", os.type());
// console.log("OS ARCH:", os.arch());
// console.log("OS FREE MEMORY:", os.freemem());
// console.log("OS TOTAL MEMORY:", os.totalmem());
// console.log("OS UPTIME:", os.uptime());
// console.log("OS RELEASE:", os.release());
// console.log("OS PLATFORM:", os.platform());
// console.log("OS HOMEDIR:", os.homedir());
// console.log("OS USERNAME:", os.userInfo().username);