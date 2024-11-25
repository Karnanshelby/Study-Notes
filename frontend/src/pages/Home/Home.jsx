import React, { useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <div className="flex items-center justify-center "
      style={{
      backgroundImage: "url('/src/images/SignupPage.webp')",
      backgroundSize: "cover",
      backgroundAttachment:"fixed",
      backgroundPosition: "center",
      height:"100vh",
      margin: 0,
      }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />

          <NoteCard
            title={"Wake up at 6 p.m"}
            date={"5th june 2024"}
            content={"you know nothing, jon snow"}
            tags={"#jonsnow"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary
    hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md
    mx-auto mt*4 p-5 overflow-scroll"
      >
        <AddEditNotes
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }
          noteData={openAddEditModal.data}
          type={openAddEditModal.type}
          
        />
      </Modal>
    </>
  );
};

export default Home;
