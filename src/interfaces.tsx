export interface DataContextType {
  items: Items[];
  handleToggleBookmark: Function;
  handleIncCount: Function;
  handleDecCount: Function;
  getItemIndex: Function;
}

export interface CartContextType {
  items: Items[];
  getItem: Function;
  handleAddItem: Function;
  handleDeleteItem: Function;
  handleIncCount: Function;
  handleDecCount: Function;
  handleToggleBookmark: Function;
  getTotal: Function;
}

export interface SideBarContextType {
  sideBarActive: boolean;
  toggleSideBar: Function;
  sideBarRef?: React.RefObject<HTMLDivElement>;
}

export interface SnackbarContextType {
  showSnackbar: Function;
}
export interface BackdropContextType {
  showBackdrop: Function;
  hideBackdrop: Function;
  modalRef?: React.RefObject<HTMLDivElement>;
}
export interface Items {
  id: number;
  value: number;
  count: number;
  price: number;
  bookmark: boolean;
}
