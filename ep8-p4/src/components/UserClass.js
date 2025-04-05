import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h2>Name:{name} </h2>
        <h3>Location: {location}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
