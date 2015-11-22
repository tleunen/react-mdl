import React from 'react';
import Example from './Example';
import Slider from '../../src/Slider';

export default ( props ) => (
    <section { ...props }>
        <h3>Sliders</h3>
        <Example>
            <Slider min={ 0 } max={ 100 } defaultValue={ 0 } />
        </Example>
        <Example>
            <Slider min={0} max={100} defaultValue={ 25 } />
        </Example>

    </section>
);
