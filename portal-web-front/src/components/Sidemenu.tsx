import { Link } from "react-router-dom";
import { sideMenuStructure } from "../sideMenuStructure";

const Sidemenu = () => {
  return (
    <>
      {sideMenuStructure.map((link) => {
        return (
          <div>
            <h3>{link.section}</h3>
            {link.views.map((view) => {
              return (
                <div>
                  <Link to={view.to}>{view.text}</Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Sidemenu;
