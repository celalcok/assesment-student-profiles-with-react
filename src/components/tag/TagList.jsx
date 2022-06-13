import React from "react";
import Tag from "./Tag";
import "./tag.css"
function TagList({id,tagList}) {

  return (
    <div className="tag-list">
      {tagList
        && tagList
            .filter((tag) => tag.studentId === Number(id))
            .map((tag,index) => <Tag 
                            key={index}
                            tag={tag}  
                          />)
        }
    </div>
  );
}

export default TagList;
