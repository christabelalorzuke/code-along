import NavItem from "./NavItem";
import ColorArt from "../assets/img/ColorArt.jpg";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "ProductList",
    to: "/product-list",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "TaskManager",
    to: "/task-manager",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-md py-1 bg-yellow-6700  mb-1">
      <nav className="flex font-bold justify-between max-w-7xl mx-auto">
        <img
          src={ColorArt}
          alt=""
          className="px-1 py-2  m-none rounded-full object-fill h-20 w-20 shadow-md"
        />
        <ul className="flex gap-5 mt-6 ml-2 ">
          {links.map((link, index) => (
            <NavItem key={index} label={link.label} to={link.to} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
