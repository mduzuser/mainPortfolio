//rrd imports
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/resume",
    text: "Resume",
  },
  {
    path: "/projects",
    text: "Projects",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
function NavLinks() {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <li key={link.path}>
            <Link to={link.path} className="text-lg font-mono">
              {link.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
