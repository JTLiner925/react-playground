import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "foo",
      hello: "Hello, world!",
      list: [1, 2, 3],
      obj: { nested: "object", yes: true }
    };
  }
  render() {
    return <div>{this.state.hello}</div>;
  }
}

export default TheDate;
