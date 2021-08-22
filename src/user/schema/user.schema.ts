import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {

  @Field()
  _id: string

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
