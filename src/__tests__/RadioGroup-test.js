/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from './render';
import RadioGroup from '../RadioGroup';
import Radio from '../Radio';

describe('RadioGroup', () => {
    it('should render a div by default', () => {
        const output = render(<RadioGroup name="group1" value="1" />);

        expect(output.type).toBe('div');
    });

    it('should render the specified container', () => {
        const output = render(<RadioGroup name="group1" value="1" container="ul" />);

        expect(output.type).toBe('ul');
    });

    it('should render Radio component as children', () => {
        const element = (
            <RadioGroup name="group1" value="1">
                <Radio value="0" />
                <Radio value="1" />
            </RadioGroup>
        );
        const output = render(element);

        expect(output.props.children.length).toBe(2);
        expect(output.props.children[0].type).toBe(Radio);
        expect(output.props.children[1].type).toBe(Radio);
    });

    it('should encapsulate Radio component in childContainer', () => {
        const element = (
            <RadioGroup name="group1" value="1" container="ul" childContainer="li">
                <Radio value="0" />
                <Radio value="1" />
            </RadioGroup>
        );
        const output = render(element);

        expect(output.props.children.length).toBe(2);
        expect(output.props.children[0].type).toBe('li');
        expect(output.props.children[1].type).toBe('li');

        expect(output.props.children[0].props.children.type).toBe(Radio);
        expect(output.props.children[1].props.children.type).toBe(Radio);
    });

    it('should check the specific radio (uncontrolled)', () => {
        const value = 1;
        const element = (
            <RadioGroup name="group1" value={value}>
                <Radio value={0} />
                <Radio value={1} />
                <Radio value={2} />
            </RadioGroup>
        );
        const output = render(element);

        for (let i = 0; i < output.props.children.length; i++) {
            const radio = output.props.children[i];
            expect(radio.props.defaultChecked).toBe(value === radio.props.value);
        }
    });

    it('should check the specific radio (controlled)', () => {
        let value = 1;
        const onChange = e => {
            value = e.target.value;
        };
        const element = (
            <RadioGroup name="group1" value={value} onChange={onChange}>
                <Radio value={0} />
                <Radio value={1} />
                <Radio value={2} />
            </RadioGroup>
        );
        const output = render(element);

        for (let i = 0; i < output.props.children.length; i++) {
            const radio = output.props.children[i];
            expect(radio.props.checked).toBe(value === radio.props.value);
        }
    });

    it('should display a console warning', () => {
        const element = (
            <RadioGroup name="group1" value="1">
                <div>value 1</div>
                <div>value 2</div>
            </RadioGroup>
        );

        render(element);
    });
});
