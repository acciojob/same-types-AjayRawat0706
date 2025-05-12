function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if only one is NaN
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Compare types
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// Convert numeric strings to numbers
if (!isNaN(value1) && value1.trim() !== "") value1 = +value1;
if (!isNaN(value2) && value2.trim() !== "") value2 = +value2;

alert(isSameType(value1, value2));