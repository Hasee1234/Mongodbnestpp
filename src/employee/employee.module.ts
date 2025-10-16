import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:Employee.name,schema:EmployeeSchema},
    {name:Profile.name,schema:ProfileSchema}
  ])
],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
