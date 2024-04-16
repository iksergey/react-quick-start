import React from 'react';

const HeaderItem = (props) => {
    return (
        <div>
            <h1 className="h1-style m-3">
                {props.headerText}
            </h1>
        </div>
    );
}
export default HeaderItem;