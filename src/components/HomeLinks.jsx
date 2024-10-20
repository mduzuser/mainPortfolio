//rrd
import { Link } from "react-router-dom";

const homeLinks = [
  {
    path: "/resume",
    text: "Resume",
    color: "bg-yellow-400",
  },
  {
    path: "/projects",
    text: "Projects",
    color: "bg-green-400",
  },
  {
    path: "/contact",
    text: "Contact",
    color: "bg-cyan-300",
  },
];

function HomeLinks() {
  return (
    <>
      {homeLinks.map((homeLink) => {
        return (
          <Link to={homeLink.path}>
            <div
              id={homeLink.path}
              className={`h-20 m-auto md:w-40 md:h-40 lg:w-42 lg:h-42 grid place-content-center ${homeLink.color} rounded-full border border-black text-xl font-semibold cursor-pointer my-4 hover:bg-inherit transition-colors`}
            >
              <p className="text-slate-700 font-mono">{homeLink.text}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default HomeLinks;
