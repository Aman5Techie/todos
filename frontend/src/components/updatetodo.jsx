import  { useState } from "react";
import UpdateModal from "./updatemodal";
import PropTypes from "prop-types";
import Edit from "../assets/edit.png";


function UpdateTodo({id}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-10 h-10 hover:cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <img src={Edit} className="w-full h-full object-contain" alt="Edit" />
      </div>
      <UpdateModal id={id} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

UpdateTodo.propTypes = {
  id : PropTypes.any
}

export default UpdateTodo;
