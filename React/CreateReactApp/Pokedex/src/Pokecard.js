import react from "react";

const Pokecard = ({id, name, img, type, base_experience}) => {
    <div className="Pokecard">
        <h3 className="Pokecard-name">{name}</h3>
        <img src={img} width='200' className="Pokecard-img" alt=""/>
        <ul>
            <li>Type: {type}</li>
            <li>Base Experience: {base_experience}</li>
            
        </ul>
    </div>
};

export default Pokecard; 