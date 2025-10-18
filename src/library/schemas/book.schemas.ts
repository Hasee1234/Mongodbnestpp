//practicing one to many by referncing
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Book extends Document{
    @Prop()
    title:string

    @Prop()
    author:string
}
// using referncing so have to convert this document into schema 
export const BookSchema = SchemaFactory.createForClass(Book)//converts document into schema
