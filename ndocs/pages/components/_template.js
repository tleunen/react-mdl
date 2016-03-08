import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';
import { config } from 'config';

import {
    List, ListItem
} from 'react-mdl';

const propTypes = {
    location: PropTypes.object,
    route: PropTypes.object
};

const Template = (props) => {
    const sidebarItems = config.componentPages.map(p => {
        const page = props.route.pages.find(_p => _p.path === p);
        // const isActive = link(page.path) === props.location.pathname;
        return (
            <ListItem key={page.path}>
                <Link to={link(page.path)}>{page.data.title}</Link>
            </ListItem>
        );
    });

    return (
        <div>
            <List>{sidebarItems}</List>
            <div>{props.children}</div>
        </div>
    );
};

Template.propTypes = propTypes;

export default Template;
