import ItemsList from "../itemLists/ItemsList";

const itemList = ({ item }) => {
  return (
    <div className="lista">
      <button>{item}</button>
    </div>
  );
};

export default itemList;
