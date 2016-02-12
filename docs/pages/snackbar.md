# Snackbar

## Demo

```jsx_demo_class
{/* Example of a snackbar */}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({
      isSnackbarActive: true,
      btnBgColor: '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16)
    });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }
  render() {
    const { btnBgColor, isSnackbarActive } = this.state;
    return (
      <div>
        <Button raised style={{backgroundColor: btnBgColor}} onClick={this.handleShowSnackbar}>Show a Snackbar</Button>
        <Snackbar
          active={isSnackbarActive}
          onClick={this.handleClickActionSnackbar}
          onTimeout={this.handleTimeoutSnackbar}
          action="Undo">Button color changed.</Snackbar>
      </div>
    );
  }
}
```

```jsx_demo_class
{/* Example of a toast (snackbar without action button) */}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({ isSnackbarActive: true });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  render() {
    const { isSnackbarActive } = this.state;
    return (
      <div>
        <Button raised onClick={this.handleShowSnackbar}>Show a Toast</Button>
        <Snackbar
          active={isSnackbarActive}
          onTimeout={this.handleTimeoutSnackbar}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius luctus quam. Fusce quis blandit libero. Donec accumsan nunc lectus, vel blandit diam bibendum ac. Integer faucibus, lorem et convallis fermentum, diam dolor imperdiet mi, nec iaculis risus mauris id elit. Vivamus vel eros dapibus, molestie ante ut, vestibulum sem.
          </Snackbar>
      </div>
    );
  }
}
```

## Configuration

| Prop         | Type      | Effect       | Remarks      |
|:-------------|:----------|:-------------|:-------------|
| action       | String    | Specify the label of the action button  | Optional |
| active       | Boolean   | Set the snackbar visible | Required. Should be false when mounting the component |
| onActionClick| Function  | Function to call when the action button is clicked  | Optional |
| onTimeout    | Function  | Function to call when the snackbar is getting hidden  | Required |
| timeout      | Number    | Defines the time (in ms) to show the snackbar | Optional. Default 2750 |
