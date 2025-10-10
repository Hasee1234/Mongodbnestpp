import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}
    @Post()
    async addStudent(@Body() data:Partial<Student>){
        return this.studentService.createStudent(data); //data is the data that we will get from body of postman
    }

    @Get()
    async getStudents(){
        return this.studentService.getAllStudent();
    }

    @Get(':id')
       async getStudent(@Param('id') id:string){
        return this.studentService.getStudentById(id)
       }
     

}
