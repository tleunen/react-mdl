import React from 'react';
import ProgressBar from '../../src/ProgressBar';
import Spinner from '../../src/Spinner';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>Simple MDL Progress Bar</p>
                <ProgressBar progress={44} />

                <p>MDL Progress Bar with Indeterminate Progress</p>
                <ProgressBar indeterminate={true} />

                <p>MDL Progress Bar with Buffering</p>
                <ProgressBar progress={33} buffer={87} />

                <p>MDL Spinner Component</p>
                <Spinner />

                <p>MDL Spinner Component with Single Color</p>
                <Spinner singleColor={true} />
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
