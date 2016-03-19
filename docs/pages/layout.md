# Layout

- [Navigation Layout](#navigation-layout)
- [Grid](#grid)
- [Tabs](#tabs)
- [Footer](#footer)

## Demo

### Navigation Layout

```jsx
{/* Uses a transparent header that draws on top of the layout's background */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
```

```jsx
{/* No header, and the drawer stays open on larger screens (fixed drawer). */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedDrawer>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
```

```jsx
{/* Always shows a header, even in smaller screens. */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
```

```jsx
{/* The drawer is always open in large screens. The header is always shown, even in small screens. */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
```

```jsx
{/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
```

```jsx
{/* Uses a header that contracts as the page scrolls down. */}
<div className="demo-big-content">
    <Layout>
        <Header waterfall>
            <HeaderRow title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
```

```jsx
{/* Hide the top part of the header when scrolling down */}
<div className="demo-big-content">
    <Layout>
        <Header waterfall hideTop>
            <HeaderRow title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
```

```jsx_demo_class
// Simple header with scrollable tabs
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow title="Title" />
                        <HeaderTabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                            <Tab>Tab4</Tab>
                            <Tab>Tab5</Tab>
                            <Tab>Tab6</Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Title" />
                    <Content>
                        <div className="page-content">Content for the tab: {this.state.activeTab}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}
```

```jsx
{/* Simple header with fixed tabs. */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Title" />
            <HeaderTabs activeTab={1} onChange={(tabId) => {}}>
                <Tab>Tab1</Tab>
                <Tab>Tab2</Tab>
                <Tab>Tab3</Tab>
            </HeaderTabs>
        </Header>
        <Drawer title="Title" />
        <Content>
            <div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>
        </Content>
    </Layout>
</div>
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Drawer    | title        | String    | Set the Drawer title | Optional |
| Layout    | fixedDrawer  | Boolean   | Makes the drawer always visible and open in larger screens | Optional |
| Layout    | fixedHeader  | Boolean   | Makes the header always visible, even in small screens | Optional |
| Layout    | fixedTabs    | Boolean   | Uses fixed tabs instead of the default scrollable tabs | Optional |
| Header    | scroll       | Boolean   | Makes the header scroll with the content | Optional |
| Header    | seamed       | Boolean   | Uses a header without a shadow | Optional |
| Header    | title        | Any       | Set the layout title | Optional |
| Header    | transparent  | Boolean   | Makes header transparent | Optional |
| Header    | waterfall    | Boolean   | Allows a "waterfall" effect with multiple header lines | Optional |
| Header    | hideTop      | Boolean   | Hide the top part of the header when used with `waterfall` | Optional |
| HeaderRow | title        | Any       | Set the layout title | Optional |
| Content   | component    | String || Element || Function   | Specify the custom component to use to render the element | Optional. Default 'div' |

### Grid

```css_demo
.demo-grid-ruler .mdl-cell,
.demo-grid-1 .mdl-cell,
.demo-grid-2 .mdl-cell,
.demo-grid-3 .mdl-cell {
  box-sizing: border-box;
  background-color: #BDBDBD;
  height: 100px;
  padding-left: 8px;
  padding-top: 4px;
  color: white;
}
.demo-grid-ruler.demo-grid-ruler .mdl-cell {
  height: 50px;
}
```
```jsx
<div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
    </Grid>
    <Grid className="demo-grid-2">
        <Cell col={6}>6</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={2}>2</Cell>
    </Grid>
    <Grid className="demo-grid-3">
        <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
        <Cell col={2} phone={4}>2 (4 phone)</Cell>
    </Grid>
</div>
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Grid      | component    | String || Element || Function   | Specify the custom component to use to render the grid | Optional. Default 'div' |
| Grid      | noSpacing    | Boolean    | Removes the margins between the cells. | Optional |
| Grid      | shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |
| Cell      | align        | String[top, middle, bottom, stretch]    | Set the cell alignment | Optional |
| Cell      | col          | Number[1..12]    | Set the column size | Required |
| Cell      | component    | String || Element || Function   | Specify the custom component to use to render the cell | Optional. Default 'div' |
| Cell      | hideDesktop  | Boolean    | Hide the cell in desktop mode | Optional |
| Cell      | hidePhone    | Boolean    | Hide the cell in phone mode | Optional |
| Cell      | hideTablet   | Boolean    | Hide the cell in tablet mode | Optional |
| Cell      | phone        | Number[1..12]    | Set the column size in phone mode | Optional |
| Cell      | tablet       | Number[1..12]    | Set the column size in tablet mode | Optional |
| Cell      | shadow       | Number    | Defines the shadow depth | Optional, Default 0. Must be between 0 and 6 |


### Tabs

```css_demo
.demo-tabs {
    width: 70%;
    margin: auto;
}
.demo-tabs .content {
    height: 100px;
}
```
```jsx_demo_class
// Simple header with scrollable tabs
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    
        );
    }
}
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Tabs      | activeTab    | Number    | Set the active tab  | Optional, default 0 |
| Tabs      | onChange     | Function  | Set the change callback | Optional |
| Tabs      | ripple       | Boolean   | Applies ripples effect on tabs | Optional |
| Tabs      | tabBarProps  | Object    | Pass Props to the TabBar Element | Optional |

### Footer

```jsx
<Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
```

```jsx
<Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
```

#### Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Footer    | size         | String (mini, mega)    | Set the size of the footer  | Optional, default "mega" |
| FooterSection | logo         | String    | Set the "logo" name  | Optional, used only in the mini footer |
| FooterSection | type         | String (top, middle, bottom, left, right)    | Set the section type  | Optional, default left |
| FooterDropDownSection | title         | String    | Set the "logo" name  | Required |
