import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = ({ onClose, noteData, type  }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null)


  const editNote = async () => {

  }

  const addNewNote = async () => {

  }

  const handleAddNote = ()=>{
    if(!title){
      setError("please enter the title")
      return
    }

    if(!content){
      setError("please enter the Content")
      return
    }

    setError("")

    if(type === 'edit'){
      editNote()
    }else{
      addNewNote()
    }
  }


  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center 
      absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label text-red-400 uppercase">Title</label>

        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="wake up at 6 am"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-red-400 uppercase">Content</label>

        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content..."
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        >
          {" "}
        </textarea>
      </div>
      <div className=" ">
        <label className="input-label text-red-400 uppercase">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
