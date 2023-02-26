import React, { useState } from 'react'

export default function Todolist() {
    const [activity, setActivity]=useState("")
    const [listData,setlistData]= useState([]);
    function addActivity(){
       /* setlistData([...listData,activity])
        console.log(listData)*/
        setlistData((listData)=>{
            const updatedList =[...listData,activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })

    }

    function removeActivity(i){
            const updatedListData = listData.filter((elem, id)=>{
                return i!=id;
            })
            setlistData(updatedListData);
    }
    function RemoveAll(){
        setlistData([])
    }
  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your list :{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove</button></div>
               
                </p>
                </>
            )
        })}
        {listData.length>=1 && <button onClick={RemoveAll}>Remove All</button>}
        
        
    </div>
    </>
  )
}
