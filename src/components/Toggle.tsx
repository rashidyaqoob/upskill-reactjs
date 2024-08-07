import React, { useState } from 'react';

export const Toggle = ({ children }) => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    return React.Children.map(children, child =>
        React.cloneElement(child, { on, toggle })
    );
};


export const ToggleOn = ({ on, children }) => on ? children : null;
export const ToggleOff = ({ on, children }) => on ? null : children;
export const ToggleButton = ({ on, toggle }) => (
    <button onClick={toggle}>
        {on ? 'Turn off' : 'Turn on'}
    </button>
);
