import { Items } from "../../interfaces";
import { useItems } from "../../contexts/ItemsContext";

const SideBarItem = ({ item }: { item: Items }) => {
  const itemsContextObject = useItems();
  return (
    <div
      key={item.id}
      className="flex flex-col p-1 bg-blue-100 justify-center items-center"
    >
      {`${item.value}`}
      <div>{`count: ${item.count}`}</div>
      <div className="flex justify-between w-full px-2">
        <div
          className="p-1 bg-red-200 hover:cursor-pointer"
          onClick={(e) => itemsContextObject.handleDecCount(item, e)}
        >
          -
        </div>
        <div
          className="p-1 bg-green-200 hover:cursor-pointer"
          onClick={(e) => itemsContextObject.handleIncCount(item, e)}
        >
          +
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-red-400 p-2 mt-2 hover:cursor-pointer"
        onClick={() => itemsContextObject.handleDeleteItem(item)}
      >
        cancel
      </div>
    </div>
  );
};

export default SideBarItem;
