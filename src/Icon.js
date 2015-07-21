import React, { PropTypes } from 'react';

class Icon extends React.Component {
    render() {
        return <i className="material-icons">{this.props.name}</i>;
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired
};

export default Icon;
