import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Menim adim {props.name} ve menim {props.age} yasim var.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;