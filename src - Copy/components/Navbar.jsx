import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <Link className="navbar-brand" to="/">Wall-Notes</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ul-list">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="ul-list">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/form">Create</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Notes</Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link></li>
                    <Button value={"Login"} path={"Login.com"} class={"btn btn-outline-primary"} />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;