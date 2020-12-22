// local images have to be imported
// import  
// import ImageLeague from '../../images/leagues';

// o scr da imagem n funciona pq n sei onde ele começa... verificar como é que se comporta com uma API
export default function ShowLeague(props){
    let altImage='League of '+props.league.name;

    return(
        <article className="col-12 col-md-6 col-lg-4 text-center">
            <img src={props.league.img} alt={altImage} className='img-fluid'/>
            <p className="text-center">{props.league.name}</p>
            <button className="homepageButtonLeague">View more!</button>
        </article>
    )
}