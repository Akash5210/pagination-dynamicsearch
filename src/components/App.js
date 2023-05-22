import { useEffect, useState } from 'react';
import '../App.css';
import Person from "./Person";
import tableCollection from "../mockaroo-data.json"
import Pagination from './Pagination';

function App() {
  const [tableData, setTableData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);          //it is current active page
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(()=>{
    setTableData(tableCollection);
  }, [])
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = tableData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App container">
      <h2 className='mt-2'>Welcome to person data</h2>
      <Person 
        tableData={tableData} 
        firstPostIndex={firstPostIndex} 
        lastPostIndex={lastPostIndex}  
        setCurrentPage={setCurrentPage}
      />
      {/* <Person tableData={currentPosts} /> */}
      <Pagination 
        totalPosts={tableData.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
