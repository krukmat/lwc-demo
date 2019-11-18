import { LightningElement, api } from 'lwc';

export default class MitestsInstall extends LightningElement {
    @api person;
    @api age;
    constructor(){
        super();
        this.person = 'Pepe';
        this.age = 10;
    }
    @api getPerson(){
        return this.person;
    }
    @api getAge(){
        return this.age;
    }
}