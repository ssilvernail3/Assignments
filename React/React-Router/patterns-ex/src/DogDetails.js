import React from "react";



const DogDetails = ({ dog }) => {
    return (
       
           
                <div>
                    <ul>
                        <li>{dog.name}</li>
                        <li>{dog.age}</li>
                        <li><img src={dog.src}></img></li>
                        {dog.facts.map((fact, i) => 
                            <ul>
                                <li key={i}>{fact}</li>
                            </ul>
                            )}
                    </ul>
                </div>
               
        
    )
}

export default DogDetails;