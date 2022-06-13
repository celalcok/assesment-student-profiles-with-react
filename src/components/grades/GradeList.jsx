import React from 'react'

function GradeList(props) {
    const {grades,stateOfButton} = props;
    let number=1;
  return (
    <div className={"table-grades " + (!stateOfButton && "active")}>
    {
    
      grades.map(grade =>(
        <div className="tr">
          <div className="td">Test {number++}</div>
          <div className="td">{grade}</div>
        </div>
      ))
      
    }
  </div>
  )
}

export default GradeList