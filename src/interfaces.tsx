export interface ItemsContextType {
  items: Items[];
  handleAddItem: Function;
  handleDeleteItem: Function;
  handleIncCount: Function;
  handleDecCount: Function;
  getTotal: Function;
}

export interface SideBarContextType {
  sideBarActive: boolean;
  toggleSideBar: Function;
}

export interface Items {
  id: number;
  value: number;
  count: number;
  price: number;
}
