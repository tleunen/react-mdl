import React from 'react';
import { Link } from 'react-router';
import {
  Button,
  Cell,
  Content,
  Drawer,
  Grid,
  Header,
  HeaderRow,
  Icon,
  IconButton,
  Layout,
  Menu,
  MenuItem,
  Navigation,
  Spacer,
  Textfield,
} from '../../../src';

class Dashboard extends React.Component {
    render() {
        return (
            <Layout className={'demo-layout'} fixedHeader fixedDrawer>
              <Header className={['demo-header', 'mdl-color--grey-100', 'mdl-color-text--grey-600']}>
                <HeaderRow title={'Home'}>
                  <Spacer/>
                  <Textfield
                    label={'Enter your query...'}
                    expandableIcon={'search'}
                    expandable
                  />
                  <IconButton name={'more_vert'} id={'hdrbtn'} ripple/>
                  <Menu target={'hdrbtn'} align={'right'} valign={'bottom'} ripple>
                    <MenuItem>
                      About
                    </MenuItem>
                    <MenuItem>
                      Contact
                    </MenuItem>
                    <MenuItem>
                      Legal information
                    </MenuItem>
                  </Menu>
                </HeaderRow>
              </Header>
              <Drawer className={['demo-drawer', 'mdl-color--blue-grey-900', 'mdl-color-text--blue-grey-50']}>
                <header className="demo-drawer-header">
                  <img src="user.jpg" className="demo-avatar"/>
                  <div className="demo-avatar-dropdown">
                    <span>hello@example.com</span>
                    <Spacer/>
                    <IconButton name={'arrow_drop_down'} id='accbtn' ripple/>
                    <Menu target={'accbtn'} align={'right'} valign={'bottom'} ripple>
                      <MenuItem>hello@example.com</MenuItem>
                      <MenuItem>info@example.com</MenuItem>
                      <MenuItem><i className="material-icons">add</i>Add another account...</MenuItem>
                    </Menu>
                  </div>
                </header>
                <Navigation className={['demo-navigation', 'mdl-color--blue-grey-800']}>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'home'} /> Home
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'inbox'} /> Inbox
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'delete'} /> Trash
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'report'} /> Spam
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'forum'} /> Forums
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'flag'} /> Updates
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'local_offer'} /> Promos
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'shopping_cart'} /> Purchases
                  </Link>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'people'} /> Social
                  </Link>
                    <Spacer/>
                  <Link>
                    <Icon className={'mdl-color-text--blue-grey-400'} role="presentation" name={'help_outline'} />
                    <span className='visuallyhidden'>Help</span>
                  </Link>
                </Navigation>
              </Drawer>
              <Content>
                <Grid className={'demo-content'}>
                  <Cell col={12} className={['demo-charts', 'mdl-color--white', 'mdl-shadow--2dp']} >
                    <Cell col={4}>
                      <img src='dot_one.svg'/>
                    </Cell>
                    <Cell col={4}>
                      <img src='dot_two.svg'/>
                    </Cell>
                    <Cell col={4}>
                      <img src='dot_three.svg'/>
                    </Cell>
                    <Cell col={4}>
                      <img src='dot_four.svg'/>
                    </Cell>
                  </Cell>
                </Grid>
              </Content>
            </Layout>
        );
    }
}

export default Dashboard;
