function findCheapestPrice(n, flights, src, dst, k) {
  // add your solution here
  let previous = new Array(n).fill(Number.POSITIVE_INFINITY);
  let current = new Array(n).fill(Number.POSITIVE_INFINITY);

  previous[src] = 0;
  current[src] = 0;

  let i = 0;
  while (i < k + 1) {
    for (let j = 0; j < flights.length; j++) {
      let [source, dest, weight] = flights[j];
      let newDist = previous[source] + weight;
      current[dest] = Math.min(newDist, current[dest]);
    }

    previous = current.map((val) => val);
    i++;
  }

  return current[dst] == Number.POSITIVE_INFINITY ? -1 : current[dst];
}

// Test case 1
const flights1 = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
];
console.log(
  "Actual: " + findCheapestPrice(4, flights1, 0, 3, 1) + ", Expected: 700"
);

// Test case 2
const flights2 = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
];
console.log(
  "Actual: " + findCheapestPrice(4, flights2, 0, 3, 0) + ", Expected: -1"
);

// Test case 3
const flights3 = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500],
];
console.log(
  "Actual: " + findCheapestPrice(3, flights3, 0, 2, 0) + ", Expected: 500"
);
