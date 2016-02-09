# Dialogs

This component uses [dialog element](https://www.w3.org/TR/2013/CR-html5-20130806/interactive-elements.html#the-dialog-element), which is only supported by Chrome and Opera currently. For other browsers, you need to include a [polyfill](https://github.com/GoogleChrome/dialog-polyfill) in your code.

## Demo

### Simple Dialog

```jsx_demo_class
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
```

### Dialog with Full Width Actions

```jsx_demo_class
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Show Modal</Button>
        <Dialog open={this.state.openDialog}>
          <DialogTitle>Allow this site to collect usage data to improve your experience?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions fullWidth>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
```

## Configuration

| Element   | Prop         | Type      | Effect       | Remarks      |
|:----------|:-------------|:----------|:-------------|:-------------|
| Dialog    | open         | Boolean   | Set the open state of the dialog  | Optional |
| DialogTitle | component  | String, Element, Function | Specify the custom component to use to render the element | Optional. Default 'h4' |
| DialogActions | fullWidth | Boolean  | Apply the full-width effect to all children of dialog actions  | Optional |
