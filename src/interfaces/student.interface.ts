export interface IStudent {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    grade: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IStudentResponse {
    success: boolean;
    data?: IStudent;
    error?: string;
}

export interface IStudentListResponse {
    success: boolean;
    data?: IStudent[];
    error?: string;
} 