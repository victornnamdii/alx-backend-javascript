/**
 * Hold
 */

const fs = require('fs');

function getData(data) {
  const logs = [];
  studentArray = data.trim().split('\n').slice(1);

  const info = `Number of students: ${studentArray.length}`;
  logs.push(info)
  console.log(info);

  const students = studentArray.map((student) => {
    const info = student.replace('\r', '').split(',');
    return info;
  })

  const fields = [...new Set(students.map((student) => student[student.length - 1]))];

  fields.forEach((field) => {
    const filteredStudents = students.filter(
      (student) => student[student.length - 1] === field
    ).map((student) => student[0]);

    const info = `Number of students in ${field
    }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`;
    logs.push(info);
    console.log(info);
  });
  return logs;
}

/**
 * Hold
 */
const countStudents = (database) => {
  const readFilePromise = new Promise((resolve, reject) => {
    if (!database) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        resolve(getData(data));
      }
    });
  });
  return readFilePromise;
};

module.exports = countStudents;
