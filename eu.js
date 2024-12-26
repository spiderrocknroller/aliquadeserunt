function checkOverlap(input, bounds) {
  if (input[0] < bounds[1] && input[1] > bounds[0]) {
    return true;
  } else {
    return false;
  }
}

// Example usage
console.log(checkOverlap([1, 5], [3, 7])); // true
console.log(checkOverlap([8, 10], [3, 7])); // false
