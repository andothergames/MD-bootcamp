export function isAscending(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) { 
        return false;
      }
    }
    return true;
  }
  