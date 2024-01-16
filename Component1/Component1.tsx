import React from 'react';

import './Component1.scss';

export type Component1Props = {

}

const Component1: React.FC<Component1Props> = () => {
    return (
        <div className="component1"></div>
    );
}

Component1.displayName = 'Component1';

export default React.memo(Component1);