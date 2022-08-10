import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('patient_account',(table)=>{
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.date('birthdate');
        table.string('ethnicity');
        table.string('gender');
        table.string('email').notNullable().unique();
        table.string('street');
        table.string('state');
        table.string('insuranceID');
        table.string('memberID');
        table.string('insurance_provider');
    

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('patient_account');
}

