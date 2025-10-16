import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<User>){}
    async createUser():Promise<User>{//to create a user
        const user=new this.userModel({
            name:'John Doe',
            address:{
                street:'123 Main St',   
            }
        });
        return user.save();
    }
    async findAll():Promise<User[]>{//to get all users
        return this.userModel.find();
    }
}
