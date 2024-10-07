// Define two functions that return promises
function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("First Promise Resolved");
        resolve("Data from first promise");
      }, 1000);
    });
  }
  
  function secondPromise(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second Promise Resolved with:", data);
        resolve();
      }, 500);
    });
  }
  
  // Chain the promises
  firstPromise()
    .then((data) => secondPromise(data))
    .then(() => console.log("All Promises Completed"));