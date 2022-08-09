import { User } from '../domain/User';
import logger from '../misc/logger';
import Success from '../domain/Success';
// import * as UserModel from '../models/UserModel';
import UserAccount from '../models/UserAccount';
import { UserToInsert } from '../domain/User';
/**
 * Get all the users
 * @returns {Promise<{users: User [], message: string}>}
 */
export const getAllUsers = async (): Promise<Success<User[]>> => {
  logger.info("Getting all users");
  const users = await UserAccount.getAllUsers();

  return {
    data:users,
    message:'Users fetched successfully',
  };
};

export const getUser = async(userId:number):Promise<Success<User>>=>{
  logger.info(`Getting user with id:${userId}`);
  const user = await UserAccount.getUser(userId);

  return {
    data:user,
    message:'User fetched successfully'
  }
}
  
export const createUser = async (user: UserToInsert): Promise<Success<User>> => {
  const insertedUser = await UserAccount.createUser(user);
  logger.info('User created successfully');

  return {
    data: insertedUser,
    message: 'User created successfully',
  };
};

export const updateUser = async (user:User):Promise<Success<User>>=>{
  const updatedUser = await UserAccount.updateUser(user);
  logger.info('User updated successfully');
  return {
    data: updatedUser,
    message: 'User updated successfully',
  };
}

export const deleteUser = async (userId:number):Promise<Success<User>>=>{
 await UserAccount.deleteUser(userId);
  logger.info('User deleted successfully');
  return {
    message: 'User updated successfully',
  };
}