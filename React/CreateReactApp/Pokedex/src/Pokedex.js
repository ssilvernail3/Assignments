import react from "react";
import Pokecard from "./Pokecard";


const Pokedex = ({ Pokemon }) => {
    return (
        
        <div>
            {Pokemon.map(p => (
                <Pokecard key={p.id} name={p.name} img={p.img}
                type={p.price} base_experience={p.base_experience} />
                ))}
        </div>
       
    )
}


export default Pokedex; 