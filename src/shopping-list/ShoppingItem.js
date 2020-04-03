import React from "react";

class ShoppingItem extends React.Component {
  static defaultProps = {
    items: {}
  };
  render() {
    return (
      <li>
          <h2 style={{
              textDecoration: this.item.checked ? 'line-through' : null,
          }}>
              {this.item.name}
          </h2>
          <button type='button'>check</button>
          <button type='button'>delete</button>
      </li>
    );
  }
}
export default ShoppingItem;