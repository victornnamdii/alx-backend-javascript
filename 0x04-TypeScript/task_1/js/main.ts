interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key:string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction {
    (firstName: string, lastName:string): string
}

class StudentClass implements StudentInterface{
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

interface StudentConstructor {
    new (firstName:string, lastName: string): StudentClass
}

interface StudentInterface {
    workOnHomework(): string,
    displayName(): string
}