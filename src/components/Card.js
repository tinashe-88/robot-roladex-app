import React from 'react';

const Card = ({ name, email, id }) => {
    
    return (
        <div className="mw5 center bg-near-white br3 fl w-25 pa4-ns mv3 ba b--black-10 grow shadow-4">
            <div className="tc flex justify-around">
                <img src={`https://robohash.org/${id}?200x200`} className="br-100 h3 w3 dib" alt="robots" />
                <h2 className="f4">{name}</h2>
                <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">{email}</p>
        </div>
    )
}

export default Card