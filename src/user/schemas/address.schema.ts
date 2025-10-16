//one to one relationship

import { Prop, Schema} from "@nestjs/mongoose";

@Schema()//to define property of schema for mongodb

export class Address{
    @Prop()
    street:string;

    @Prop()
    city:string
}

