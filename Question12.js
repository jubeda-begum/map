const students = [
  { name: "Alice", marks: 58 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 65 },
  { name: "David", marks: 45 },
  { name: "Tom", marks: 88 },
  { name: "Eve", marks: 72 },
  { name: "Jack", marks: 91 },
];

const passed = students.filter(s => s.marks > 60);
const sorted = passed.sort((a, b) => b.marks - a.marks);
const names = sorted.map(s => s.name);

console.log(names);