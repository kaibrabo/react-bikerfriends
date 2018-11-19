import React from "react";

// each card view
const Card = ({ name, email, id }) => {
    return (
        // class="tachyons"
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* Robohash displays images, 'id' makes images consistent to each object */}
            <img src={`https://robohash.org/${id}?200x200`} alt={`${name}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
