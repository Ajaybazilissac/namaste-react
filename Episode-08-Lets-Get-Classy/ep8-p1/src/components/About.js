import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name={"Ajay Bazil Issac"} />
      <UserClass
        name={"Ajay from class components"}
        location={"Kerala"}
        contact={"ajaybazilissac93@gmail.com"}
      />
    </div>
  );
};

export default About;
