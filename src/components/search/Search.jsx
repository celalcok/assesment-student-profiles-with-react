import React from 'react'
import "./search.css"
function Search(props) {
    const {searchName, onChange, placeHolder} = props;
  return (
        <input className='search' type="text" placeholder={placeHolder} name="search" id="search" value={searchName} onChange={onChange} />
  )
}

export default Search
