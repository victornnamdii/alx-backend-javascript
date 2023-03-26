/**
 * Hold
 */

const fs = require('fs');

function readDatabase(path) {
  const dataPromise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
      }
      const studentArray = data.trim().split('\n').slice(1);

      const students = studentArray.map((student) => {
        const info = student.replace('\r', '').split(',');
        return info;
      });

      const fields = [...new Set(students.map((student) => student[student.length - 1]))];

      const fieldStudentDictionary = {};

      fields.forEach((field) => {
        const filteredStudents = students.filter((student) =>
          student[student.length - 1] === field
        ).map((student) => student[0]);
        fieldStudentDictionary[field] = filteredStudents;
      });
      resolve(fieldStudentDictionary);
    });
  });
  return dataPromise;
};

module.exports = readDatabase;
