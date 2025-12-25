import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar container pt-3 pb-3 d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          Stock Prediction Portal
        </Link>
        <div>
          {isAuthenticated ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                setIsAuthenticated(false);
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Button
                text="Login"
                buttonColor="btn-outline-info"
                url={"/login"}
              />
              &nbsp;
              <Button
                text="Register"
                buttonColor="btn-info"
                url={"/register"}
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
