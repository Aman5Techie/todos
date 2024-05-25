import { useEffect, useState } from "react";
import Todos from "./todos";
import axios from "axios";
import { getTodos } from "../../route";
import { useSelector } from "react-redux";

const Todocontainer = () => {
  // const [todos, settodos] = useState(null);
  const [todos, settodos] = useState([]);
  const changetodo = useSelector((state) => state.todostate);

  useEffect(() => {
    const getTodos_ = async () => {
      const { data } = await axios.get(getTodos);
      settodos(data.todos);
    };
    getTodos_();
  }, [changetodo]);

  return (
    <>
      {todos.length == 0 ? (
        <>
          <div className="flex justify-center items-center text-4xl">PLEASE ADD SOME TODOS</div>
        </>
      ) : (
        <div className="items-center  pt-2">
          {todos.map((obj, index) => {
            return <Todos todo={obj} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

Todocontainer.propTypes = {};

export default Todocontainer;
