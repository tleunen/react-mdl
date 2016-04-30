/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiSpies from 'chai-spies';
import { shallow, mount } from 'enzyme';
import React from 'react';
import Snackbar from '../Snackbar';

chai.use(chaiEnzyme());
chai.use(chaiSpies);

function noop() {}

describe('Snackbar', () => {
    it('should not be visible by default', () => {
        const wrapper = shallow(<Snackbar active={false} onTimeout={noop} />);

        expect(wrapper)
            .to.have.tagName('div')
            .to.have.className('mdl-snackbar')
            .to.have.attr('aria-hidden');

        expect(wrapper.children()).to.have.length(1);

        expect(wrapper.find('.mdl-snackbar__text'))
            .to.be.blank();
    });

    it('should allow custom css classes', () => {
        const wrapper = shallow(<Snackbar active={false} className="my-snackbar" onTimeout={noop} />);

        expect(wrapper)
            .to.have.className('mdl-snackbar')
            .to.have.className('my-snackbar');
    });

    it('should show the snackbar', (done) => {
        const wrapper = mount(<Snackbar active={false} action="Undo" onTimeout={noop} />);

        expect(wrapper)
            .to.not.have.className('mdl-snackbar--active')
            .to.have.prop('aria-hidden', 'true');
        expect(wrapper.find('.mdl-snackbar__action')).to.have.length(0);

        wrapper.setProps({
            active: true,
            timeout: 1,
            onTimeout: () => {
                wrapper.setProps({ active: false });
                done();
            }
        });

        expect(wrapper)
            .to.have.className('mdl-snackbar--active')
            .to.have.attr('aria-hidden', 'false');
        expect(wrapper.find('.mdl-snackbar__action')).to.have.length(1);
    });

    it('should show the toast (snackbar without action)', (done) => {
        const wrapper = mount(<Snackbar active={false} onTimeout={noop} />);

        expect(wrapper)
            .to.not.have.className('mdl-snackbar--active')
            .to.have.prop('aria-hidden', 'true');
        expect(wrapper.find('.mdl-snackbar__action')).to.have.length(0);

        wrapper.setProps({
            active: true,
            timeout: 1,
            onTimeout: () => {
                wrapper.setProps({ active: false });
                done();
            }
        });

        expect(wrapper)
            .to.have.className('mdl-snackbar--active')
            .to.have.attr('aria-hidden', 'false');
        expect(wrapper.find('.mdl-snackbar__action')).to.have.length(0);
    });

    it('should click on the action button', () => {
        const onClick = chai.spy();

        const wrapper = shallow(<Snackbar active action="Undo" onTimeout={noop} onActionClick={onClick} />);

        const button = wrapper.find('.mdl-snackbar__action');
        expect(button).to.be.present();
        button.simulate('click');

        expect(onClick).to.have.been.called();
    });

    it('should clear the timer when receiving new props', (done) => {
        const timeoutHandler1 = chai.spy();
        const timeoutHandler2 = () => {
            expect(timeoutHandler1).to.not.have.been.called();
            done();
        };
        const wrapper = mount(<Snackbar active={false} onTimeout={timeoutHandler1} />);

        wrapper.setProps({
            active: true,
            timeout: 1000
        });
        wrapper.setProps({
            timeout: 1,
            onTimeout: timeoutHandler2
        });
    });

    it('should clear timeout timer when unmounted', (done) => {
        const wrapper = mount(<Snackbar active={false} onTimeout={noop} />);
        const timeoutHandler = chai.spy();

        wrapper.setProps({
            active: true,
            timeout: 1,
            onTimeout: timeoutHandler
        });

        wrapper.unmount();
        setTimeout(() => {
            expect(timeoutHandler).to.not.have.been.called();
            done();
        }, 300);
    });

    it('should clear the cleartimer timer when unmounted', (done) => {
        const wrapper = mount(<Snackbar active={false} onTimeout={noop} />);
        const timeoutHandler = chai.spy();

        wrapper.setProps({
            active: true,
            timeout: 100,
            onTimeout: timeoutHandler
        });

        setTimeout(() => {
            wrapper.unmount();
            setTimeout(() => {
                expect(timeoutHandler).to.not.have.been.called();
                done();
            }, 300);
        }, 101);
    });
});
