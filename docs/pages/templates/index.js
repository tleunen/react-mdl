import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from '../../config.toml';

import {
    List, ListItem
} from '../../../src/';

const propTypes = {
    location: PropTypes.object,
    route: PropTypes.object
};

const TemplateIndex = (props) => {
    const sidebarItems = config.templatePages.map(p => {
        const page = props.route.pages.find(_p => _p.path === p);
        // const isActive = link(page.path) === props.location.pathname;
        return (
            <ListItem key={page.path}>
                <Link to={prefixLink(page.path)}>{page.data.title}</Link>
            </ListItem>
        );
    });

    const post = props.route.page.data;
    const title = post.title === config.siteTitle || !post.title
        ? config.siteTitle
        : `${post.title} | ${config.siteTitle}`;

    return (
        <DocumentTitle title={title}>
            <List>{sidebarItems}</List>
        </DocumentTitle>
    );
};

TemplateIndex.propTypes = propTypes;
TemplateIndex.metadata = () => ({
    title: 'Templates'
});

export default TemplateIndex;
