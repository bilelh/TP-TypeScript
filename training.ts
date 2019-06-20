import { Trainee } from "./trainee";
import { Trainer } from "./trainer";


export class Training {
    constructor (
        public name:string ,
        public begining:string,
        public finish:string,
        public trainees:Array<Trainee>,
        public trainers:Array<Trainer>
    ) {};
}