import Concept from "./Concept";
import {Data} from  "./Data";

export default function Concepts(){
    return(
        <>
          <h2>Core Concepts</h2>
          <section id="core-concepts" >
           <ul>
            {
               Data.map(concept=><li key={concept.title} ><Concept {...concept}/></li>)
            }
          </ul>
        </section>
        </>
    )
}