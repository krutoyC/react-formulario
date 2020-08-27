import React from 'react';

const Subt = (props) => {


    return (
        <div>
            <h3 className="active m-5 text-warning bg-dark p-1">Desde App.js: {props.propiedad}</h3>
        </div>
        
    );
};

export default Subt;