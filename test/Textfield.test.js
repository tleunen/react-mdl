/* eslint-env mocha */
// import expect from 'expect';
import React from 'react';
import { render } from './render';
import Textfield from '../src/Textfield';

describe('Textfield', () => {
    render(<Textfield label="label" />);
});
