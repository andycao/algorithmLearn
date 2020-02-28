import React from 'react';

function Link(props){
    return <li onClick={props.func}>{props.name}</li>;
}

export default Link;