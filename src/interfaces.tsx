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
  sideBarRef?: React.RefObject<HTMLDivElement>
}

export interface Items {
  id: number;
  value: number;
  count: number;
  price: number;
}
