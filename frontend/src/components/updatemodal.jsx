import { useState } from "react";
import { formatDate } from "./colors";
import axios from "axios";
import PropTypes from "prop-types";
import { todosAPI } from "../../route";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeState } from "../features/todoslice";

const UpdateModal = ({ isOpen, onClose, id }) => {
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const clicked = async () => {
    let obj = {};
    title != "" ? (obj = { title }) : null;
    if (date != "") {
      const formateddate = formatDate(date);
      obj = { ...obj, due: formateddate };
    }
    const { data } = await axios.put(`${todosAPI}/${id}`, obj);
    if (data) {
      toast.success("Successfully Updated");
      dispatch(changeState());
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white  shadow-lg p-6 max-w-sm w-full relative rounded-[40px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 h-6 w-6 text-[30px]"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Update TODO</h2>
        <div>
          <input
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="text"
            className="w-full border-b-2 py-4 border-gray-300 dark:border-gray-600 focus:outline-none"
            placeholder="Update Name of task"
          />
        </div>
        <div>
          <div className="relative">
            <input
              onChange={(e) => {
                setdate(e.target.value);
              }}
              type="date"
              className="w-full  border-b-2 py-5  border-gray-300 dark:border-gray-600 focus:outline-none"
              placeholder="Update Due Date"
            />
          </div>
        </div>
        <div className="py-5">
          <button
            onClick={clicked}
            className="rounded-full h-16 w-80 border-2 border-[#F09C2C] bg-[#FFBA5F] py-2"
          >
            <div className=" text-[#7B3F00]">Update Task</div>
          </button>
        </div>
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
  id: PropTypes.any,
};
export default UpdateModal;
