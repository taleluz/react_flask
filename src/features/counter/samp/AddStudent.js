import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import {addStudentsAsync} from './sampSlice';

const AddStudent = () => {
  const dispatch = useDispatch();
  const [desc, setdesc] = useState("")
  const [sName, setsName] = useState("")
  return (
    <div>AddStudent
Desc:<input onChange={(e)=>setdesc(e.target.value)}/>
Name:<input onChange={(e)=>setsName(e.target.value)}/>
<button onClick={()=>dispatch(addStudentsAsync({desc,sName}))} >Add</button>

    </div>
  )
}

export default AddStudent