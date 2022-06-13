import React from 'react'

function AddTag(props) {
    const {changeHandle, keyDownHandle} = props;
  return (
    <input className='add-tag' placeholder='Add a tag' onKeyDown={keyDownHandle} onChange={changeHandle} type = "text" name = "addTag" />
  )
}

export default AddTag