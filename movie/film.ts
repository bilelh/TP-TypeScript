import {Trailer} from './trailer' ;

export class Film {
    constructor(
        public title :string , 
        public release :string ,
        public studio :string , 
        public poster :string , 
        public location :string , 
        public rating :string , 
        public genre :string , 
        public directors :string ,
        public trailer :Trailer ) {}
}