import { StatusCodes } from 'http-status-codes';
import { User } from "../domain/User";
import logger from "../misc/logger";
import users from "../users.json";
import CustomError from '../misc/CustomError';
import { UserToInsert } from '../domain/User';
import { writeDataToFile } from '../utils/common';
import { USERS_LIST_FILE } from '../constants/common';

export const getAllUsers = async():Promise<User[]> =>{
    return new Promise((resolve,reject) =>{
        resolve(users);
    })
}

export const getUser = async(id:number):Promise<User>=>{
    return new Promise((resolve,reject)=>{
        const requiredUser = users.find((user)=>user.id === id);
        if(requiredUser){
            resolve(requiredUser)
        }else{
            logger.error(`User with id : ${id} not found`);
            reject(new CustomError(`User not found`, StatusCodes.NOT_FOUND))
        }
    })
}

export const createUser = async (user: UserToInsert): Promise<User> => {
    return new Promise((resolve, reject) => {
      const newUser = { id: Date.now(), ...user };
      users.push(newUser);
      writeDataToFile(USERS_LIST_FILE, users);
  
      resolve(newUser);
    });
  };