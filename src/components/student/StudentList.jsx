import React from "react";
import Student from "./Student";
import axios from "axios";
import { useEffect, useState } from "react";
import {readFromStorage, writeToStorage } from "../../utils/functions"



function StudentList({ searchName, searchTag }) {
  const [studentList, setStudentList] = useState(null);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    if(!readFromStorage('list')){
      writeToStorage('list',tagList);
    }
    getData();
  }, []);
  const getData = () => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((res) => {
        setTimeout(() => {
          setStudentList(res.data.students);
          setTagList(readFromStorage("list"));
        }, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (studentList === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {searchName !== null &&
        studentList
          .filter(
            (student) =>
              (student.firstName
                .toLowerCase()
                .includes(searchName.toLowerCase()) ||
              student.lastName.toLowerCase().includes(searchName.toLowerCase()))
          )
          .map((student) => (
            <Student
                student={student}
                key={student.id}
                tagList={tagList}
                setTagList={setTagList}
            
            />
          ))}
    </div>
  );
}

export default StudentList;
