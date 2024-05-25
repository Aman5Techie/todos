import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import { todosAPI } from "../../route";
import { formatDate } from "./colors";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { changeState } from "../features/todoslice";

const Modal = ({ isOpen, onClose }) => {
  const [task, settask] = useState("");
  const [date, setdate] = useState(null);
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const addtask = async () => {
    const formatdate = formatDate(date);
    const obj = {
      title: task,
      due: formatdate,
    };
    const { data } = await axios.post(todosAPI, obj);
    if (data.status) {
      toast.success("Created Successfully");
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
        <h2 className="text-xl font-semibold mb-4">Add a new task</h2>
        <div>
          <input
            type="text"
            onChange={(e) => {
              settask(e.target.value);
            }}
            className="w-full border-b-2 py-4 border-gray-300 dark:border-gray-600 focus:outline-none"
            placeholder="Name of task"
          />
        </div>
        <div>
          <div className="relative">
            <input
              type="date"
              onChange={(e) => {
                setdate(e.target.value);
              }}
              className="w-full  border-b-2 py-5  border-gray-300 dark:border-gray-600 focus:outline-none"
              placeholder="Due Date"
            />
          </div>
        </div>
        <div className="py-5">
          <button
            onClick={addtask}
            className="rounded-full h-16 w-80 border-2 border-[#F09C2C] bg-[#FFBA5F] py-2"
          >
            <div className=" text-[#7B3F00]">Add a new task</div>
          </button>
        </div>
        {/* <button className="w-full bg-orange-500 text-white rounded-lg p-2 mt-4 hover:bg-orange-600">Add task</button> */}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
};
export default Modal;
