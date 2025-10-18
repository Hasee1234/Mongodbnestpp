import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document ,Types} from "mongoose";
import { ref } from "process";

@Schema()
export class Library extends Document{
    @Prop()
    name:string

    //2nd prop will be book that is itself is a document so we will not embed it here we will use it with ID here throgh referncing
    @Prop({type:[{type:Types.ObjectId, ref : 'Book'}]})
    books:Types.ObjectId
}
export const LibrarySchema=SchemaFactory.createForClass(Library)
// now will work in module to import these schemas there 