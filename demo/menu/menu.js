import React from 'react';
import IconButton from '../../src/IconButton';
import Menu, { MenuItem } from '../../src/Menu';

class Demo extends React.Component {
    render() {
        return (
            <div style={{width: '300px', margin: 'auto', position: 'relative'}}>
                <p>Lower left</p>
                <IconButton name="more_vert" id="demo-menu-lower-left" />
                <Menu target="demo-menu-lower-left">
                    <MenuItem>Some Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem disabled={true}>Disabled Action</MenuItem>
                    <MenuItem>Yet Another Action</MenuItem>
                </Menu>

                <p>Lower right</p>
                <IconButton name="more_vert" id="demo-menu-lower-right" />
                <Menu target="demo-menu-lower-right" align="right">
                    <MenuItem>Some Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem disabled={true}>Disabled Action</MenuItem>
                    <MenuItem>Yet Another Action</MenuItem>
                </Menu>

                <p>Top left</p>
                <IconButton name="more_vert" id="demo-menu-top-left" />
                <Menu target="demo-menu-top-left" valign="top">
                    <MenuItem>Some Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem disabled={true}>Disabled Action</MenuItem>
                    <MenuItem>Yet Another Action</MenuItem>
                </Menu>

                <p>Top right</p>
                <IconButton name="more_vert" id="demo-menu-top-right" />
                <Menu target="demo-menu-top-right" valign="top" align="right">
                    <MenuItem>Some Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem disabled={true}>Disabled Action</MenuItem>
                    <MenuItem>Yet Another Action</MenuItem>
                </Menu>
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));
