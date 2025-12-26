// Examples from our conversation on async/await, promises, exports, imports, and more

// 1. Synchronous Code Example
console.log("Start (Sync)");
function syncTask() {
    console.log("Sync task running");
    for (let i = 0; i < 100000; i++) {} // Dummy loop
    console.log("Sync task done");
}
syncTask();
console.log("End (Sync)");
// Output: Start (Sync) -> Sync task running -> Sync task done -> End (Sync)

// 2. Asynchronous Code Example (Without async/await)
console.log("Start (Async)");
function asyncTask(callback) {
    setTimeout(() => {
        console.log("Async task done");
        callback();
    }, 1000);
}
asyncTask(() => {
    console.log("Callback executed");
});
console.log("End (Async)");
// Output: Start (Async) -> End (Async) -> Async task done -> Callback executed

// 3. Async/Await Example
console.log("Start (Async/Await)");
async function asyncAwaitTask() {
    console.log("Async/await task starting");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async/await task done");
}
asyncAwaitTask();
console.log("End (Async/Await)");
// Output: Start (Async/Await) -> Async/await task starting -> End (Async/Await) -> Async/await task done

// 4. Simple Promise Example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}
console.log("Start (Promise)");
fetchData().then(result => {
    console.log(result);
    console.log("End (Promise)");
});
// Output: Start (Promise) -> (1s delay) -> Data fetched -> End (Promise)

// 5. Arrow Functions
// Synchronous
const syncArrow = (param) => param * 2;
console.log(syncArrow(5)); // 10

// Asynchronous
const asyncArrow = async (param) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return param * 2;
};
asyncArrow(5).then(result => console.log(result)); // 10 after 1s

// 6. Exports (CommonJS)
const connectDB = () => console.log("DB connected");
const disconnectDB = () => console.log("DB disconnected");
module.exports = { connectDB, disconnectDB };

// 7. Exports (ES6)
export const connectDB_ES6 = () => console.log("DB connected ES6");
export const disconnectDB_ES6 = () => console.log("DB disconnected ES6");

// 8. Imports (CommonJS)
const { connectDB: importedConnect } = require('./utils/db'); // Example path

// 9. Imports (ES6)
import { connectDB_ES6 } from './utils/db.js'; // Example path

// 10. Import Paths Examples (from App.js perspective)
// Same dir: require('./test')
// Subdir: require('./utils/test')
// Parent: require('../test')
// Deeper: require('../../../../test')

// Run with: node examples.js