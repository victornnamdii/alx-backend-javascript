export default function getListStudentIds(students) {
  const idArray = [];
  if (students instanceof Array) {
    students.forEach((element) => {
      idArray.push(element.id);
    });
  }
  return idArray;
}
