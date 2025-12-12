import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Task tracker built with React</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
