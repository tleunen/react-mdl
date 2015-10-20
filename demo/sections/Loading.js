import React from 'react';
import Example from './Example';
import ProgressBar from '../../src/ProgressBar';
import Spinner from '../../src/Spinner';

export default ( props ) => (
    <section { ...props }>
        <h3>Loading</h3>

        <h4>ProgressBar</h4>
        <p>Simple MDL Progress Bar</p>
        <Example>
            <ProgressBar progress={44} />
        </Example>

        <p>MDL Progress Bar with Indeterminate Progress</p>
        <Example>
            <ProgressBar indeterminate />
        </Example>

        <p>MDL Progress Bar with Buffering</p>
        <Example>
            <ProgressBar progress={33} buffer={87} />
        </Example>

        <h4>Spinner</h4>
        <p>MDL Spinner Component</p>
        <Example>
            <Spinner />
        </Example>

        <p>MDL Spinner Component with Single Color</p>
        <Example>
            <Spinner singleColor />
        </Example>

    </section>
);
