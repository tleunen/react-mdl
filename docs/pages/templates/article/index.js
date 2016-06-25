import React, { PropTypes } from 'react';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import { config } from '../../../config.toml';
import makeTemplate from '../_templateHelper';
import { Layout, Header, Textfield, Content, Grid, Cell,
    Footer, FooterSection, FooterLinkList } from '../../../../src/';
import { getColorClass, getTextColorClass } from '../../../../src/utils/palette';

const propTypes = {
    route: PropTypes.object
};

const Article = props => {
    const post = props.route.page.data;
    const title = post.title === config.siteTitle || !post.title
        ? config.siteTitle
        : `${post.title} | ${config.siteTitle}`;

    return (
        <DocumentTitle title={title}>
            <Layout className={classNames('demo-layout', getColorClass('grey', 100))} fixedHeader>
                <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="Material Design Lite" scroll>
                    <Textfield
                        value=""
                        label="Search"
                        expandable
                        expandableIcon="search"
                    />
                </Header>
                <div className="demo-ribbon" />
                <Content className="demo-main">
                    <Grid className="demo-container">
                        <Cell col={2} hidePhone hideTablet />
                        <Cell col={8} shadow={2} className={classNames('demo-content', getColorClass('white'), getTextColorClass('grey', 800))}>
                            <div className={classNames('demo-crumbs', getTextColorClass('grey', 500))}>
                                Google &gt; Material Design Lite &gt; How to install MDL
                            </div>
                            <h3>How to install MDL</h3>
                            <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                            <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                            <p>Tempor tempor aliqua in commodo cillum Lorem magna dolore proident Lorem. Esse ad consequat est excepteur irure eu irure quis aliqua qui. Do mollit esse veniam excepteur ut veniam anim minim dolore sit commodo consequat duis commodo. Sunt dolor reprehenderit ipsum minim eiusmod eu consectetur anim excepteur eiusmod. Duis excepteur anim dolor sit enim veniam deserunt anim adipisicing Lorem elit. Cillum sunt do consequat elit laboris nisi consectetur.</p>
                            <h3>Basic MDL Usage</h3>
                            <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                            <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                            <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                            <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                            <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                            <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                            <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                            <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                        </Cell>
                    </Grid>
                    <Footer size="mini" className="demo-footer">
                        <FooterSection type="left">
                            <FooterLinkList>
                                <a href="#">Help</a>
                                <a href="#">Privacy and Terms</a>
                                <a href="#">User Agreement</a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Content>
            </Layout>
        </DocumentTitle>
    );
};

Article.propTypes = propTypes;

export default makeTemplate('Article template', Article, `
.demo-ribbon {
  width: 100%;
  height: 40vh;
  background-color: #3F51B5;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
}

.demo-main {
  margin-top: -35vh;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
}

.demo-header .mdl-layout__header-row {
  padding-left: 40px;
}

.demo-container {
  max-width: 1600px;
  width: calc(100% - 16px);
  margin: 0 auto;
}

.demo-content {
  border-radius: 2px;
  padding: 80px 56px;
  margin-bottom: 80px;
}

.demo-layout.is-small-screen .demo-content {
  padding: 40px 28px;
}

.demo-content h3 {
  margin-top: 48px;
}

.demo-footer {
  padding-left: 40px;
}

.demo-footer .mdl-mini-footer--link-list a {
  font-size: 13px;
}
`);
