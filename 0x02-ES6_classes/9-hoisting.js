/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number') {
      throw new Error('Year must be a number');
    }
    this._year = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = value;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('First name must be a string');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('Last name must be a string');
    }
    this._lastName = value;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(value) {
    if (!(value instanceof HolbertonClass)) {
      throw new Error('Holberton Class must be a HolbertonClass object');
    }
    this._holbertonClass = value;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
