const sumAll = function (start, end) {
  let sum = 0;
  if (start < 0 || end < 0) return `ERROR`;
  else if (!Number.isInteger(start) || !Number.isInteger(end)) return `ERROR`;
  else if (start === end) return start;
  else if (start < end) {
    while (start <= end) {
      sum += start;
      start++;
    }
  } else {
    while (start >= end) {
      sum += start;
      start--;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
