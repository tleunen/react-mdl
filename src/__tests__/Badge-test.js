/* eslint-env mocha */
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Badge from '../Badge';
import Icon from '../Icon';

chai.use(chaiEnzyme());

describe('Badge', () => {
    it('should render a mdl badge on a text', () => {
        const wrapper = shallow(<Badge text="4">Inbox</Badge>);

        expect(wrapper).to.have.tagName('span');
        expect(wrapper).to.have.className('mdl-badge');
        expect(wrapper).to.have.prop('data-badge', '4');
    });

    it('should attach the badge on a complex child', () => {
        const child = <Icon name="account_box" />;
        const wrapper = shallow(<Badge text="8">{child}</Badge>);

        expect(wrapper.node.type).to.equal(Icon);
        expect(wrapper).to.have.className('mdl-badge');
        expect(wrapper).to.have.prop('data-badge', '8');
    });


    it('should render empty badge when text is empty', () => {
        const wrapper = shallow(<Badge text="">Inbox</Badge>);

        expect(wrapper).to.have.className('mdl-badge');
        expect(wrapper).to.have.prop('data-badge', '');
    });

    it('should allow number as badge text', () => {
        const wrapper = shallow(<Badge text={4}>Inbox</Badge>);

        expect(wrapper).to.have.prop('data-badge', 4);
    });

    it('should allow custom className on the badge itself', () => {
        const element = (
            <Badge text="3" className="my-class">NEW</Badge>
        );

        const wrapper = shallow(element);
        expect(wrapper).to.have.className('my-class');
    });

    it('should retain the class on the child', () => {
        const element = (
            <Badge text="3">
                <div className="my-div-class">NEW</div>
            </Badge>
        );

        const wrapper = shallow(element);
        expect(wrapper).to.have.className('my-div-class');
    });

    describe('should not render badge', () => {
        it('when no children', () => {
            const wrapper = shallow(<Badge text="4" />);

            expect(wrapper).to.be.blank();
        });

        describe('when badge text is null', () => {
            it('and the child is text', () => {
                const wrapper = shallow(<Badge text={null}>Inbox</Badge>);

                expect(wrapper).to.not.have.className('mdl-badge');
                expect(wrapper).to.not.have.prop('data-badge');
            });

            it('and the child is a complex object', () => {
                const wrapper = shallow(<Badge text={null}><Icon name="account_box" /></Badge>);

                expect(wrapper).to.not.have.className('mdl-badge');
                expect(wrapper).to.not.have.prop('data-badge');
            });
        });

        describe('when badge text is undefined', () => {
            it('and the child is text', () => {
                const wrapper = shallow(<Badge text={null}>Inbox</Badge>);

                expect(wrapper).to.not.have.className('mdl-badge');
                expect(wrapper).to.not.have.prop('data-badge');
            });

            it('and the child is a complex object', () => {
                const wrapper = shallow(<Badge text={null}><Icon name="account_box" /></Badge>);

                expect(wrapper).to.not.have.className('mdl-badge');
                expect(wrapper).to.not.have.prop('data-badge');
            });
        });
    });

    it('should make the badge overlap the container', () => {
        const wrapper = shallow(<Badge text={2} overlap><Icon name="account_box" /></Badge>);

        expect(wrapper).to.have.className('mdl-badge--overlap');
    });

    it('should remove the badge background', () => {
        const wrapper = shallow(<Badge text="♥" noBackground>Mood</Badge>);

        expect(wrapper).to.have.className('mdl-badge--no-background');
    });
});
