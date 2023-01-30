export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, currentValue) => accumulator + currentValue.id,
      0,
    );
  }
  return 0;
}
