import ShowLeague from "./ShowLeague"
import RequestLeague from "../../functions/Homepage/RequestLeague"

export default function HomePage(){
    const databaseLeague = RequestLeague();
    console.log(databaseLeague)
    return(
    <main className="container">
        <section className="row">
            {databaseLeague && databaseLeague.map((league) => {
                 return (<ShowLeague league={league} key={league.id}/>)
            }) }
        </section>
    </main>
    )
}