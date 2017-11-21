
declare module "react-mdl" {
  import * as React from 'react';
  type Component = string | Function | React.ReactElement<any>;
  type Children = string | Element;


  //---------- Badge
  export interface BadgeProps extends React.HTMLAttributes {
    children?: Children;
    text?: any;
    overlap?: any;
    noBackground?: any;
  }
  export class Badge extends React.Component<BadgeProps, {}> { }


  //---------- Button
  export interface ButtonProps extends React.HTMLAttributes {
    accent?: any;
    className?: any;
    colored?: any;
    component?: Component;
    href?: any;
    primary?: any;
    raised?: any;
    ripple?: any;
  }
  export class Button extends React.Component<ButtonProps, {}> { }


  //---------- Card
  export interface CardProps extends React.HTMLAttributes {
    className?: any;
    shadow?: any;
  }
  export class Card extends React.Component<CardProps, {}> { }


  //---------- CardActions
  export interface CardActionsProps extends React.HTMLAttributes {
    border?: any;
    className?: any;
  }
  export class CardActions extends React.Component<CardActionsProps, {}> { }


  //---------- CardMedia
  export interface CardMediaProps extends React.HTMLAttributes {
    className?: any;
  }
  export class CardMedia extends React.Component<CardMediaProps, {}> { }


  //---------- CardMenu
  export interface CardMenuProps extends React.HTMLAttributes {
    className?: any;
  }
  export class CardMenu extends React.Component<CardMenuProps, {}> { }


  //---------- CardText
  export interface CardTextProps extends React.HTMLAttributes {
    className?: any;
  }
  export class CardText extends React.Component<CardTextProps, {}> { }


  //---------- CardTitle
  export interface CardTitleProps extends React.HTMLAttributes {
    className?: any;
    expand?: any;
  }
  export class CardTitle extends React.Component<CardTitleProps, {}> { }


  //---------- Cell
  export interface CellProps extends React.HTMLAttributes {
    align?: any;
    className?: any;
    col?: any;
    component?: Component;
    phone?: any;
    tablet?: any;
    hideDesktop?: any;
    hidePhone?: any;
    hideTablet?: any;
    shadow?: any;
  }
  export class Cell extends React.Component<CellProps, {}> { }


  //---------- Checkbox
  export interface CheckboxProps extends React.HTMLAttributes {
    checked?: any;
    className?: any;
    disabled?: any;
    label?: any;
    onChange?: any;
    ripple?: any;
  }
  export class Checkbox extends React.Component<CheckboxProps, {}> { }


  //---------- Content
  export interface ContentProps extends React.HTMLAttributes {
    className?: any;
    component?: Component;
  }
  export class Content extends React.Component<ContentProps, {}> { }


  //---------- Dialog
  export interface DialogProps extends React.HTMLAttributes {
    className?: any;
    onCancel?: any;
    open?: any;
  }
  export class Dialog extends React.Component<DialogProps, {}> { }


  //---------- DialogActions
  export interface DialogActionsProps extends React.HTMLAttributes {
    className?: any;
    fullWidth?: any;
  }
  export class DialogActions extends React.Component<DialogActionsProps, {}> { }


  //---------- DialogContent
  export interface DialogContentProps extends React.HTMLAttributes {
    className?: any;
  }
  export class DialogContent extends React.Component<DialogContentProps, {}> { }


  //---------- DialogTitle
  export interface DialogTitleProps extends React.HTMLAttributes {
    className?: any;
    component?: Component;
  }
  export class DialogTitle extends React.Component<DialogTitleProps, {}> { }


  //---------- Drawer
  export interface DrawerProps extends React.HTMLAttributes {
    className?: any;
    title?: any;
  }
  export class Drawer extends React.Component<DrawerProps, {}> { }


  //---------- FABButton
  export interface FABButtonProps extends React.HTMLAttributes {
    className?: any;
    mini?: any;
  }
  export class FABButton extends React.Component<FABButtonProps, {}> { }


  //---------- Footer
  export interface FooterProps extends React.HTMLAttributes {
    className?: any;
    size?: any;
  }
  export class Footer extends React.Component<FooterProps, {}> { }


  //---------- FooterDropDownSection
  export interface FooterDropDownSectionProps extends React.HTMLAttributes {
    className?: any;
    size?: any;
    title?: any;
  }
  export class FooterDropDownSection extends React.Component<FooterDropDownSectionProps, {}> { }


  //---------- FooterLinkList
  export interface FooterLinkListProps extends React.HTMLAttributes {
    className?: any;
    size?: any;
  }
  export class FooterLinkList extends React.Component<FooterLinkListProps, {}> { }


  //---------- FooterSection
  export interface FooterSectionProps extends React.HTMLAttributes {
    className?: any;
    logo?: any;
    size?: any;
    type?: any;
  }
  export class FooterSection extends React.Component<FooterSectionProps, {}> { }


  //---------- Grid
  export interface GridProps extends React.HTMLAttributes {
    className?: any;
    component?: Component;
    noSpacing?: any;
    shadow?: any;
  }
  export class Grid extends React.Component<GridProps, {}> { }


  //---------- Header
  export interface HeaderProps extends React.HTMLAttributes {
    className?: any;
    scroll?: any;
    seamed?: any;
    title?: any;
    transparent?: any;
    waterfall?: any;
    hideTop?: any;
  }
  export class Header extends React.Component<HeaderProps, {}> { }


  //---------- HeaderRow
  export interface HeaderRowProps extends React.HTMLAttributes {
    className?: any;
    title?: any;
  }
  export class HeaderRow extends React.Component<HeaderRowProps, {}> { }


  //---------- HeaderTabs
  export interface HeaderTabsProps extends React.HTMLAttributes {
    activeTab?: any;
    className?: any;
    onChange?: any;
    ripple?: any;
  }
  export class HeaderTabs extends React.Component<HeaderTabsProps, {}> { }


  //---------- Icon
  export interface IconProps extends React.HTMLAttributes {
    className?: any;
    name?: any;
  }
  export class Icon extends React.Component<IconProps, {}> { }


  //---------- IconButton
  export interface IconButtonProps extends React.HTMLAttributes {
    className?: any;
    name?: any;
  }
  export class IconButton extends React.Component<IconButtonProps, {}> { }


  //---------- IconToggle
  export interface IconToggleProps extends React.HTMLAttributes {
    checked?: any;
    className?: any;
    disabled?: any;
    name?: any;
    onChange?: any;
    ripple?: any;
  }
  export class IconToggle extends React.Component<IconToggleProps, {}> { }


  //---------- Layout
  export interface LayoutProps extends React.HTMLAttributes {
    className?: any;
    fixedDrawer?: any;
    fixedHeader?: any;
    fixedTabs?: any;
  }
  export class Layout extends React.Component<LayoutProps, {}> { }


  //---------- List
  export interface ListProps extends React.HTMLAttributes {
    className?: any;
  }
  export class List extends React.Component<ListProps, {}> { }


  //---------- ListItem
  export interface ListItemProps extends React.HTMLAttributes {
    className?: any;
    twoLine?: any;
    threeLine?: any;
  }
  export class ListItem extends React.Component<ListItemProps, {}> { }


  //---------- ListItemAction
  export interface ListItemActionProps extends React.HTMLAttributes {
    children?: Children;
    className?: any;
    info?: any;
  }
  export class ListItemAction extends React.Component<ListItemActionProps, {}> { }


  //---------- ListItemContent
  export interface ListItemContentProps extends React.HTMLAttributes {
    avatar?: any;
    className?: any;
    icon?: any;
    subtitle?: any;
    useBodyClass?: any;
  }
  export class ListItemContent extends React.Component<ListItemContentProps, {}> { }


  //---------- Menu
  export interface MenuProps extends React.HTMLAttributes {
    align?: any;
    className?: any;
    ripple?: any;
    target?: any;
    valign?: any;
  }
  export class Menu extends React.Component<MenuProps, {}> { }


  //---------- MenuItem
  export interface MenuItemProps extends React.HTMLAttributes {
    className?: any;
  }
  export class MenuItem extends React.Component<MenuItemProps, {}> { }


  //---------- Navigation
  export interface NavigationProps extends React.HTMLAttributes {
    className?: any;
  }
  export class Navigation extends React.Component<NavigationProps, {}> { }


  //---------- ProgressBar
  export interface ProgressBarProps extends React.HTMLAttributes {
    buffer?: any;
    className?: any;
    indeterminate?: any;
    progress?: any;
  }
  export class ProgressBar extends React.Component<ProgressBarProps, {}> { }


  //---------- Radio
  export interface RadioProps extends React.HTMLAttributes {
    checked?: any;
    className?: any;
    disabled?: any;
    name?: any;
    onChange?: any;
    ripple?: any;
  }
  export class Radio extends React.Component<RadioProps, {}> { }


  //---------- RadioGroup
  export interface RadioGroupProps extends React.HTMLAttributes {
    childContainer?: any;
    children?: Children;
    container?: any;
    name?: any;
    onChange?: any;
  }
  export class RadioGroup extends React.Component<RadioGroupProps, {}> { }


  //---------- Slider
  export interface SliderProps extends React.HTMLAttributes {
    className?: any;
    max?: any;
    min?: any;
    onChange?: any;
    value?: any;
  }
  export class Slider extends React.Component<SliderProps, {}> { }


  //---------- Snackbar
  export interface SnackbarProps extends React.HTMLAttributes {
    action?: any;
    active?: any;
    className?: any;
    onActionClick?: any;
    onTimeout?: any;
    timeout?: any;
  }
  export class Snackbar extends React.Component<SnackbarProps, {}> { }


  //---------- Spacer
  export interface SpacerProps extends React.HTMLAttributes {
    className?: any;
  }
  export class Spacer extends React.Component<SpacerProps, {}> { }


  //---------- Spinner
  export interface SpinnerProps extends React.HTMLAttributes {
    className?: any;
    singleColor?: any;
  }
  export class Spinner extends React.Component<SpinnerProps, {}> { }


  //---------- Switch
  export interface SwitchProps extends React.HTMLAttributes {
    checked?: any;
    className?: any;
    disabled?: any;
    onChange?: any;
    ripple?: any;
  }
  export class Switch extends React.Component<SwitchProps, {}> { }


  //---------- Tab
  export interface TabProps extends React.HTMLAttributes {
    active?: any;
    className?: any;
    component?: Component;
    cssPrefix?: any;
    onTabClick?: any;
    style?: any;
    tabId?: any;
  }
  export class Tab extends React.Component<TabProps, {}> { }


  //---------- TabBar
  export interface TabBarProps extends React.HTMLAttributes {
    activeTab?: any;
    className?: any;
    cssPrefix?: any;
    onChange?: any;
  }
  export class TabBar extends React.Component<TabBarProps, {}> { }


  //---------- Table
  export interface TableProps extends React.DOMAttributes {
    rows: Array<{}>;
    sortable?: any;
  }
  export class Table extends React.Component<TableProps, {}> { }


  //---------- TableHeader
  export interface TableHeaderProps extends React.HTMLAttributes {
    cellFormatter?: any;
    className?: any;
    name?: any;
    numeric?: any;
    onClick?: any;
    nosort?: any;
    sortFn?: any;
    tooltip?: any;
  }
  export class TableHeader extends React.Component<TableHeaderProps, {}> { }


  //---------- Tabs
  export interface TabsProps extends React.HTMLAttributes {
    activeTab?: any;
    children?: Children;
    className?: any;
    onChange?: any;
    ripple?: any;
    tabBarProps?: any;
  }
  export class Tabs extends React.Component<TabsProps, {}> { }


  //---------- Textfield
  export interface TextfieldProps extends React.HTMLAttributes {
    className?: any;
    disabled?: any;
    error?: any;
    expandable?: any;
    expandableIcon?: any;
    floatingLabel?: any;
    id?: any;
    inputClassName?: any;
    label?: any;
    maxRows?: any;
    onChange?: any;
    pattern?: any;
    required?: any;
    rows?: any;
    style?: any;
    value?: any;
  }
  export class Textfield extends React.Component<TextfieldProps, {}> { }


  //---------- Tooltip
  export interface TooltipProps extends React.HTMLAttributes {
    children?: Children;
    label?: any;
    large?: any;
    position?: any;
  }
  export class Tooltip extends React.Component<TooltipProps, {}> { }

}
