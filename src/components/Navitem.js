import React from 'react';
import { Link } from 'react-router-dom';

const Navitem = (props) => {
    console.log('PROPS', props);

    return (
        <li>
            <Link to={props.link}>
                {props.item}
            </Link>
        </li>
    )
}

export default Navitem;
