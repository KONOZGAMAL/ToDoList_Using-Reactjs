import {React , useState} from 'react'
import '../Input/Input.css'
export default function Item(props) {
const [hide,setHide]=useState(true)
const [hideP,setHideP]=useState(true)
const hideElement =()=>{
  setHide(!hide)
}
const hidePr =()=>{
  setHideP(!hideP)
}
  return (
    <div className={hide?'parent':'hide'}>
      {props.item.length > 0 ?'':<div className='item'>
          <p  onClick={hidePr} className={hideP?'':'P'}>{props.item.text}</p>
          <button className='btn' onClick={hideElement}>Delete</button>
          </div>
      }
    </div>
  )
}
