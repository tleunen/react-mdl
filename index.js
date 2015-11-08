const Card = require('./lib/Card');
const Footer = require('./lib/Footer');
const Layout = require('./lib/Layout');
const Grid = require('./lib/Grid');
const Menu = require('./lib/Menu');
const Tabs = require('./lib/Tabs');

module.exports = {
    mdlUpgrade: require('./lib/utils/mdlUpgrade'),
    MDLComponent: require('./lib/utils/MDLComponent'),
    Badge: require('./lib/Badge'),
    Button: require('./lib/Button'),
    Card: Card.default,
    CardTitle: Card.CardTitle,
    CardActions: Card.CardActions,
    CardText: Card.CardText,
    CardMenu: Card.CardMenu,
    Checkbox: require('./lib/Checkbox'),
    DataTable: require('./lib/DataTable'),
    FABButton: require('./lib/FABButton'),
    Footer: Footer.default,
    FooterSection: Footer.Section,
    FooterDropDownSection: Footer.DropDownSection,
    FooterLinkList: Footer.LinkList,
    Grid: Grid.default,
    Cell: Grid.Cell,
    Icon: require('./lib/Icon'),
    IconButton: require('./lib/IconButton'),
    IconToggle: require('./lib/IconToggle'),
    Layout: Layout.default,
    Header: Layout.Header,
    Drawer: Layout.Drawer,
    HeaderRow: Layout.HeaderRow,
    HeaderTabs: Layout.HeaderTabs,
    Spacer: Layout.Spacer,
    Navigation: Layout.Navigation,
    Content: Layout.Content,
    Menu: Menu.default,
    MenuItem: Menu.MenuItem,
    ProgressBar: require('./lib/ProgressBar'),
    Radio: require('./lib/Radio'),
    RadioGroup: require('./lib/RadioGroup'),
    Slider: require('./lib/Slider'),
    Spinner: require('./lib/Spinner'),
    Switch: require('./lib/Switch'),
    Tab: Tabs.Tab,
    Tabs: Tabs.default,
    Textfield: require('./lib/Textfield'),
    Tooltip: require('./lib/Tooltip')
};
