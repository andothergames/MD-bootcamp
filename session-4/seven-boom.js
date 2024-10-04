const detectSeven = (numbers) => {
    const numbersAsString = numbers.join("");
    if (numbersAsString.split("").includes("7")) return "Boom!";
    return "No booming here"
  };
  
  console.log(calculateParkingCharge([1, 2, 3, 5, 7, 97]));
  console.log(calculateParkingCharge([1, 2, 3, 5, "cabbage"]));
  