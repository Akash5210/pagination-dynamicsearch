import React, { useEffect, useState } from 'react'

export default function Person({tableData, firstPostIndex, lastPostIndex, setCurrentPage}) {
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(()=>{                       //whenever there is some input value then 'currentPage' will be changed to 1
    setCurrentPage(1);
  }, [searchInput])

  return (
    <div className=''>
        <div className='search-box my-2'>
            <input type='text' className='form-control' onChange={(e)=> setSearchInput(e.target.value)}
            placeholder='searching...'/>
        </div>
        <div className='tableData'>
        <table className='table table-striped table-hover table-responsive'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {tableData.length>0 && tableData.filter((item)=> {
                    if(searchInput === "")
                        return item;
                    else if(item.first_name.toLowerCase().includes(searchInput.toLowerCase()))
                        return item;
                })
                .map((person) => {
                    return <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                           </tr>
                })
                .slice(firstPostIndex, lastPostIndex)}              
            </tbody>
        </table>
        </div>
    </div>
  )
}

/*
working inside <tbody>
first -> the array will be filtered out based on input value
second -> the filtered array is mapped with <tr> and <td>
third -> taking the slice from the result array to show only required array elements on viewport and utilize pagination

*/