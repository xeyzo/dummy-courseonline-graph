import { Entity, Column, Timestamp, } from 'typeorm';
import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";



export enum user_role {
  user,
  admin
};

registerEnumType(user_role, {
  name: 'user_role',
});

export class User {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Field(type => user_role)
  role: user_role;

}