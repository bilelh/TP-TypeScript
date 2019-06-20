import { Trainer } from "./trainer";
import { Gender } from "./gender";
import { Religion } from "./religion";
import { Knowledge } from "./knowledge";
import { Trainee } from "./trainee";
import { Certificate } from "./certificate";
import { Training } from "./training";


let angular = new Knowledge('Angular',10);
let java = new Knowledge('java',20);
let master = new Certificate('master 2' , 2014)
let java8 = new Certificate ('java 8' , 2019)

let niko = new Trainer(
    [angular , java],
    'Hodicq',
    'niko',
    Gender.male,
    Religion.Atheist
)

let bilel = new Trainee(
    [master , java8],
    'harzallah',
    'bilel',
    Gender.male,
    Religion.Islam
)

let formationJava = new Training (
    'Formation Java FullStack',
    '21/04/2019',
    '16/07/2019',
    [bilel],
    [niko]
)
