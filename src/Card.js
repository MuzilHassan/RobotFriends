import React from "react";


const Card = ({ id, email, name }) => {
    return (
        <div className="bg-light-green dib br3 bw2 shadow-5 tc pa3 ma2 grow">

            <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>

    )
}
export default Card;