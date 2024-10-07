// Create a function that uses async/await with error handling
async function asyncOperations() {
    try {
      const firstResult = await new Promise((resolve) => {
        setTimeout(() => {
          console.log("First Async Operation Complete");
          resolve("First result");
        }, 3000);
      });
  
      const secondResult = await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Second Async Operation Complete");
          resolve("Second result");
        }, 1000);
      });
  
      console.log("Results:", firstResult, secondResult);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Call the async function
  asyncOperations();