import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Menim adim {props.name} ve menim {props.age} yasim var.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;