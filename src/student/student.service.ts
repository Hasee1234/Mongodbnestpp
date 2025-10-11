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

    // async updateStudent(id:string,data:Partial<Student>):
    // Promise<Student | null>{
    //     // return this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec(); //new:true will return the updated document
    //     const updated=await this.studentModel.findByIdAndUpdate
    //     (id,{
    //         name:data.name ?? null,
    //         age:data.name ?? null,
    //         email:data.name ?? null,
    //     },{overwrite:true,new:true})
    //     return updated;//recomended approach for put to update all terms
    // }


    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
    // Only update provided fields, and use correct field values
    const updated = await this.studentModel.findByIdAndUpdate(
        id,
        {
            name: data.name,
            age: data.age,
            email: data.email,
        },
        { overwrite: true, new: true }
    ).exec();
    return updated;
}

    async patchStudent(id:string,data:Partial<Student>):
    Promise<Student | null>{
        return this.studentModel.findByIdAndUpdate(id,{$set:data},{new:true}).exec(); //new:true will return the updated document
    }
}
