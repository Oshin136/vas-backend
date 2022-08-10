import {Patient } from '../domain/Patient';
import Success from '../domain/Success';
import logger from '../misc/logger';
import PatientAccount from '../models/PatientAccount';
import { PatientToInsert } from '../domain/Patient';


export const getAllPatients = async():Promise<Success<Patient[]>>=>{
    logger.info("Getting all patients");
    const patients = await PatientAccount.getAllPatients();
    return{
        data:patients,
        message : 'Patients fetched successfully'
    };

};

export const createPatient = async (patient: PatientToInsert): Promise<Success<Patient>> => {
    const insertedPatient = await PatientAccount.createPatient(patient);
    logger.info('Patient created successfully');
  
    return {
      data: insertedPatient,
      message: 'Patient created successfully',
    };
  };
  
  export const updatePatient = async (patient:Patient):Promise<Success<Patient>>=>{
    const updatedPatient = await PatientAccount.updatePatient(patient);
    logger.info('Patient updated successfully');
    return {
      data: updatedPatient,
      message: 'Patient updated successfully',
    };
  }
  
  export const deletePatient = async (patientId:number):Promise<Success<Patient>>=>{
   await PatientAccount.deletePatient(patientId);
    logger.info('Patient deleted successfully');
    return {
      message: 'Patient updated successfully',
    };
  }
