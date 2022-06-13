import React from 'react'

function Tag(props) {
    const {tag} = props;
  return (
      <>
        {
            <div  className='tag'>{tag.tag}</div>
        }
      </>
        
  )
}

export default Tag