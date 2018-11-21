import React from 'react';
import './scroll.css';

const Scroll = (props) => {
    return (
        <div className="scroll-container">
            <div className="scroll-item">
                { props.children }
            </div>
        </div>
    );
};

export default Scroll;