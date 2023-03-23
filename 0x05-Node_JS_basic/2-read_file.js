/**
 * Hold
 */

const fs = require('fs');

function countStudents(path) {
  const data = fs.readFileSync(path, 'utf-8');
  studentArray = data.trim().split('\n').slice(1);
  console.log(`Number of students: ${studentArray.length}`);

  const students = studentArray.map((student) => {
    const info = student.replace('\r', '').split(',');
    return info
  })

  const fields = [...new Set(students.map((student) => student[student.length - 1]))];

  fields.forEach((field) => {
    const filteredStudents = students.filter(
      (student) => student[student.length - 1] === field
    ).map((student) => student[0]);
    console.log(`Number of students in ${field
    }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`);
  });
}

process.on('uncaughtException', () => {
  throw new Error('Cannot load the database');
})

module.exports = countStudents;
