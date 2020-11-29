import React from 'react';
import classnames from 'classnames';

function Button(props) {
    return (
        <button
            className={classnames('button', props.className)}>
            {props.children}
        </button>


    )
}

export default Button;