import db from "../db/db";
import { PatientToInsert } from "../domain/Patient";
import {Patient} from '../domain/Patient';

class PatientAccount{
    public static table = "patient_account";

    public static async createPatient(patient:PatientToInsert){
        const newPatient = await db(PatientAccount.table).insert(patient,[
            'id',
            'first_name',
            'last_name',
            'birthdate',
            'ethnicity',
            'gender',
            'email',
            'street',
            'city',
            'state',
            'insuranceID',
            'memberID',
            'insurance_provider'


        ])
        return newPatient;
    }
    
    public static async getAllPatients(){
        const patients = await db(PatientAccount.table).select();
        return patients;
    }

    public static async updatePatient(patient:Patient):Promise<Patient>{
        const [updatedPatient] = await db(PatientAccount.table).where({id:patient.id}).update(patient).returning(['id','first_name',
        'last_name',
        'birthdate',
        'ethnicity',
        'gender',
        'email',
        'street',
        'city',
        'state',
        'insuranceID',
        'memberID',
        'insurance_provider'])
        return updatedPatient;
    }

    public static async deletePatient(patientId:number):Promise<void>{
        await db(PatientAccount.table).where({id:patientId}).delete();
    }

    
}

export default PatientAccount;