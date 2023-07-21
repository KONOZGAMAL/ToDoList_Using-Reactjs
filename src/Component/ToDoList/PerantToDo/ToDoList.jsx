import React, { useState } from 'react'
import Input from '../Input/Input'
import Item from '../Item/Item'

export default function ToDoList() {
  const [items , setItems] = useState([])
  const addData = (Element)=>{
    setItems((pram)=>{
      const arr = [...pram]
      arr.unshift({text:Element , id:Math.random().toString()})
      return arr
    })
  }
  return (
    <div>
        <Input addData={addData}/>
        {items.length > 0 ?
        items.map((item)=>(<Item item={item}/>
        )):<p className='show'>No goals found. Maybe add one?</p>
        }
    </div>
  )
}
