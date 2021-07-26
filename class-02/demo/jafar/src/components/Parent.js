import React from 'react';

import Child from './Child';

class Parent extends React.Component {
    render() {
        return (
            <div>
                <h2>I am the parent of Jafar</h2>
                <Child
                    name="Jafar"
                />
            </div>
        )
    }
}

export default Parent;