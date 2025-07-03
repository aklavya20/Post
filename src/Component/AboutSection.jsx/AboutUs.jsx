import { Link, Outlet } from "react-router";

const AboutUs = () => {
  return (
    <div>
      <Link to="path1">
        <li>About History</li>
      </Link>
      <Link to="path2">
        <li>About Legacy</li>
      </Link>
      <Outlet />
    </div>
  );
};

export default AboutUs;
