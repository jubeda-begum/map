function processCategories(categories) {
  const counts = categories.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  console.log(counts);
  console.log(sorted);
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

processCategories(input);
