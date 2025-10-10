import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel:Model<StudentDocument>  //to register schema here
    ) {}
    //bottom code will tell that this function will return a promise of type student which has data of student that we will provide to controller for database
    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModel(data); //data is the data that we will get from controller tht we given
        return newStudent.save(); //save method will save the data to database
    }

    
    async getAllStudent():Promise<Student[]>{
        return this.studentModel.find().exec(); //exec will return a promise
    }

    async getStudentById(id:string):Promise<Student | null>{
        return this.studentModel.findById(id).exec(); //exec will return a promise
    }
}
