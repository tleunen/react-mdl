/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import RadioGroup from '../src/RadioGroup';
import Radio from '../src/Radio';

describe('RadioGroup', () => {
    it('should render a div by default', () => {
        var output = render(<RadioGroup name="group1" value="1" />);

        expect(output.type).toBe('div');
    });

    it('should render the specified container', () => {
        var output = render(<RadioGroup name="group1" value="1" container="ul" />);

        expect(output.type).toBe('ul');
    });

    it('should render Radio component as children', () => {
        var element = (
            <RadioGroup name="group1" value="1">
                <Radio value="0" />
                <Radio value="1" />
            </RadioGroup>
        );
        var output = render(element);

        expect(output.props.children.length).toBe(2);
        expect(output.props.children[0].type).toBe(Radio);
        expect(output.props.children[1].type).toBe(Radio);
    });

    it('should encapsulate Radio component in childContainer', () => {
        var element = (
            <RadioGroup name="group1" value="1" container="ul" childContainer="li">
                <Radio value="0" />
                <Radio value="1" />
            </RadioGroup>
        );
        var output = render(element);

        expect(output.props.children.length).toBe(2);
        expect(output.props.children[0].type).toBe('li');
        expect(output.props.children[1].type).toBe('li');

        expect(output.props.children[0].props.children.type).toBe(Radio);
        expect(output.props.children[1].props.children.type).toBe(Radio);
    });

    it('should check the specific radio', () => {
        var value = 1;
        var element = (
            <RadioGroup name="group1" value={value}>
                <Radio value={0} />
                <Radio value={1} />
                <Radio value={2} />
            </RadioGroup>
        );
        var output = render(element);

        for(let i=0; i<output.props.children.length; i++) {
            let radio = output.props.children[i];
            expect(radio.props.checked).toBe( value === radio.props.value );
        }
    });
});
