import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { config } from '../../config.toml';

import {
    List, ListItem, Grid, Cell
} from '../../../src/';

import '../../css/components.css';
import '../../css/demos.css';

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
                <Link to={prefixLink(page.path)}>{page.data.title}</Link>
            </ListItem>
        );
    });

    return (
        <Grid noSpacing>
            <Cell component={'aside'} className="sidebar-components mdl-shadow--4dp" col={2}>
                <List>{sidebarItems}</List>
            </Cell>
            <Cell col={10}>
                {props.children}
            </Cell>
        </Grid>
    );
};

Template.propTypes = propTypes;

export default Template;
