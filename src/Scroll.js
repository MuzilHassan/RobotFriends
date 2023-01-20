import React from "react";
const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', borderTop: '5px solid black', height: '900px', margin: '5px', padding: '5px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;