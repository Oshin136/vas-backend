import { StatusCodes } from "http-status-codes";

import { NextFunction, Request, Response } from "express";
import * as patientService from '../services/patientService';
import logger from "../misc/logger";
import CustomError from "../misc/CustomError";

export const getAllPatients = (req:Request,res:Response,next:NextFunction)=>{
    patientService.getAllPatients()
    .then(data => res.json(data))
    .catch(err => next(err));
};

export const createPatient = (req:Request,res:Response,next:NextFunction)=>{
    const data = req.body;
    patientService.createPatient(data)
    .then((data) => res.json(data))
    .catch((err) => next(err));
  }
  
  export const updatePatient = (req: Request, res: Response, next: NextFunction) => {
    const { patientId } = req.params;
    const { first_name,last_name,birthdate,ethnicity,gender,email,street,city,state,insuranceID,memberID,insurance_provider } = req.body;
  
    if (!patientId || !first_name || !last_name||!birthdate||!ethnicity||!gender||!email||!street||!city||!state||!insuranceID||!memberID||!insurance_provider) {
      logger.error('Missing parameters userId or name or email');
      throw new CustomError('Every details are required', StatusCodes.BAD_REQUEST);
    }
  
    patientService
      .updatePatient({ first_name,last_name,birthdate,ethnicity,gender, email,street,city,state,insuranceID,memberID,insurance_provider, id: +patientId })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  };
  
  
  export const deletePatient = (req: Request, res: Response, next: NextFunction) => {
    const { patientId } = req.params;
  
    patientService
      .deletePatient(+patientId)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  };