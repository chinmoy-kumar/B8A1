const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
};

const processInput = (value: number | boolean | string) => {
    if (typeof value === "string") {
        value = value.trim();
        value = value.toLowerCase();
        return value;
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        if (typeof value === "boolean") {
            if (value) return "Active";
            else return "Inactive";
        }
    }
};

const formatCoordinate = (
    coordinate: readonly [number, number, string],
): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat();
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (Course: Course[], minStudents: number): Course[] => {
    return Course.filter((c) => {
        return c.isPublished === true && c.students >= minStudents;
    });
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((i) => i[key]);
};

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("access granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
