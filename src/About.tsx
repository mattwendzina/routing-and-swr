import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="me">Me</Link>
      <div>
        <h1>This is the about page</h1>
      </div>
      <Outlet />
    </div>
  );
}
export default About;
