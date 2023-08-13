export interface MenuItem{
  href: string;
  text: string;
}

export interface MenuItemGroup{
  id: string,
  title: string;
  items: MenuItem[];
}

export interface MenuItems {
  itemGroups: MenuItemGroup[];
}
