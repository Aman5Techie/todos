import PropTypes from "prop-types";
import { colors } from "./colors";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateTodo } from "../../route";
import { changeState } from "../features/todoslice";

const setstatus = {
  0: "pending",
  1: "progress",
  2: "completed",
};

const getstatus = {
  pending: 0,
  progress: 1,
  completed: 2,
};

const Clickedicon = ({ status, id, }) => {
  const dispact = useDispatch();

  const clicked = async () => {
    const currentStats = getstatus[status];
    if (currentStats == 2) {
      return;
    }
    const state = setstatus[currentStats + 1];
    const { data } = await axios.put(`${updateTodo}/${id}`, { status: state });
    if (data) {
      dispact(changeState())
    }
  };

  return (
    <div className="w-10 h-9 hover:cursor-pointer" onClick={clicked}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        viewBox="0 0 32 32"
        fill={colors[status].icon}
      >
        <path d="M14.5 27.065a12.465 12.465 0 0 1-8.839-3.655c-4.874-4.874-4.874-12.804 0-17.678 2.361-2.361 5.5-3.662 8.839-3.662s6.478 1.3 8.839 3.662c4.874 4.874 4.874 12.804 0 17.678a12.465 12.465 0 0 1-8.839 3.655zm0-22.995a10.43 10.43 0 0 0-7.425 3.076c-4.093 4.094-4.093 10.755 0 14.85 4.094 4.093 10.755 4.093 14.85 0 4.093-4.094 4.093-10.755 0-14.85A10.434 10.434 0 0 0 14.5 4.07zm8.132 18.633h.01-.01z"></path>
        <path d="M13 19.369a.997.997 0 0 1-.707-.293L8.05 14.833a.999.999 0 1 1 1.414-1.414L13 16.955l6.538-6.538a.999.999 0 1 1 1.414 1.414l-7.245 7.245a.997.997 0 0 1-.707.293z"></path>
      </svg>
    </div>
  );
};

Clickedicon.propTypes = {
    status : PropTypes.any,
    id : PropTypes.any
};

export default Clickedicon;
