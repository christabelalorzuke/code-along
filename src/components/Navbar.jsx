import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "ProductList",
    to: "/productList",
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
    <div className="shadow-md py-4 bg-yellow-400 text-white">
      <nav className="flex font-bold justify-between max-w-7xl mx-auto">
              <ul className="flex gap-5 ">
          {links.map((link, index) => (
            <NavItem key={index} label={link.label} to={link.to} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
