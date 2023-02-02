export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Victor",
    lastName: "Ilodiuba",
    age: 21,
    location: "Port Harcourt, Nigeria"
};

const student2: Student = {
    firstName: "Praise",
    lastName: "Archibong",
    age: 23,
    location: "Abuja, Nigera"
};

const studentsList: Student[] = [
    student1,
    student2
];

const tableTemplate = (students: Student[]): void => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');

    headerRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headerRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHeader.insertAdjacentElement('beforeend', headerRow);

    for (const student of students) {
        const tableRow = document.createElement('tr');
        tableRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        tableRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', tableRow);
    }

    table.insertAdjacentElement('beforeend', tableHeader);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};

tableTemplate(studentsList);
