import React from 'react'
import {useState} from 'react'
function Deneme() {

    const [arr, setArr]= useState([
        {
          id:1,
          tag:"yeni"
        },
        {
          id:2,
          tag:"eski"
        },
        {
          id:3,
          tag:"sıcak"
        }
    
      ]
)
      
    let item ={id:21, tag:["Yeni21"]}
    arr.push(item);
    arr.push(item);
    arr.push(item);
    arr.push(item);
    arr.push(item);
    console.log("yok")
         
     
     console.log(arr)



  return (
    <div>Deneme</div>
  )
}

export default Deneme