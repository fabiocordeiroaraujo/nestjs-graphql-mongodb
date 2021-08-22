import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>
    ) {}

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException('Usuário não encontrado.')
        }
        return user;
    }

    async findAllUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async createUser(data: CreateUserInput): Promise<User> {    
        const userCreated = new this.userModel(data);
        const userSaved = await userCreated.save();
        if(!userSaved) {
            throw new InternalServerErrorException('Problema para criar um usuário.')
        }
        return userSaved;
    }

    async updateUser(id: string, data: UpdateUserInput): Promise<User> {            
        await this.userModel.updateOne({ _id: id }, data).exec();
        const userUpdated = await this.findById(id);
        return userUpdated;
    }

    async deleteUser(id: string): Promise<boolean> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const deleted = await this.userModel.deleteOne({ _id: id }).exec();      
            if (deleted.deletedCount >= 1) {
                return true;
            }
          }
        return false;
    }
}
