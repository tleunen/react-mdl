/*global componentHandler*/
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class MDLComponent extends React.Component { }

class MDLUpgradedComponent extends MDLComponent {
  componentDidMount() {
    componentHandler.upgradeElement(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    componentHandler.downgradeElements(ReactDOM.findDOMNode(this));
  }
}

export default {
  UpgradedComponent: MDLUpgradedComponent,
  Component: MDLComponent,
};
