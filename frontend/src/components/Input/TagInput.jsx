import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            addNewTag()
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove ))
    }
  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
            >
              #{tags}

              <button onClick={()=>{
                handleRemoveTag(tag)
              }}>
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3 ">
        <input type="text" value={inputValue} className="text-sm bg-transparent border px-3 py-2 rounded outline-none" 
        placeholder="AddTags"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        />
        
      </div>
    </div>
  );
};

export default TagInput;