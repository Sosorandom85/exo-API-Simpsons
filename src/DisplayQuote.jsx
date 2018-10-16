import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <div>
            <img src={quote.image} alt= ""/>
            <p>Character : {quote.character}</p>
            <p>Quote : {quote.quote}</p>
        </div>
    )
};

export default DisplayQuote;