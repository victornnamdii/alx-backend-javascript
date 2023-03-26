import readDatabase from '../utils';
/**
 * Hold
 */

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dataPath)
    .then((fieldStudentDictionary) => {
      const message = ['This is the list of our students'];
      const keys = Object.keys(fieldStudentDictionary).sort();
      for (let i=0; i<keys.length; i++) {
        const key = keys[i];
        const value = fieldStudentDictionary[key];
        message.push(`Number of students in ${key}: ${value.length
        }. List: ${value.join(', ')}`);
      }
      response.status(200).send(message.join('\n'));
    }).catch((err) => {
      response
        .status(500)
        .send(err instanceof Error ? err.message : err.toString());
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const major = request.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
    .then((fieldStudentDictionary) => {
      response.status(200).send(`List: ${fieldStudentDictionary[major].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
export default StudentsController;
