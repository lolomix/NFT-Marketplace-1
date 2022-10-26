import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style.css";
import Button from "../../../../component/atoms/Buttons";
import { data } from "./Data";

export default function ListHeader() {
  const [index, setIndex] = useState(8);
  const [firstIndex, setFirstIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickRight = () => {
    setIndex(index + 1);
    setFirstIndex(firstIndex + 1);
  };

  useEffect(() => {
    if (index >= 16) {
      setIsDisabled(true);
    } else if (firstIndex <= 0) {
      setFirstIndex(false);
    }
  });

  const onClickLeft = () => {
    setIndex(index - 1);
    setFirstIndex(firstIndex - 1);
  };

  return (
    <div class="container d-flex justify-content-center flex-warp ">
      <div class="list-content">
        <div>
          <Button className="mx-4" onClick={onClickLeft} disabled={!isDisabled}>
            <IoIosArrowDropleft size={30} />
          </Button>
          {data.slice(firstIndex, index).map((e) => (
            <Link to="/Explore">
              <img src={e.image} alt="img"></img>
            </Link>
          ))}
          <button onClick={onClickRight} className="mx-4" disabled={isDisabled}>
            <IoIosArrowDropright size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
