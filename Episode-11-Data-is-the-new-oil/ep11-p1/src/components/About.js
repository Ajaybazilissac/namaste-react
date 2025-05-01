import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass
          name={"Ajay from class components"}
          location={"Kerala"}
          contact={"ajaybazilissac93@gmail.com"}
        />
      </div>
    );
  }
}

/**
 * Parent Constructor
 * Parent Render
 *
 * Ajay from class componentsChild constructor
 * Child Render
 * Elon Musk from class componentsChild constructor
 * Child Render
 *
 * <DOM manipulation - in single batch>
 *
 * Ajay from class componentsChild Component Did Mount
 * Elon Musk from class componentsChild Component Did Mount
 * Parent Component Did Mount
 */

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       <UserClass
//         name={"Ajay from class components"}
//         location={"Kerala"}
//         contact={"ajaybazilissac93@gmail.com"}
//       />
//     </div>
//   );
// };

export default About;
