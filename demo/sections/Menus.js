import React from 'react';
import Example from './Example';
import IconButton from '../../src/IconButton';
import Menu, { MenuItem } from '../../src/Menu';

export default ( props ) => (
    <section { ...props }>
        <h3>Menus</h3>

        <p>Lower left</p>
        <Example>
        <IconButton name="more_vert" id="demo-menu-lower-left" />
        <Menu target="demo-menu-lower-left">
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
        </Menu>
        </Example>

        <p>Lower right</p>
        <Example>
        <IconButton name="more_vert" id="demo-menu-lower-right" />
        <Menu target="demo-menu-lower-right" align="right">
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
        </Menu>
        </Example>

        <p>Top left</p>
        <Example>
        <IconButton name="more_vert" id="demo-menu-top-left" />
        <Menu target="demo-menu-top-left" valign="top">
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
        </Menu>
        </Example>

        <p>Top right</p>
        <Example>
        <IconButton name="more_vert" id="demo-menu-top-right" />
        <Menu target="demo-menu-top-right" valign="top" align="right">
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
        </Menu>
        </Example>

    </section>
);
