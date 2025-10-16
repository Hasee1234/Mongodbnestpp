import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schema";

@Schema()
export class User extends Document{
    @Prop()
    name:string;

    @Prop({type:Address})
    address:Address
}//this si structure of schema and we convertd itsname to userschema down

export const UserSchema=SchemaFactory.createForClass(User);//to create schema for user class