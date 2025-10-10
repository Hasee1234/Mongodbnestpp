import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
    imports: [
           //to register the schema with mongoose module
        MongooseModule.forFeature([{name:Student. name,  schema:StudentSchema }])         //name of the schema
    ],
    providers: [StudentService],
    controllers: [StudentController],
})
export class StudentModule {}
