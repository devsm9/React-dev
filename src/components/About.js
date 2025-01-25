import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      <p>About component </p>
      {/* <User name={"Shirish function"} /> */}
      <UserClass name={"Shirish class"}/>
    </>
  );
};

export default About;