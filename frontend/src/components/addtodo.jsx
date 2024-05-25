import { useState } from "react";
import Modal from "./Modal";

function AddTodo() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-full h-16 w-80 border-2 border-[#F09C2C] bg-[#FFBA5F] "
        >
          <div className=" text-[#7B3F00]">Add a new task</div>
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </>
  );
}

export default AddTodo;
