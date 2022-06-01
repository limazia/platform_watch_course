import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "~/assets/images/logo.svg";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-main navbar-light">
          <Link className="navbar-brand" to="/">
            <Logo alt className="img-fluid ml-3" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
