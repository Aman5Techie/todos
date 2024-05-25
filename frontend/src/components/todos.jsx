import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Delete from "../assets/trash-bin.png";
import { colors, statusColors } from "./colors";
import Clickedicon from "./clickedicon";
import UpdateTodo from "./updatetodo";
import { useDispatch } from "react-redux";
import axios from "axios";
import { todosAPI } from "../../route";
import { toast } from "react-toastify";
import { changeState } from "../features/todoslice";

const Todos = ({ todo }) => {
  const [status, setstatus] = useState(todo.status);
  const dispatch = useDispatch();

  useEffect(() => {
    setstatus(todo.status);
  }, [todo]);

  const deleteTodo = async () => {
    await axios.delete(`${todosAPI}/${todo.id}`);
    toast.success("Deleted Successfully");
    dispatch(changeState());
  };

  return (
    <>
      <div className="py-3">
        <div
          className={`${colors[status].background} w-[750px] h-20 rounded-[15px]  border-2`}
        >
          <div className="flex py-5 justify-between">
            <div className="px-3 flex justify-between items-center ">
              <Clickedicon status={status} id={todo.id} />
            </div>
            <div
              className={`${colors[status].text}  w-72 font-medium text-lg flex  justify-between items-center overflow-hidden  px-3`}
            >
              {todo.title}
            </div>
            <div className="flex  justify-center items-center space-y-1 px-1 space-x-5">
              <div className=" flex items-center justify-center w-[100px]">
                <div className="flex  justify-between items-center  ">
                  <div
                    className={`rounded-full h-10 px-3 py-2 text-sm font-semibold item-center ${
                      statusColors[todo.status]
                    }`}
                  >
                    {todo.status}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-sm h-10 rounded-full px-3 py-2 bg-gray-200 font-semibold">
                  {/* <div< */}
                  {todo.due}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-9  space-x-2 px-1">
              <UpdateTodo id={todo.id} />
              <div
                className="w-12 h-12  hover:cursor-pointer"
                onClick={deleteTodo}
              >
                <img
                  src={Delete}
                  className="w-full h-full object-contain"
                  alt="Delete"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Todos.propTypes = {
  todo: PropTypes.object,
};

export default Todos;
