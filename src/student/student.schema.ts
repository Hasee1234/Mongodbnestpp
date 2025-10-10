
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({ timestamps: true }) // timestamps will create two fields createdAt and updatedAt automatically
export class Student {
    // prop is used to define the properties of the schema like required, unique etc
    @Prop({ required: true }) // like this is required
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop({ unique: true }) // this is optional, but now unique
    email?: string;
}

// now simple student class will be converted to schema class using schema factory
export const StudentSchema = SchemaFactory.createForClass(Student);