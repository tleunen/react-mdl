import React from 'react';
import ReactDOM from 'react-dom';
import Footer, { Section, DropDownSection, LinkList } from '../../src/footer/Footer';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Footer size="mega">
                    <Section type="middle">
                        <DropDownSection title="Features">
                            <LinkList>
                                <a href="#">About</a>
                                <a href="#">Terms</a>
                                <a href="#">Partners</a>
                                <a href="#">Updates</a>
                            </LinkList>
                        </DropDownSection>
                        <DropDownSection title="Details">
                            <LinkList>
                                <a href="#">Specs</a>
                                <a href="#">Tools</a>
                                <a href="#">Resources</a>
                            </LinkList>
                        </DropDownSection>
                        <DropDownSection title="Technology">
                            <LinkList>
                                <a href="#">How it works</a>
                                <a href="#">Patterns</a>
                                <a href="#">Usage</a>
                                <a href="#">Products</a>
                                <a href="#">Contracts</a>
                            </LinkList>
                        </DropDownSection>
                        <DropDownSection title="FAQ">
                            <LinkList>
                                <a href="#">Questions</a>
                                <a href="#">Answers</a>
                                <a href="#">Contact Us</a>
                            </LinkList>
                        </DropDownSection>
                    </Section>
                    <Section type="bottom" logo="Title">
                        <LinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </LinkList>
                    </Section>
                </Footer>


                <br/><br/><br/>

                <Footer size="mini">
                    <Section type="left" logo="Title">
                        <LinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </LinkList>
                    </Section>
                </Footer>
            </div>
        );
    }
}


ReactDOM.render(<Demo />, document.getElementById('app'));
