import {Personne} from "./personne";
import {Gender} from './gender';
import {Religion} from './religion';
import {Knowledge} from "./knowledge";


export class Trainer extends Personne {
    constructor(
        private knowledges : Array<Knowledge>,
        name :string , 
        firstname :string ,
        gender:Gender ,
        religion? :Religion ,
    ) {super(name , firstname , gender , religion);}

    teach() {this.knowledges.filter( k => k.exp >= 2);}
    
}

