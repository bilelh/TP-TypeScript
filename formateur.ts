import { Personne , gender , religion } from "./personne";
import { Connaissance } from "./connaissance";


export class Formateur extends Personne {
    constructor(
        public name :string , 
        public firstname :string ,
        public gender:gender ,
        private religion :religion ,
        private connaissance : Connaissance
    ) {super(name , firstname , gender , religion);}

    enseigner() {
        if (this.connaissance.exp > 2) {
            console.log(this.connaissance.name)
        }
    }
}

