import React from "react";
import { Link } from "react-router-dom";


const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>HI WE HAVE SOME COOL DOGGOS! CLICK ON THE LINKS BELOW TO CHECK THEM OUT!</h1>
            {dogs.map(dog => 
            <div>
            <img src={dog.src}></img>
                    <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
                    </div>
            )}
    </div>
    )
    
}

export default DogList; 