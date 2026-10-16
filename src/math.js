// Tiny pure utility functions used by the CI lab.

function add(a, b) {
  return a + b; //code initially had a bug where it was returning a - b instead of a + b, which was fixed in the latest edit
}

function isEven(n) {
  return n % 2 === 0;
}

function formatName(first, last) {
  return `${first} ${last}`.trim();
}

module.exports = { add, isEven, formatName };
