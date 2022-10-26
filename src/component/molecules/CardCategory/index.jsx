import { Link } from "react-router-dom";
import "./style.css";

export default function CardCategory({ title, img }) {
  return (
    <>
      <div className="col-sm my-3 category ">
        <Link to="/Explore" style={{ textDecoration: "none" }}>
          <div className="position-relative">
            <div className="tit position-absolute top-0 end-0 p-3">{title}</div>
            <img src={img} className="w-100" />
          </div>
        </Link>
      </div>
    </>
  );
}
