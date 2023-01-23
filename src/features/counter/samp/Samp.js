import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAsync, selectStudents, delStudentsAsync ,UpdStudentsAsync,selectUpdate} from './sampSlice';

export function Samp() {
    const students = useSelector(selectStudents);
    const studentsupdate = useSelector(selectUpdate);
    const dispatch = useDispatch();
    const [desc, setdesc] = useState("")
    const [sName, setsName] = useState("")
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [students.length,studentsupdate])

    return (
        <div>
            Update inputs:
            Desc:<input onChange={(e) => setdesc(e.target.value)} />
            Name:<input onChange={(e) => setsName(e.target.value)} />

            {students.length}
            {students.map((stu, i) => 
                <div key={i}>desc: {stu.description},
                 <button onClick={() => dispatch(delStudentsAsync(stu.id))}>Del</button>
                <button onClick={() => dispatch(UpdStudentsAsync({ desc, sName,id: stu.id }))} >Update</button>
                , {" "} name: {stu.name}</div>)}
        </div>
    );
}