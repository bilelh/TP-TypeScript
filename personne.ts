import {Gender} from './gender';
import {Religion} from './religion';
import {Beverage} from './beverage';

export class Personne {
    
    constructor(
        public name :string , 
        public firstname :string ,
        public gender:Gender ,
        private religion? :Religion ,
    ) {}

    drink (beverage:Beverage): void {
        console.log(`Beverage : ${beverage.name}  
                Alcohol : ${beverage.alcool}
                Bio : ${beverage.bio}`)
    }
    
    toString(): void {
        console.log(`${this.firstname}   ${this.name}`)
    }
}



