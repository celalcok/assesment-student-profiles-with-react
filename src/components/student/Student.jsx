import React, {useEffect, useState} from 'react'
import AddTag from '../tag/AddTag';
import Button from '../button/Button';
import GradeList from '../grades/GradeList';
import TagList from '../tag/TagList';
import "./student.css"
import {readFromStorage, writeToStorage} from '../../utils/functions'

function Student(props) {
    
  
    const {student, tagList, setTagList} = props
    const [stateOfButton, setStateOfButton] = useState(true);
    const [tag,setTag] = useState("");
    const [add,setAdd] = useState(false);
    
    let average = student.grades.reduce((acc, val) => acc+Number(val),0)/student.grades.length;

    const clickHandle=()=> {
      setStateOfButton(!stateOfButton);
    }
    const addTag = () => {

      let item ={studentId:Number(student.id), tag:[tag]}
         tagList.push(item)
         writeToStorage("list",tagList);
      console.log(tagList)
    }


  
    const changeHandle = (e)=> {
      console.log(tag.length);
      if(tag.length>3) {
        setAdd(true);
      }else {
        setAdd(false);
      }
      setTag(e.target.value);
    }
    const keyDownHandle =(e) => {
      if(e.keyCode === 13){
        if(add===true){
          addTag();
          setAdd(false);
          e.target.value =null;
        }
      }
  
    }
    useEffect(()=>{
    },[add])

  return (
    <div className="student">
        <img src={student.pic} alt="" />
        <div className="info">
            <h1><span>{student.firstName} {student.lastName}</span> <Button stateOfButton={stateOfButton} clickHandle={clickHandle} /></h1>
            <p>{student.email}-{student.id}</p>
            <p>{student.company}</p>
            <p>{student.skill}</p>
            <p>{average}%</p>
            <TagList 
              tagList={tagList}
              id={student.id}
            />
            <AddTag  
              changeHandle={changeHandle}
              keyDownHandle = {keyDownHandle}
              />
           <GradeList 
              grades={student.grades}
              stateOfButton = {stateOfButton}
              />
        </div>
    </div>
  )
}

export default Student