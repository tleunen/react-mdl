import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { link } from 'gatsby-helpers';
import { config } from 'config';

import {
    List, ListItem, Grid, Cell
} from '../../../src/';

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
        <Grid>
            <Cell component={List} col={2}>{sidebarItems}</Cell>
            <Cell col={10}>
                {props.children}
            </Cell>
        </Grid>
    );
};

Template.propTypes = propTypes;

export default Template;
