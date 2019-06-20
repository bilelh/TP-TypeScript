
enum gender {male , female};
enum religion {Buddhism , Judaism , Islam , Catholicism , Atheist};

export class Personne {
    
    constructor(
        public name :string , 
        public firstname :string ,
        public gender:gender ,
        private religion :religion ,
    ) {}

    drink (beverageName:string , alcool:boolean , bio:boolean): void {
        if (alcool && bio) {
            console.log(`Boisson : ${beverageName}`)
        }
    }
    
    toString(): void {
        console.log(`${this.firstname}   ${this.name}`)
    }
}



