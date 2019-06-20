import {Film}  from './film' ;
import {Trailer} from './trailer' ;

let title:string = '12 Rounds 3: Lockdown';
let release:string ='Fri, 11 Sep 2015 00:00:00 -0700';
let studio:string = 'Lionsgate' ;
let poster:string = 'http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg' ;
let location:string = '/trailers/lions_gate/12rounds3lockdown/' ;
let rating:string = 'R' ;
let genre:string = '["Action and Adventure"]' ;
let directors:string = 'Stephen Reynolds' ;

let postDate:string = '12 Rounds 3: Lockdown';
let url:string ='Fri, 11 Sep 2015 00:00:00 -0700';
let type:string = 'Lionsgate' ;
let exclusive:boolean = false ;
let hd:boolean = true;

let trailer:Trailer = new Trailer(postDate , url , type , 
    exclusive , hd) ;

let film:Film = new Film(title , release , studio , poster , 
    location , rating , genre , directors, trailer ) ;



console.log(`FILM :
    titre : ${film.title}
    release : ${film.release}
    studio : ${film.studio}
    poster : ${film.poster}
    location : ${film.location}
    rating : ${film.rating}
    genre : ${film.genre}
    directors : ${film.directors}
    Trailers :
        postDate : ${film.trailer.postDate}
        url : ${film.trailer.url}
        type : ${film.trailer.type}
        exclusive : ${film.trailer.exclusive}
        hd : ${film.trailer.hd}`
        );
        

