import Button from "../../atoms/Buttons";
import "./style.css";

export default function CardHelp({ title, description }) {
  return (
    <div className="col-sm-4 my-2">
      <div class="content-help w-100 h-100">
        <div className="p-3">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className="btn btn-help text-light align-items-end">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
