import React, { PropTypes } from 'react';
import classNames from 'classnames';

class Spinner extends React.Component {

    componentDidMount(){
        componentHandler.upgradeElement(React.findDOMNode(this));
    }

    componentWillUnmount(){
        componentHandler.downgradeElements(React.findDOMNode(this));
    }

    render() {
        var { className, singleColor, ...otherProps } = this.props;

        var classes = classNames('mdl-spinner mdl-js-spinner is-active', {
            'mdl-spinner--single-color': singleColor
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

Spinner.propTypes = {
    className: PropTypes.string,
    singleColor: PropTypes.bool
};

export default Spinner;
