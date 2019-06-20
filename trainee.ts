import { Personne } from "./personne";
import {Certificate} from "./certificate";
import { Gender } from "./gender";
import { Religion } from "./religion";


export class Trainee extends Personne {
    constructor(
        public certificates: Array<Certificate> ,
        name :string , 
        firstname :string ,
        gender:Gender ,
        religion? :Religion ,
    ) {super(name , firstname , gender , religion)};
    
}

