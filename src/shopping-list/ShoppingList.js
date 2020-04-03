import React from "react";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends React.Component {
  static defaultProps = {
    items: []
  };
  render() {
    return (
      <ul>
        {this.items.map((item, i) => (
          <ShoppingItem key={i} item={item} />
        ))}
      </ul>
    );
  }
}
export default ShoppingList;