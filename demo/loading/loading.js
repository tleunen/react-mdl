import React from 'react';
import ProgressBar from '../../src/ProgressBar';

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
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
