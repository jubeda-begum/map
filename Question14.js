function evaluateEmployees(employees) {
  const filtered = employees.filter(e => e.tasksCompleted > 5);

  const mapped = filtered.map(e => {
    let performance;
    if (e.rating > 4.5) performance = "Excellent";
    else if (e.rating >= 3) performance = "Good";
    else performance = "Needs Improvement";

    return { name: e.name, performance };
  });

  const order = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };

  return mapped.sort((a, b) => order[a.performance] - order[b.performance]);
}

const input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(input));
