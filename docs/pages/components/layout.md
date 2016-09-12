---
title: Layout
---

- [Navigation Layout](#navigation-layout)
- [Footer](#footer)

## Demo

### Navigation Layout

```jsx_demo
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

```jsx_demo
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

```jsx_demo
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

```jsx_demo
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

```jsx_demo
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

```jsx_demo
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

```jsx_demo
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
                        <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
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

```jsx_demo
{/* Simple header with fixed tabs. */}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedTabs>
        <Header>
            <HeaderRow title="Title" />
            <HeaderTabs ripple activeTab={1} onChange={(tabId) => {}}>
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
| Header    | hideSpacer   | Boolean   | Removes the spacer from the header | Optional |
| HeaderRow | title        | Any       | Set the layout title | Optional |
| HeaderRow | hideSpacer   | Boolean   | Removes the spacer from the header | Optional |
| Content   | component    | String, Element, Function   | Specify the custom component to use to render the element | Optional. Default 'div' |

### Footer

```jsx_demo
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

```jsx_demo
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
