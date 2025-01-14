import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "dropdown", path: "/" },
    { label: "accordion", path: "/accordion" },
    { label: "button", path: "/button" },
    { label: "modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];
  // label is text to show and path is to

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        key={link.label}
        to={link.path}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
