import { Link } from "react-router-dom";

const Breadcrumbs = ({ hideOnPaths, currentPath }) => {
  if (hideOnPaths.includes(currentPath)) {
    return null;
  }

  let currentLink = "";

  const crumbs = currentPath
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
