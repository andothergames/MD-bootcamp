// Simulate asynchronous operations using setTimeout with nested callbacks.
function firstOperation(callback) {
    setTimeout(() => {
      console.log("First Operation Complete");
      callback();
    }, 1000);
  }
  
  function secondOperation() {
    setTimeout(() => {
      console.log("Second Operation Complete");
    }, 500);
  }
  
  // Execute the operations using nested callbacks.
  firstOperation(() => {
    secondOperation();
  });