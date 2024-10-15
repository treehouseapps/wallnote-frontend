import { Link } from "react-router-dom";
import Button from "./Button";
const Templete = (props) => {
    const link = "https://wallnote-backend.vercel.app/delete/"
    const page = "https://wallnote-backend.vercel.app/modify/"
    return (
        <div className="border rotate">
            <div className="item">
                <i className="bi bi-pin-angle-fill"></i> <ul>
                    <li> Title:  <i>{props.item.title}</i></li>
                    <li className="note">Note: {props.item.body}</li>
                </ul>
                <div className="align pl-5 pr-5">
                    <Link to={link + props.item._id}><Button value={"Delete"} class={"btn btn-outline-danger btn-sm"} /></Link>
                    <Link to={page + props.item._id}><Button value={"Update"} class={"btn btn-outline-dark btn-sm"} /></Link>
                    <span className="text-muted small pt-1 ps-1">{props.item.createdAt}</span>
                </div>
            </div>
        </div>
    );
}
export default Templete;
