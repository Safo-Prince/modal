import React, { useState } from "react";
import { X } from "phosphor-react";

function Modal() {
  const [showModal, closeModal] = useState(true);

  return (
    <div className="h-screen w-full">
      <button
        onClick={() => closeModal(false)}
        className=" h-16 w-36 bg-red-500 rounded mt-4  text-white text-lg"
      >
        Delete
      </button>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
          showModal ? "hidden" : " "
        } `}
      >
        <div className="w-1/3 flex  bg-white rounded p-4 flex flex-col ">
          <div className="bg-white flex  justify-between w-full font-bold ">
            <h1> Confirm Delete? </h1>
            <X onClick={() => closeModal(true)} className=" cursor-pointer " />
          </div>
          <p className="block mt-20 text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequuntur magni reiciendis, eos totam beatae eveniet temporibus
            molestias quas facere, laborum cum necessitatibus. Vitae labore
            quisquam repellendus, nemo illum porro.
          </p>
          <div className="flex justify-end  mt-20 text-lg">
            <button className="p-2 mr-2 hover:bg-red-300  rounded">
              Cancel
            </button>
            <button className=" bg-red-600 hover:bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
