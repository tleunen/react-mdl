/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderDOM } from '../../__tests__/render';
import MDLComponent from '../MDLComponent';

describe('utils', () => {
    describe('MDLComponent', () => {
        it('should upgrade the element', () => {
            var element = (
                <MDLComponent>
                    <button className="mdl-button mdl-js-button" />
                </MDLComponent>
            );

            var el = renderDOM(element);

            expect(el.dataset.upgraded).toInclude('MaterialButton');
        });

        it('should downgrade the element', () => {
            var element = (
                <MDLComponent>
                    <button className="mdl-button mdl-js-button" />
                </MDLComponent>
            );

            var el = renderDOM(element);

            ReactDOM.render(<div>Nothing</div>, el.parentNode);

            expect(el.dataset.upgraded).toExclude('MaterialButton');
        });
    });
});
