import "./App.css";
import AddTodo from "./components/addtodo";
import Todocontainer from "./components/todocontainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg-gray-200 h-screen just">
        <div className="py-10">
          <div className="flex justify-center ">
            <div className="bg-white h-[580px] w-[800px] rounded-[35px]">
              <div className="flex justify-center ">
                <h2 className="text-[30px]">TODOS</h2>
              </div>
              <div className=" flex justify-center overflow-scroll no-scrollbar h-[430px] ">
                <Todocontainer />
              </div>
              <div className="py-2">
                <AddTodo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
