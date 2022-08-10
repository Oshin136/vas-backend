export interface Patient{
    id:number,
    first_name:string,
    last_name:string,
    birthdate:Date,
    ethnicity:string,
    gender:string,
    email:string,
    street:string,
    city:string,
    state:string,
    insuranceID:string,
    memberID:string,
    insurance_provider:string


}
export type PatientToInsert = Omit<Patient, 'id'>;
