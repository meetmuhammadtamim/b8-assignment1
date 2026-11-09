const multiplyValue = (value: number, multiplier?: number): number => {
    if(typeof multiplier === 'undefined'){
        return value*2;
    }else{
        return value*multiplier;
    }
}

const processInput = (value: number|string|boolean): number|string => {
    if (typeof value === 'number'){
        return value*10;
    }
    else if(typeof value === 'string'){
        return value.trim().toLowerCase();
    }
    else if(typeof value==='boolean' && value===true){
        return "Active"
    }
    return "Inactive";
}

const formatCoordinate = (coordinate: readonly [number, number, string]) : string =>{
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}





const concatenateArrays = <T> (...arrays: T[][]): T[] => {
    return arrays.flat();
}



interface Course{
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const filteredCourses: Course[]=[];
    for(const course of courses){
        if(course.isPublished===true && course.students>=minStudents){
            filteredCourses.push(course);
        }
    }
    return filteredCourses;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item)=>
        item[key]
    )
}


class Employee{
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary=baseSalary;
    }
    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department: string;
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string{
        return `Manager of ${this.department}: ${this.name}`
    }
}


const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject)=>{
        if(age<18){
            reject( new Error("Access Denied: Must be 18 or older"));
        }
        else{
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        }
    })
}