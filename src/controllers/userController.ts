import { StatusCodes } from 'http-status-codes';

import { NextFunction, Request, Response } from 'express';
import logger from '../misc/logger';

import CustomError from '../misc/CustomError';

import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  userService
    .getAllUsers()
    .then(data => res.json(data))
    .catch(err => next(err));
};

export const getUser = (req:Request,res:Response,next:NextFunction)=>{
  const {userId} = req.params;

  userService.getUser(+userId).then((data) => res.json(data)).catch((err)=>next(err));
}


export const createUser = (req:Request,res:Response,next:NextFunction)=>{
  const data = req.body;
  userService.createUser(data)
  .then((data) => res.json(data))
  .catch((err) => next(err));
}

export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  if (!userId || !name || !email) {
    logger.error('Missing parameters userId or name or email');
    throw new CustomError('UserId, Name and email are required', StatusCodes.BAD_REQUEST);
  }

  userService
    .updateUser({ name, email, id: +userId })
    .then((data) => res.json(data))
    .catch((err) => next(err));
};


export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  userService
    .deleteUser(+userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
};