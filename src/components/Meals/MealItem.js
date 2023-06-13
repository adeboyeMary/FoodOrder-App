import React, { Fragment } from 'react';

const MealItem = (props) => {

    return (
        <Fragment>
            <li>
                <h4>{props.name}</h4>
                <span>{props.description}</span>
                <p>{props.price}</p>
                <hr />
            </li>
        </Fragment>
    );
};

export default MealItem;