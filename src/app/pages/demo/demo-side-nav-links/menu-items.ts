export interface MenuItems {
  items: MenuItemGroup[]
}

export interface MenuItem{
  href: string;
  text: string;
}

export interface MenuItemGroup{
  dropdown: MenuItem[]
}
